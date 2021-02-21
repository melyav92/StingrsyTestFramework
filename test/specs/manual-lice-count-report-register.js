const assert = require('assert')

describe('Manual lice count register ', () => {
    it('Manual lice count report is successfully saved', () => {
        browser.url ('/');
        $('#Username').addValue('bolacslu');
        $('#Password').addValue(123456);
        $('#login-button').click();
        browser.pause(2000);
        let register = $('.open').getText();
        console.log(register)

            // register.click()

         //let registermanualcount = $('=RegisterManual').getAttribute('href')
        //console.log(registermanualcount)
        //register.click()

        assert.strictEqual(title, ' WebdriverIO')
    })
})



