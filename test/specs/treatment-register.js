const {assert} = require('chai');

describe('Treatment count register ', () => {
    it('Register treatment count for the location', () => {
        browser.url ('/');
        $('#Username').addValue('bolacslu');
        $('#Password').addValue(123456);
        $('#login-button').click();

        const registerDropdown  = $('a*=Register') // find 'a' element by text tretment
        console.log(registerDropdown.getText()) // outputs: "Register" - item name
        registerDropdown.click()
        browser.pause(1500);

        const treatmentMenuItem = $('a*=Treatment') // find 'a' element by text treatment
        console.log(treatmentMenuItem.getText()) // outputs: "Treatment" - item name
        console.log(treatmentMenuItem.getAttribute('href')) // outputs: "https://192.168.10.49:8100/en/Treatment/Register"
        treatmentMenuItem.click()
        browser.pause(4000);



        //browser.executeScript("document.getElementById('datepicker').value='02/11/2019'"); //find date
        //browser.executeScript()

        assert.strictEqual(registerMenuItemName, 'REGISTER')
    })
})



