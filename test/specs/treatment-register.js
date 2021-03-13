const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;


function penNameInReportDetailsTable (penName){
    return $$('div.scp-pen-code').find(function(item){return item.getText() === penName})
}; // this function accepts pen name and returns tru if this pen name exists in the report details section, or you can add getText() function to return pen name value


function penIdInReportDetailsTable (penName){
    return $$('div.scp-pen-code').find(function(item){return item.getText() === penName}).getAttribute("data-pen-id")
}; // this function accepts pen name and returns data attribute with pen id in the report details section


describe('Treatment register page  ', () => {

    it('Login under location user and go to the treatment register page  ', () => {
        browser.url ('/en/Authentication/Login/?ReturnUrl=%2fen%2fTreatment%2fRegister');
        $('#Username').addValue('bolacslu');
        $('#Password').addValue(123456);
        $('#login-button').click();
       // browser.pause(1000);
       // $('a*=Register').waitForDisplayed()
       // const registerDropdown  = $('a*=Register') // find 'a' element by text tretment
       // console.log(registerDropdown.getText()) // outputs: "Register" - item name
      //  registerDropdown.click()
       // browser.pause(1000);
      //  const treatmentMenuItem = $('a*=Treatment') // find 'a' element by text treatment
      //  console.log(treatmentMenuItem.getText()) // outputs: "Treatment" - item name
       // console.log(treatmentMenuItem.getAttribute('href')) // outputs: "https://192.168.10.49:8100/en/Treatment/Register"
      //  treatmentMenuItem.click()
        //browser.pause(1000);

    })

    it('Should register new treatment report for pen M1 and M2', () => {
        $('#counted-date-date-picker').waitForDisplayed()
        $('#add-new-treatment-btn').waitForDisplayed()
        const addNewTreatmentButton = $('#add-new-treatment-btn') // find 'addNewTreatmentButton
        addNewTreatmentButton.click()
        //browser.pause(1000);

        const openDatePicker = $('#counted-date-date-picker')
        openDatePicker.click()
        //browser.pause(1000);

        // gets current date
        const currentDate = new Date().getUTCDate();
        console.log('current date = ' + currentDate)
        $('#counted-date-date-picker').waitForDisplayed()
        $('.day:not(.new):not(.old)').waitForDisplayed()
        let selectDate = $$('.day:not(.new):not(.old)').find(function(item){return item.getText() == currentDate })
        console.log('date which will be selected is ' + selectDate.getText())
        //console.log($$('.day:not(.new):not(.old)').find(function(item){return item.getText() === currentDate }))
        selectDate.click()
       // browser.pause(2000);
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
         //  }
       //const selectDay = $('td*=25')
       // console.log(selectDay)
       // selectDay.click()
        //openDatePicker.addValue(1) // enters 1 in date picker and date picker sets current date automatically
       // console.log(openDatePicker)
        const pensDropdown = $('#pens_selector_chosen')
        pensDropdown.click() // opens pens dropdown list

        $('#pens_selector_chosen.chosen-container-active').waitForDisplayed()
        const selectPenM1 = $('li*=M1') // search pen 'M1'
        console.log('pen in the pens dropdown is ' + selectPenM1.getText())
        selectPenM1.click() // adds pen 'M1' to the report

        pensDropdown.click()
        $('#pens_selector_chosen.chosen-container-active').waitForDisplayed()
        const selectPenM2 = $('li*=M2')
        console.log('pen in the pens dropdown is ' + selectPenM2.getText())
        selectPenM2.click()

        //const addComment = $('#coment-for-all-pen-input')
        //addComment.addValue('Comment for all selected pens')

        const openTreatmentDropdown = $('#treatment-selector-for-all-pens')
        openTreatmentDropdown.click()
        $('#treatment-selector-for-all-pens').waitForDisplayed()

        // select treatment type for all selected pens
        const selectTreatmentType = $('option*=Slice')
        console.log('selected treatment type is ' + selectTreatmentType.getText())
        selectTreatmentType.click()

        //add selected pens to the report details section
        const addPens = $('#add-new-treatment-for-pens-btn')
        addPens.click() // Click on 'Add pens' button

        //add comment for pen M1
        $('input.comment-input').waitForDisplayed()
        const m1PenId = penIdInReportDetailsTable("M1") //find pen id(data-pen-id attribute) by pen name
        const  addCommentValueForPenM1  = $(`input.comment-input[data-pen-id="${m1PenId}"]`)

        addCommentValueForPenM1.addValue('Comment for the pen M1')

        //add comment for pen M2
        $('input.comment-input').waitForDisplayed()
        const m2PenId = penIdInReportDetailsTable("M2") //find pen id(data-pen-id attribute) by pen name
        const  addCommentValueForPenM2  = $(`input.comment-input[data-pen-id="${m2PenId}"]`)

        addCommentValueForPenM2.addValue('Comment for the pen M2')

        //add fish/pen value for pen M1
        $('input.scp-fish-per-pen-input').waitForDisplayed()
        const enterFishPenValueForPenM1 = $(`input.scp-fish-per-pen-input[data-pen-id="${m1PenId}"]`)

        enterFishPenValueForPenM1.click()
        enterFishPenValueForPenM1.clearValue()
        enterFishPenValueForPenM1.addValue(1500)

        //add fish/pen value for pen M1
        $('input.scp-fish-per-pen-input').waitForDisplayed()
        const enterFishPenValueForPenM2 = $(`input.scp-fish-per-pen-input[data-pen-id="${m2PenId}"]`)

        enterFishPenValueForPenM2.click()
        enterFishPenValueForPenM2.clearValue()
        enterFishPenValueForPenM2.addValue(3000)
        //console.log(enterFishPenValue.getText())
        // save the report
        const save = $('#save-btn') // save the report
        save.click()

        $('#toast-container').waitForDisplayed()
        const toaster = $('#toast-container')
        console.log('Toaster popup message is ' + '"' + toaster.getText() + '"')
        //browser.pause(4000);
        assert.equal(toaster.getText(), 'Treatment was saved successfully')
    })


    it('Should verify that pen "M1" exists in the report details list  ', () => {
        penNameInReportDetailsTable("M1").waitForDisplayed()
        //const penM1Name = $$('div.scp-pen-code').find(function(item){return item.getText() === 'M1'}) //to be changed to the dataset
        const penM1Name = penNameInReportDetailsTable("M1")
        console.log('Pen M1 exists in the list ' + penM1Name.getText())

        //assert.equal(penM1.getText(), 'M1', 'pen name is wrong')
        expect(penM1Name.getText()).to.equal('M1') // Chai expect assertion
        //penM1.getText().should.equal('M1') //chai should assertion

    })

    it('Should verify that treatment type for pen M1 is correct', () => {
        $('.inline-block.form-control.input-md.scp-treatmet-types.scp-white-select').waitForDisplayed()
        const penM1Container = penNameInReportDetailsTable("M1") //fin container with pen M1
        const penM1ParentContainer = penM1Container.parentElement() //select parent container td for the pen M1
        const treatmentTypeForM1 = penM1ParentContainer.nextElement().$$('select,option').find(function(item){return item.getText() === 'Slice (Emamectin)'})
        //go to the next element which contains treatment selector in the row with pen M1
        console.log('Pen M1 selected  treatment type is ' + '"' +  treatmentTypeForM1.getText() + '"')

        expect(treatmentTypeForM1.isSelected()).to.be.true

    })


    it('Should verify that Pen comment for pen M1 is correct', () => {
        const m1PenId = penIdInReportDetailsTable("M1") //find pen id(data-pen-id attribute) by pen name
        const  commentValueForPenM1  = $(`input.comment-input[data-pen-id="${m1PenId}"]`).getValue() //gets comment value by data pen id attribute
        console.log('Comment value for pen M1 is ' + '"' + commentValueForPenM1 + '"')

        commentValueForPenM1.should.equal('Comment for the pen M1')

    })

    it('Should verify that Fish/pen value for pen M1 is 1500', () => {
        $('div.scp-pen-code').waitForDisplayed()
        //const penM1Name = $$('div.scp-pen-code').find(function(item){return item.getText() === 'M1'})
        //const m1PenId = $(penM1Name).getAttribute("data-pen-id") //find pen id(data-pen-id attribute) by pen name
        const m1PenId = penIdInReportDetailsTable("M1")
        const  fishPenValueForPenM1  = $(`input.scp-fish-per-pen-input[data-pen-id="${m1PenId}"]`).getValue() //gets fish/pen value by data pen id attribute
        console.log('fish/pen value for pen M1 is ' + fishPenValueForPenM1)

        fishPenValueForPenM1.should.equal('1500')

    })

    //it('Pen comment is correct', () => {
    // const penM1Name = $$('div.scp-pen-code').find(function(item){return item.getText() === 'M1'})
    // const m1PenId = $(penM1Name).getAttribute("data-pen-id") //find pen id(data-pen-id attribute) by pen name
    // console.log('pen M1 id = ' + m1PenId)
    // const  commentValueForPenM1  = $(`input.comment-input[data-pen-id="${m1PenId}"]`).getValue()
    // console.log('Comment value is ' + '"' + commentValueForPenM1 + '"')
    // commentValueForPenM1.should.equal('Comment for the pen M1')
    // })

    it('Should verify that pen "M2" exists in the report details list  ', () => {
        $('div.scp-pen-code').waitForDisplayed()
        const penM2Name = penNameInReportDetailsTable("M2")
        console.log('Pen M2 exists in the list ' + penM2Name.getText())

        //assert.equal(penM1.getText(), 'M1', 'pen name is wrong')
        expect(penM2Name.getText()).to.equal('M2') // Chai expect assertion
        //penM1.getText().should.equal('M1') //chai should assertion

    })


    it('Should verify that treatment type for pen M2 is correct', () => {
        $('.inline-block.form-control.input-md.scp-treatmet-types.scp-white-select').waitForDisplayed()
        const penM2Container = penNameInReportDetailsTable("M2") //fin container with pen M2
        const penM2ParentContainer = penM2Container.parentElement() //select parent container td for the pen M2
        const treatmentTypeForM2 = penM2ParentContainer.nextElement().$$('select,option').find(function(item){return item.getText() === 'Slice (Emamectin)'})
        //go to the next element which contains treatment selector in the row with pen M2
        console.log('Pen M2 selected treatment type is ' + '"' +  treatmentTypeForM2.getText() + '"')

        expect(treatmentTypeForM2.isSelected()).to.be.true

    })

    it('Should verify that Pen comment for pen M2 is correct', () => {
        const m2PenId = penIdInReportDetailsTable("M2") //find pen id(data-pen-id attribute) by pen name
        const  commentValueForPenM2  = $(`input.comment-input[data-pen-id="${m2PenId}"]`).getValue() //gets comment value by data pen id attribute
        console.log('Pen comment value for pen M2 is ' + '"' + commentValueForPenM2 + '"')

        commentValueForPenM2.should.equal('Comment for the pen M2')

    })

    it('Should verify that Fish/pen value for pen M2 is 3000', () => {
        const m2PenId = penIdInReportDetailsTable("M2")
        const  fishPenValueForPenM2  = $(`input.scp-fish-per-pen-input[data-pen-id="${m2PenId}"]`).getValue() //gets fish/pen value by data pen id attribute
        console.log('fish/pen value for pen M2 is ' + fishPenValueForPenM2)

        fishPenValueForPenM2.should.equal('3000')

    })

    //it('Should delete just created report', () => {
        //const expandTreatmentReportsList = $('.scp-expandable-area-button-text')
        //expandTreatmentReportsList.click()
        //browser.pause(1500)
        //const  deleteTreatmentReport = $('.scp-registered-date.scp-treatment-date.selected')
      // console.log(deleteTreatmentReport.getText())
       // deleteTreatmentReport.previousElement().click()
       // browser.pause(1500)
        //const approveDelete = $('button.confirm')
       // browser.pause(1500)
      //  approveDelete.click()
     //  const cancelDelete = $('button.cancel')
       //browser.pause(1500)
       // cancelDelete.click()
      //  browser.pause(3000)
        //fishPenValueForPenM2.should.equal('3000')
        //deleteTreatmentReport.getText().should.not.equal(new Date().toLocaleDateString("en-GB"))
    //})


})



