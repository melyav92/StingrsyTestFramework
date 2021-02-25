const {assert} = require('chai');

describe('Treatment register page  ', () => {
    it('Treatment report is saved', () => {
        browser.url ('/');
        $('#Username').addValue('bolacslu');
        $('#Password').addValue(123456);
        $('#login-button').click();
        browser.pause(1000);

        const registerDropdown  = $('a*=Register') // find 'a' element by text tretment
        console.log(registerDropdown.getText()) // outputs: "Register" - item name
        registerDropdown.click()
        browser.pause(1000);


        const treatmentMenuItem = $('a*=Treatment') // find 'a' element by text treatment
        console.log(treatmentMenuItem.getText()) // outputs: "Treatment" - item name
        console.log(treatmentMenuItem.getAttribute('href')) // outputs: "https://192.168.10.49:8100/en/Treatment/Register"
        treatmentMenuItem.click()
        browser.pause(1000);

        const addNewTreatmentButton = $('#add-new-treatment-btn') // find 'addNewTreatmentButton
        addNewTreatmentButton.click()
        browser.pause(1000);

        const openDatePicker = $('#counted-date-date-picker') // find 'addNewTreatmentButton
        openDatePicker.click()
        //browser.pause(1000);


//-----------------------------------------------------------------------------------------------------------

        const currentDate = new Date().toISOString().slice(8, 10);  //gets current date
        console.log('current date = ' + currentDate)
        console.log(typeof(Number(currentDate)))


        const date = $$('td').length - 53 + 37;
        console.log('date picker length ' + $$('td').length)
        console.log('date index is ' + date)



        const selectDay = $$('td')[date];
        console.log(selectDay)
        console.log('date to select is ' + selectDay.getText())
        selectDay.click()




        browser.pause(4000);


        //const selectDay = $('td*=25')
       // console.log(selectDay)
       // selectDay.click()
        //browser.pause(2000);



        //openDatePicker.addValue(1)
       // console.log(openDatePicker)

        const pensDropdown = $('#pens_selector_chosen')
        pensDropdown.click()

        const penM1 = $('li*=M1')
        console.log(penM1.getText())
        penM1.click()

        const openTreatmentDropdown = $('#treatment-selector-for-all-pens')
        openTreatmentDropdown.click()

        const selectTreatmentType = $('option*=Slice')
        console.log(selectTreatmentType.getText())
        selectTreatmentType.click()

        const addPens = $('#add-new-treatment-for-pens-btn')
        addPens.click()

        const enterFishpenValue = $('.scp-fish-per-pen-input')
        enterFishpenValue.addValue(1500)
        console.log(enterFishpenValue.getText())

        const save = $('#save-btn')
        save.click()

        //const toaster = $('#toast-container')
        //console.log(toaster.getText())


        browser.pause(4000);

        assert.strictEqual(browser.getTitle(), 'Treatment register')
    })


})



