module.exports = {
    loggingOptions: {
        debug: false
    },
    browserOption: {
        pageToTrack: {
            url: 'https://www.amazon.it/Sony-PlayStation%C2%AE5-DualSenseTM-Wireless-Controller/dp/B08H99BPJN/ref=rtpb_2?pd_rd_w=k5VXQ&pf_rd_p=c4e292c0-7449-4e07-92c0-14100af80ca3&pf_rd_r=5TQH6G13D7MW72M20BJ8&pd_rd_r=a0e6d0ca-594d-42e9-bb3b-487abd9269e6&pd_rd_wg=KkrIV&pd_rd_i=B08H99BPJN&psc=1',
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
