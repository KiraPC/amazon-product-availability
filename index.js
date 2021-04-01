const config = require('./config');
const puppeteer = require('puppeteer');
const userAgent = require('user-agents');
const refresh = require('./lib/refresh');
const logger = require('./utils/logger');

function onClosed(instance) {
    logger.error(`${instance} closed, disconnecting.`);
    process.exit(1);
}

async function start() {
    // create a new browser instance
    logger.info('Opening browser ...');
    const browser = await puppeteer.launch({ headless: config.browserOption.headless });
    browser.on('disconnected', onClosed.bind(null, 'Browser'));
    
    const page = await browser.newPage();
    page.on('close', onClosed.bind(null, 'Page'));

    await page.setViewport({ width: 1280, height: 800 });
    await page.setUserAgent(userAgent.toString())
    await page.goto(config.browserOption.pageToTrack.url, { timeout: config.browserOption.pageToTrack.timeout });

    refresh(page);
}

module.exports = start;