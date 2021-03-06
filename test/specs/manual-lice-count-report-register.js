const {assert} = require('chai');

describe('Manual lice count register ', () => {
    it('Open Manual lice count report page', () => {
        browser.url ('/');
        $('#Username').addValue('bolacslu');
        $('#Password').addValue(123456);
        $('#login-button').click();

        const cameraMenuItem = $('.dropdown-toggle, .arrow').getText()
        console.log(cameraMenuItem)

        $('.dropdown-toggle, .arrow').click(); //click on the 'Camera' menu item by class
        browser.pause(1000);

        const registerMenuItemName = $('//*[@id="main-nav-menu-collapse"]/ul/li[3]/a').getText()
        console.log(registerMenuItemName)

        const registerLink = $('//*[@id="main-nav-menu-collapse"]/ul/li[3]')
        registerLink.click(); //click on the 'Register' menu item
        browser.pause(1000);

        const registerManualCountLink = $('//*[@id="main-nav-menu-collapse"]/ul/li[3]/ul/li[4]');
        registerManualCountLink.click(); //click on the 'Register manual count' menu item
        browser.pause(4000);


        ////Find 'Register' dropdown in another(easier) way
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



