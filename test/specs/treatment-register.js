const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;


describe('Treatment register page  ', () => {

    it('Login under location user and go to the treatment register page  ', () => {
        browser.url ('/');
        $('#Username').addValue('bolacslu');
        $('#Password').addValue(123456);
        $('#login-button').click();
       // browser.pause(1000);
        const registerDropdown  = $('a*=Register') // find 'a' element by text tretment
        console.log(registerDropdown.getText()) // outputs: "Register" - item name
        registerDropdown.click()
       // browser.pause(1000);

        const treatmentMenuItem = $('a*=Treatment') // find 'a' element by text treatment
        console.log(treatmentMenuItem.getText()) // outputs: "Treatment" - item name
        console.log(treatmentMenuItem.getAttribute('href')) // outputs: "https://192.168.10.49:8100/en/Treatment/Register"
        treatmentMenuItem.click()
        //browser.pause(1000);

    })

    it.skip('Register new treatment report', () => {
        $('#add-new-treatment-btn').waitForDisplayed()
        const addNewTreatmentButton = $('#add-new-treatment-btn') // find 'addNewTreatmentButton
        addNewTreatmentButton.click()
        browser.pause(1000);

        const openDatePicker = $('#counted-date-date-picker') // find 'addNewTreatmentButton
        openDatePicker.click()
        browser.pause(1000);

        const currentDate = new Date().getUTCDate();  //gets current date
        console.log('current date = ' + currentDate)

        let selectDate = $$('.day:not(.new):not(.old)').find(function(item){return item.getText() == currentDate })
        console.log('date which will be selected is ' + selectDate.getText())
        //console.log($$('.day:not(.new):not(.old)').find(function(item){return item.getText() === currentDate }))
        selectDate.click()
        browser.pause(2000);
      // const selectDay = $$('td')[date]; //in this case it is index
       // console.log(selectDay)
        //console.log('date to select is ' + selectDay.getText())
        //selectDay.click()

      //  const datePicker =  $$('.day') //cycle which displays the data from the end of the array
       // console.log(datePicker.length)
      //  for(i = datePicker.length - 1; i > datePicker.length - 15; i-- ){
           //console.log(datePicker[i].getText());
        // }

       //for(i = 0; i < datePicker.length; i++ ){  //cycle which displays the data from the begining of the array
         //console.log(datePicker[i].getText())
        //
         //  }

       //const selectDay = $('td*=25')
       // console.log(selectDay)
       // selectDay.click()

        //openDatePicker.addValue(1) // enters 1 in date picker and date picker sets current date automatically
       // console.log(openDatePicker)

        const pensDropdown = $('#pens_selector_chosen')
        pensDropdown.click() // opens pens dropdown list

        const penM1 = $('li*=M1') // search pen 'M1'
        console.log(penM1.getText())
        penM1.click() // adds pen 'M1' to the report

        const addComment = $('#coment-for-all-pen-input')
        addComment.addValue('Comment for the pen M1')

        const openTreatmentDropdown = $('#treatment-selector-for-all-pens')
        openTreatmentDropdown.click()

        const selectTreatmentType = $('option*=Slice')
        console.log(selectTreatmentType.getText())
        selectTreatmentType.click()

        const addPens = $('#add-new-treatment-for-pens-btn')
        addPens.click() // Click on 'Add pens' button

        const enterFishPenValue = $('.scp-fish-per-pen-input')
        enterFishPenValue.click()

        enterFishPenValue.clearValue()

        enterFishPenValue.addValue(1500)
        //console.log(enterFishPenValue.getText())

        const save = $('#save-btn') // save the report
        save.click()

        $('#toast-container').waitForDisplayed()
        const toaster = $('#toast-container')
        console.log('Toaster popup message is ' + '"' + toaster.getText() + '"')

        //browser.pause(4000);

        assert.equal(toaster.getText(), 'Treatment was saved successfully')
    })


    it('Pen "M1" exists in the list  ', () => {
        browser.pause(4000);
        const penM1Name = $$('div.scp-pen-code').find(function(item){return item.getText() === 'M1'}) //to be changed to the dataset

        console.log(penM1Name.getText())

        const m1PenId = $(penM1Name).getAttribute("data-pen-id")

        console.log('pen M1 id = ' + m1PenId)

        //assert.equal(penM1.getText(), 'M1', 'pen name is wrong')
        expect(penM1Name.getText()).to.equal('M1') // Chai expect assertion
        //penM1.getText().should.equal('M1') //chai should assertion



    })

    it('Fish/pen value is  1500', () => {

        const penM1Name = $$('div.scp-pen-code').find(function(item){return item.getText() === 'M1'})
        const m1PenId = $(penM1Name).getAttribute("data-pen-id") //find pen id(data-pen-id attribute) by pen name
        console.log('pen M1 id = ' + m1PenId)

        const  fishPenValue  = $('input'.m1PenId).getValue()
        console.log(fishPenValue)


    })



})



