const assert = require('assert')

describe('test suit name webdriver.io page', () => {

    it(' Test case - The page title is correct', () => {
        browser.url('https://192.168.10.49:8100/')
        const title = browser.getTitle();
        console.log("console log message " + title);
        assert.strictEqual(title, 'Login Stingray Online')
    })


    it('test case - location user is logged in to the Customer portal', elementId => {
        $('#Username').addValue('bolacslu');
        $('#Password').addValue(123456);
        $('#login-button').click();
        browser.pause(5000);
        let loggedin = $('.scp-row h3').getText();
        console.log(loggedin.slice(0, 15))
        assert.strictEqual(loggedin.slice(0, 15), `Recent activity`)
    })


    it('test case - find logout button', elementId => {
        let logoutButton = $('.scp-header-control a').getText();
        console.log(logoutButton)
        assert.strictEqual(logoutButton, `LOGOUT`)
    })
});


