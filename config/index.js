module.exports = {
    loggingOptions: {
        debug: false
    },
    browserOption: {
        pageToTrack: {
            url: '',
            timeout: 30000
        },
        selectors: {
            productTitle: '#productTitle.a-size-large.product-title-word-break',
            addToCart: '#add-to-cart-button',
            goToCart: '#nav-cart',
            goToPay: '#sc-buy-box-ptc-button',
            submitOrder: 'submitOrderButtonId-announce',
            goToLogin: '#nav-link-accountList',
            usernameForm: '#ap_email',
            passwordForm: '#ap_password',
            goToPasswordForm: '#continue',
            login: '#signInSubmit'
        },
        ids: {
            backInStock: 'backInStock',
            outOfStock: 'outOfStock'
        },
        waitForTimeout: 3000,
        headless: false,
        refreshInterval: 500
    },
}
