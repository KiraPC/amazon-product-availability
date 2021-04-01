const config = require('../config');
const logger = require('./logger');

/**
 * 
 * @param {import('puppeteer').Page} page 
 * @param {string} page 
 */
module.exports = async (page, selector) => {
    try {
        logger.debug(`waiting for ${selector} ...`);
        await page.waitForSelector(selector, { timeout: config.browserOption.waitForTimeout });
        logger.debug(`${selector} selector ready!`);
    } catch (error) {
        logger.debug(`Timeout exceeded!`);
        throw new Error(`Timeout exceeded, ${selector} was not ready in the given time!`);
    }
};
