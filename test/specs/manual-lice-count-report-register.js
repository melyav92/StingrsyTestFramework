const {assert} = require('chai');

describe('Manual lice count register ', () => {
    it('Open Manual lice count report is successfully saved', () => {
        browser.url ('/');
        $('#Username').addValue('bolacslu');
        $('#Password').addValue(123456);
        $('#login-button').click();
        const cameramenuitem = $('.dropdown-toggle, .arrow').getText()
        console.log(cameramenuitem)

        $('.dropdown-toggle, .arrow').click(); //click on the 'Camera' menu item
        browser.pause(1000);

        const registermenuitemname = $('//*[@id="main-nav-menu-collapse"]/ul/li[3]/a').getText()
        console.log(registermenuitemname)


        const registerlink = $('//*[@id="main-nav-menu-collapse"]/ul/li[3]')
        registerlink.click(); //click on the 'Register' menu item
        browser.pause(1000);

        const registermanualcountlink = $('//*[@id="main-nav-menu-collapse"]/ul/li[3]/ul/li[4]');
        registermanualcountlink.click(); //click on the 'Register manual count' menu item
        browser.pause(4000);


        assert.strictEqual(registermenuitemname, 'REGISTER')
    })
})



