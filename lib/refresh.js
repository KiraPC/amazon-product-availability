const config = require('../config');
const waitFor = require('../utils/waitFor');
const logger = require('../utils/logger');
 
/**
 * 
 * @param {import('puppeteer').Page} page 
 */
async function refresh(page) {
    await page.goto(config.browserOption.pageToTrack.url);
    await waitFor(page, config.browserOption.selectors.productTitle);

    const isNotAvailable = await page.evaluate((config) => {
        // document.querySelector('#a-autoid-8-announce.a-button-text').click();

        const backInStock = document.getElementById(config.browserOption.ids.backInStock);
        const outOfStock = document.getElementById((config.browserOption.ids.outOfStock));

        return backInStock != undefined || outOfStock != undefined;
    }, config);

    logger.info(`Product is ${isNotAvailable ? 'not available' : 'available'}`);

    setTimeout(refresh.bind(this, page), config.browserOption.refreshInterval);
};

module.exports = refresh;
