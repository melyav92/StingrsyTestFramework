const {assert} = require('chai');

describe('Manual lice count register ', () => {
    it('Manual lice count report is successfully saved', () => {
        browser.url ('/');
        $('#Username').addValue('bolacslu');
        $('#Password').addValue(123456);
        $('#login-button').click();
        let register = $('.dropdown-toggle, .arrow').getText()
        console.log(register)
        $('.dropdown-toggle, .arrow').click();
        browser.pause(2000);
            // register.click()

         //let registermanualcount = $('=RegisterManual').getAttribute('href')
        //console.log(registermanualcount)
        //register.click()

        assert.strictEqual(register, 'Register')
    })
})



