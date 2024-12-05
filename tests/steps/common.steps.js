import { expect } from 'chai';
import { Given, When, Then } from '@cucumber/cucumber';
import ActionUtils from '../../utilities/actionUtility';
import actionUtility from '../../utilities/actionUtility';

const commonUtility = require('../../utilities/commonUtility');
const elem = require("../../PageObject/elementsPage").default;
var rangeTo = " ";
var rangeFrom = " ";
let menu = "";
let applicantname = "";
const ENV = process.env.ENV;


Then(/^verify the success toast message displayed "(.*)"$/, async (str) => {
    await ActionUtils.waitForNonExistence(elem.loader_icon)
    await ActionUtils.checkForNotification(5000, elem.common_page, elem.common_toast_message, str);
})

Then(/^verify that Cancel option in pop-up modal is always enabled$/, async () => {
    expect(await ActionUtils.isClickable(elem.common_cancel));
})

Then(/^verify that Close option in pop-up modal is always enabled$/, async () => {
    expect(await ActionUtils.isClickable(elem.common_close));
})

Then(/^verify that "(.*)" button displayed in page is always enabled$/, async (button_name) => {
    expect(await ActionUtils.isClickable(elem.common_page_button(button_name)));
})

Then(/^verify that edit button displayed in page is always enabled$/, async () => {
    await browser.pause(5000);
    expect(await ActionUtils.isDisplayed(elem.common_edit_button)).to.equal(true);
    expect(await ActionUtils.isClickable(elem.common_edit_button)).to.equal(true);
})

Then(/^verify the help icon displayed next to the page header$/, async () => {
    expect(await ActionUtils.isDisplayed(elem.common_help_icon)).to.equal(true);
})

Then(/^verify the SubHeader is "(.*)"$/, async (SubHeader) => {
    await ActionUtils.waitForPageToLoadAndPause();
    let header = await ActionUtils.getText(elem.common_sub_header);
    expect(header).to.equal(SubHeader);
})

Then(/^verify the pageHeader is "(.*)"$/, async (pageHeader) => {
    await browser.pause(20000);
    expect(await ActionUtils.getText(elem.common_page_header)).to.equal(pageHeader);
})

Then(/^verify that Actor is redirected to "(.*)" page and page Header is "(.*)"$/, async (page, header) => {
    await browser.pause(5000);
    expect(await ActionUtils.waitForPageToLoad(), true, `Unable to load the ${page} page`);
    expect(await ActionUtils.waitForNonExistence(elem.loader_icon)).to.equal(true)
    let header1 = await ActionUtils.getText(elem.common_page_header);
    expect(header1).to.equal(header);
})

Then(/^Actor "(.*)" from application$/, async (option) => {
    await browser.pause(4000);
    await ActionUtils.scrollIntoView(elem.common_profile_icon)
    await ActionUtils.click(elem.common_profile_icon);
    await ActionUtils.click(elem.common_account_dropdown_link(option));
    expect(await ActionUtils.waitForPageToLoad(), true, `Unable to load the page`);
    expect(await ActionUtils.waitForExistence(elem.login_page_header, "Sign In"), true)
})

Then(/^verify the history displayed next to the help icon$/, async () => {
    expect(await ActionUtils.isDisplayed(elem.common_history)).to.equal(true);
})

Then(/^verify the history link is not displayed on the page$/, async () => {
    expect(await ActionUtils.isExistingNoDisplay(elem.common_history)).to.equal(false);
})

Then(/^actor clicks on "(.*)" button$/, async (button) => {
    //expect(await ActionUtils.waitForPageToLoad(), true, "button is not present");
    await browser.pause(3000)
    expect(await ActionUtils.waitForPageToLoadAndPause(), true, "button is not present");
    await ActionUtils.scrollIntoView(elem[button]);
    await ActionUtils.click(elem[button]);
});

Then(/^verify that the static text for "(.*)" is "(.*)"$/, async (element, StaticText) => {
    await browser.pause(5000)
    await ActionUtils.isDisplayed(elem[element]);
    let elems = await ActionUtils.getElements(elem[element]);
    expect(await ActionUtils.getText(elems[0])).to.equal(StaticText);
});

When(/^Actor clicks on "(.*)" button$/, async (button_name) => {
    await ActionUtils.click(elem.common_page_button(button_name));
    await browser.pause(3000)
});

When(/^Actor fill in "([^"]*)" with "([^"]*)"$/, async (element, value) => {
    await ActionUtils.addValue(elem[element], value);
});

When(/^user click on "(.*)" (menu|sub menu)$/, async (menu_item, menuORsubmenu) => {
    let menu = await new Menus(menu_item).navigatTo()
    expect(await ActionUtils.waitForNonExistence(elem.loader_icon)).to.equal(true)
    expect(await ActionUtils.waitForPageToLoad(), true, "Unable to load application page");
})

Given(/^verify that the actor can see start Date and end Date picker to select the date range$/, async () => {
    expect(await ActionUtils.isExisting(elem.common_startDate_picker)).to.be.true
    expect(await ActionUtils.isExisting(elem.common_endDate_picker)).to.be.true
});

Then(/^actor click on "(.*)" button by title$/, async (button_title) => {
    expect(await ActionUtils.waitForPageToLoad(), true, "page is still loading");
    await ActionUtils.scrollIntoView(elem.common_button_by_title(button_title));
    await ActionUtils.click(elem.common_button_by_title(button_title));
})

Then(/^verify that "(.*)" button by title is enabled$/, async (button) => {
    expect(await ActionUtils.isEnabled(elem.common_button_by_title(button))).to.be.true;
})

Then(/^the actor is on "(.*)" page with title "(.*)"$/, async (page_name, page_title) => {
    await ActionUtils.waitForPageToLoadAndPause();
    await ActionUtils.waitForDisplayed(elem[`${page_name}`]);
    expect(await ActionUtils.getText(elem[`${page_name}`])).to.equal(page_title);
})

Then(/^actor clicks on the checkbox "(.*)"$/, async (text) => {
    expect(await ActionUtils.click(elem.checkbox_common(text)), true, `unable to find the ${text} checkbox`);
});

When(/^the actor refresh the application browser$/, async () => {
    await ActionUtils.waitForPageToLoad();
    await browser.refresh();
    await browser.pause(3000);
})

Then(/^actor clicks on the link "(.*)"$/, async (element) => {
    expect(await ActionUtils.clickAndWait(elem[element]), true, `unable to find the ${element} link`);
});

Then(/^actor click on "(.*)" button by label$/, async (btt_name) => {
    expect(await ActionUtils.waitForPageToLoad(), true, "page is still loading");
    await ActionUtils.click(elem.common_button_by_label(btt_name));
})

Then(/^verify that "(.*)" pop-up window (opened|not opened)$/, async (modal_title, field) => {
    if (field == "opened") {
        expect(await ActionUtils.waitForDisplayed(elem.popup_modal));
        expect(await ActionUtils.getText(elem.popup_modal_title)).to.equal(modal_title);
    } else {
        let elems = await ActionUtils.getElements(elem.popup_modal);
        let temp = elems.length;
        expect(temp).to.equals(0);
    }
})

When(/^the actor provides input characters "(.*)" in the (text area|input) "(.*)"$/, async (value, selector, identifier) => {
    await ActionUtils.clearInput(elem.common_input_text(identifier));
    await ActionUtils.setValue(elem.common_input_text(identifier), value);
    await browser.pause(3000)
})

Then(/^verify that the system displays a message as no content "(.*)"$/, async (message) => {
    expect(await pagination.getTotalRecordsfromLabel()).to.equal(0);
    expect(await ActionUtils.getText(elem.common_no_containt_display), message, `${message} is not present on the page`);
})

Then(/^Verify the actor can see "(.*)" section on "(.*)" page$/, async (elementName, pageName) => {
    expect(await ActionUtils.isDisplayed(elem[elementName])).to.equal(true)
})

When(/^actor clicks on the element "(.*)"$/, async (element) => {
    await ActionUtils.click(elem[element]);
})

Then(/^verify the "(.*)" button by label is displayed and (enabled|disable)$/, async (button_name, state) => {
    expect(await ActionUtils.isDisplayed(elem.common_button_by_label(button_name)), true);
    state == "enabled" ? expect(await ActionUtils.isEnabled(elem.common_button_by_label(button_name))).to.equal(true) : expect(await ActionUtils.isEnabled(elem.common_button_by_label(button_name))).to.equal(false)

})

When(/^actor closes the current window in the browser$/, async () => {
    await ActionUtils.closeChildWindow();
    await ActionUtils.switchToParentWindow();
})

Then(/^actor clicks on "(.*)" key$/, (key) => {
    ActionUtils.pressKey(key);
    browser.pause(3000)
})

When(/^actor provides value "(.*)" for "(.*)" inputbox$/, async (fieldname, inputfiledname) => {
    await ActionUtils.moveTo(elem.common_input_text(inputfiledname))
    await ActionUtils.clearInput(elem.common_input_text(inputfiledname))
    await ActionUtils.addValue(elem.common_input_text(inputfiledname), fieldname)
    await ActionUtils.pressKey('Tab');
    expect(await ActionUtils.isExistingNoDisplay(elem.common_error_msg(inputfiledname))).to.equal(false)
    // These below lines of code is specific to E4P.
    // await ActionUtils.setValue(elem.common_input_text(inputfiledname), (parseInt(fromvalue) + parseInt(tovalue)) / 2)
    // await ActionUtils.pressKey('Tab');
    // expect(await ActionUtils.isExistingNoDisplay(elem.common_error_msg(fieldname))).to.equal(false)
})

Then(/^verify that "(.*)" button is (disabled|enabled)$/, async (button, status) => {
    let popupButtonAttribute = await ActionUtils.getAttribute(elem.common_popup_option_button(button), "disabled");
    status == "enabled" ? expect(await ActionUtils.isEnabled(elem.common_popup_option_button(button))).to.equal(true) : expect(popupButtonAttribute).to.equal('true');
})


Then(/^verify if "(.*)" button is present in pop up$/, async (buttonName) => {
    expect(await ActionUtils.isDisplayed(elem.filters_save_button(buttonName)), true, `Button is not present for reply`);
    await ActionUtils.isClickable(elem.filters_save_button(buttonName));
});

Then(/^verify the error message shown for "(.*)" field is "(.*)"$/, async (FieldId, ErrorMessage) => {
    await ActionUtils.isDisplayed(elem.ErrorMessage(FieldId));
    expect(await ActionUtils.getText(elem.ErrorMessage(FieldId))).to.equal(ErrorMessage);
});

Then(/^Verify "(.*)" pop up window is displayed$/, async (modal_title) => {
    expect(await ActionUtils.isDisplayed(elem.popup_modal)).to.equal(true);
    expect(await ActionUtils.getText(elem.popup_modal_title)).to.equal(modal_title);
})

When(/^the Actor click on "(.*)" option$/, async (option) => {
    await ActionUtils.click(elem.modal_button(option));
})

When(/^actor provides value "(.*)" to "(.*)" inputbox$/, async (fieldname, inputfieldname) => {
    await ActionUtils.moveTo(elem.common_input_text(inputfieldname))
    await ActionUtils.setValue(elem.common_input_text(inputfieldname), (parseInt(rangeFrom) + parseInt(rangeTo)) / 2)
    await ActionUtils.pressKey('Tab');
    expect(await ActionUtils.isExistingNoDisplay(elem.common_error_msg(fieldname))).to.equal(false)
})

Then(/^verify the text in template tooltip is shown as "(.*)"$/, async (desc) => {
    expect(await ActionUtils.getText(elem.desc_hover_text)).to.equal(desc)
})

When(/^user navigates away from the (template dropdown|program help text|menu dropdown)$/, async (field) => {
    await ActionUtils.pressKey("Escape");
})

When(/^user click on dashboard menu$/, async () => {
    menu = await new Menus("dashboard").navigatTo()
})

When(/^actor clicks on "(.*)" button displayed$/, async (buttonname) => {
    expect(await ActionUtils.waitForNonExistence(elem.loader_icon)).to.equal(true)
    applicantname = await ActionUtils.getText(elem.common_page_header);
    await ActionUtils.click(elem.detailspage_scoressection_button(buttonname))
})

Then(/^the actor should be able to view "(.*)" as "(.*)"$/, async (element, notificationMesg) => {
    expect(await ActionUtils.isDisplayed(elem[element])).to.equal(true);
    expect(await ActionUtils.getText(elem[element])).to.contain(notificationMesg)
})

Then(/^verify the (Current|Upcoming) season is highlighted$/, async (season) => {
    (season == "Current") ? expect((await ActionUtils.getAttribute(elem.currentSeasonLink, "class"))).to.include('aamc-subheader-item-active') : expect((await ActionUtils.getAttribute(elem.upcomingSeasonLink, "class"))).to.include('aamc-subheader-item-active');
})

When(/^verify "(.*)" button is displayed next to the "(.*)" button at top and bottom of the page and always enabled$/, async (savebtn, previewbtn) => {
    let preview_bttn = await ActionUtils.getElements(elem.filters_save_button(previewbtn));
    for (let i = 0; i < preview_bttn.length; i++) {
        expect(await ActionUtils.getText(preview_bttn[i])).to.equal(previewbtn.toUpperCase())
        expect(await ActionUtils.getText(preview_bttn[i].nextElement())).to.equal(savebtn.toUpperCase())
    }
})

When(/^actor selects "(.*)" option from left navigation panel$/, async (module) => {
    await ActionUtils.clickAndWait(elem.leftNavModule(module))
})

Then(/^verify the (SubHeader|SectionHeader) of the (interviewers|Edit Feedback form|program management|Applicants|Create Invitation) page is "(.*)"$/, async (field, HeaderName, SubHeader) => {
    field == "SubHeader" ? expect(await ActionUtils.getText(elem.subHeaderInterview)).to.equal(SubHeader) : expect(await ActionUtils.getText(elem.interviewerToggleText)).to.equal(SubHeader)
})

When(/^verify that "(Save|SAVE)" button is not displayed$/, async (button) => {
    expect(await actionUtility.waitForNonExistence(elem.common_page_button(commonUtility.capitalizeFirstLetter(button)))).to.equal(true);
})

When(/^verify that the tool tip "(.*)" is displayed on hovering over the "(.*)" icon for fields$/, async (tip, status) => {
    let inputList = await actionUtility.getElements(elem.main_data_filters_show_hide);
    let fieldList = await actionUtility.getElements(elem.main_data_filters_field_set);
    for (let i = 0; i < fieldList.length; i++) {
        var showIcon = (await actionUtility.getAttribute(inputList[i], "class")).includes("aamc-i-show icon-show");
        var hideIcon = (await actionUtility.getAttribute(inputList[i], "class")).includes("aamc-i-hide icon-hide");
        await actionUtility.hover(inputList[i])
        if ((status == "Show") && (showIcon)) {
            expect(await actionUtility.getText(TagsPage.elements.desc_hover_text)).to.equal(tip)
        }
        else if ((status == "Hide") && (hideIcon)) {
            expect(await actionUtility.getText(TagsPage.elements.desc_hover_text)).to.equal(tip)
        }
    }
})

Then(/^verify that "(Save|SAVE)" option in pop-up modal is always enabled$/, async (button) => {
    expect(await ActionUtils.isClickable(elem.common_page_button(commonUtility.capitalizeFirstLetter(button))));
})

Then(/^verify that "(Cancel|CANCEL)" option in pop-up modal is always enabled$/, async (button) => {
    expect(await ActionUtils.isClickable(elem.modal_cancel_button));
})

Then(/^actor click on the "(.*)" option$/, async (option) => {
    await ActionUtils.waitForSpecificTime(4000);
    if (option == "X") {
        await ActionUtils.waitForDisplayed(elem.modal_close_icon);
        expect(await ActionUtils.click(elem.modal_close_icon), 'button clicked');
    } else {
        // expect(await ActionUtils.isEnabled(elem.ISPS_action_button(option))).to.equal(true);
        expect(await ActionUtils.click(elem.ISPS_action_button(option)), 'button clicked');
    }
})

Then(/^verify that "(.*)" pop-up window closed$/, async (modal_title) => {
    expect(await ActionUtils.waitForNonExistence(elem.popup_modal1)).to.equal(true);
    expect(await ActionUtils.waitForNonExistence(elem.loader_icon)).to.equal(true)
})

Then(/^Verify the system should display the "(.*)" and "X" option as depicted in the wireframe.$/, async (option) => {
    expect(await ActionUtils.isDisplayed(elem.modal_close_icon), true, `not displayed in modal`)
    expect(await ActionUtils.isDisplayed(elem.ISPS_action_button(option)), true, `not displayed in modal`)
})

Then(/^user navigates away from the dropdown$/, async () => {
    await ActionUtils.pressKey("Tab");
})

Then(/^actor selects "(.*)" radio button$/, async (radiobutton) => {
    let radioelements = await ActionUtils.getElements(elem.filter_criteria_radio_buttons);
    for (let i = 0; i < radioelements.length; i++) {
        if (await ActionUtils.getText(radioelements[i]) == radiobutton) {
            expect(await ActionUtils.click(radioelements[i]), 'unable to click the radio button');
        }
    }
})

Then(/^actor clicks on (previous|next) arrow untill it reaches to the range "(.*)"$/, async (navigation, range) => {
    let temp = false;
    while (temp != true) {
        await ActionUtils.moveToClick(elem.calendarButton(navigation));
        let yearRange = await ActionUtils.getElements(elem.yearRange(range));
        let tempnum = yearRange.length;
        if (tempnum == '1') {
            temp = true;
        } else {
            temp = false;
        }
    }
})

Then(/^verify the error message "(.*)" displayed under "(.*)" field$/, async (message, fieldname) => {
    expect(await ActionUtils.getText(elem.In_column_date_error(fieldname))).to.equal(message);
});

Then(/^verify the help icon is not displayed on the page$/, async () => {
    expect(await ActionUtils.isExistingNoDisplay(elem.common_help_icon)).to.equal(false);
})

Then(/^verify the page contains the text "(.*)"$/, async (text) => {
    await browser.pause(8000);
    expect(await ActionUtils.getText(elem.common_element_by_Text(text))).to.equal(text);
})

When(/^the actor clicks on "(.*)" button on the page$/, async (button_text) => {
    await ActionUtils.click(elem.common_button(button_text));
})

Then(/^verify the page does not contains the field "(.*)"$/, async (text) => {
    await browser.pause(5000);
    expect(await ActionUtils.isExistingNoDisplay(elem.common_element_by_Text(text))).to.equal(false);
})

Then(/^verify user redirected to "(.*)" page$/, async (text) => {
    await browser.pause(5000);
    expect(await ActionUtils.getText(elem.common_element_by_Text(text))).to.equal(text);
})

Then(/^verify informational text displayed as "(.*)"$/, async (text) => {
    await browser.pause(5000);
    expect(await ActionUtils.getText(elem.common_element_by_Text(text))).to.equal(text);
})

Then(/^Verify the system should display the "(.*)" option at the top right corner$/, async (option) => {
    expect(await ActionUtils.isDisplayed(elem.modal_close_icon), true, `not displayed in modal`)
})

Then(/^verify the Results page contains the text "(.*)"$/, async (text) => {
    await browser.pause(5000);
    expect(await ActionUtils.getText(elem.common_element_by_Text(text))).includes(text);
})

Then(/^verify the selected tab "(.*)" is not highlighted$/, async (tab) => {
    expect((await ActionUtils.getAttribute(elem[tab], "class"))).to.not.include("aamc-nav-item-active")
})

Then(/^verify that "(.*)" button by title is not displayed$/, async (button) => {
    expect(await ActionUtils.isExistingNoDisplay(elem.common_button_by_title(button))).to.be.false;
})

Then(/^verify the page has the text "(.*)"$/, async (text) => {
    await browser.pause(8000);
    expect(await ActionUtils.getText(elem.element_by_Text(text))).to.equal(text);
})

When(/^Actor click on the element "(.*)" and verify the dropdown options displayed$/, async (menu_name, DataTable) => {
    await ActionUtils.click(elem.menu_arrow(menu_name));
    let list = DataTable.hashes();
    let data = await ActionUtils.getElements(elem.menu_arrow(menu_name));
    if (list.length == data.length) {
        for (let i = 0; i < data.length; i++) {
            expect(await ActionUtils.getText(data[i])).to.equal(list[i].options)
            expect(await ActionUtils.getText(elem.dropdown_menu_items)).to.equal(list[i].Menu_Items);
        }
    }
})

Then(/^Actor click on "(.*)" dropdown menu option and verifies the browser link displayed as expected from "(.*)"$/, async (menu_name, fileName, DataTable) => {
    let list = DataTable.hashes();
    for (let i = 0; i < list.length; i++) {
        menu_name == "Scheduler" ? await ActionUtils.click(elem.select_dropdown_menu(list[i].Menu_Items)) : await ActionUtils.click(elem.select_applications_menu(list[i].Menu_Items))
        const urlData = require("../../tests/testData/" + fileName + ".js");
        await browser.pause(10000);
        let newURL = urlData[list[i].PDWSURL].replace('${env}', ['ftest', 'pdwsftest', 'pdwsrwftest'].includes(ENV) ? 'ftest' : 'staging')
        expect(await ActionUtils.getUrl()).to.include(newURL);
        ['ftest', 'pdwsftest', 'pdwsrwftest'].includes(ENV) ? await ActionUtils.navigateTo('https://AAMCUser:BasicAuth1!@eras.ftest.aamc.org/eras-pm/#/program-management/current-season') : await ActionUtils.navigateTo('https://eras.staging.aamc.org/eras-pm/#/program-management/current-season')
        await ActionUtils.click(elem.menu_arrow(menu_name));
    }
})

Then(/^actor click on the "(.*)" option in Error popup modal$/, async (option) => {
    await ActionUtils.waitForSpecificTime(4000);
    if (option == "X") {
        await ActionUtils.waitForDisplayed(elem.error_modal_close);
        expect(await ActionUtils.click(elem.error_modal_close), 'button clicked');
    } else {
        await ActionUtils.waitForDisplayed(elem.error_modal_ok_button);
        expect(await ActionUtils.click(elem.error_modal_ok_button), 'button clicked');
    }
})

Then(/^verify the page does not contains the text "(.*)"$/, async (text) => {
    await browser.pause(3000)
    expect(await ActionUtils.isExistingNoDisplay(elem.common_element_by_Text(text))).to.equal(false);
})

When(/^user switches to the other tab in the same window$/, async () => {
    await ActionUtils.switchToChildWindow();
})

Then(/^Actor click on "(.*)" season menu option$/, async (season) => {
        await ActionUtils.click(elem.program_management_menu(season))
})

When(/^Actor click on the "(.*)" season menu$/, async (menu_name) => {
    await browser.pause(3000)
    await ActionUtils.click(elem.menu_arrow(menu_name));
})

Then(/^Actor click on "(.*)" pm option$/, async (menu) => {
    await browser.pause(15000)
    await ActionUtils.click(elem.pdws_pm_menu(menu))
})

Then(/^Verify the "(.*)" season menu option is (displayed|not displayed)$/, async (season, condition) => {
    condition=='displayed' ? expect (await ActionUtils.isDisplayed(elem.program_management_menu(season))).to.equal(true) : expect (await ActionUtils.isExistingNoDisplay(elem.program_management_menu(season))).to.equal(false)
})

Then(/^verify the chevron arrow is (expanded|collapsed) for "(.*)"$/, async (state, menu) => {
    (state == "expanded") ? expect((await ActionUtils.getAttribute(elem.menu_arrow(menu), "class"))).to.include('aamc-i-dropdown-arrow-up') : expect((await ActionUtils.getAttribute(elem.menu_arrow(menu), "class"))).to.include('aamc-i-dropdown-arrow');
})

Then(/^verify the chevron arrow is displayed for "(.*)"$/, async (menu_name) => {
    await browser.pause(10000)
    expect(await ActionUtils.isExistingNoDisplay(elem.menu_arrow(menu_name))).to.equal(true);
})

Then(/^Actor click on "(.*)" dropdown menu option$/, async (menu_name, DataTable) => {
    await ActionUtils.click(elem.menu_arrow(menu_name));
    let list = DataTable.hashes();
    for (let i = 0; i < list.length; i++) {
        menu_name == "Scheduler" ? await ActionUtils.click(elem.select_dropdown_menu(list[i].Menu_Items)) : await ActionUtils.click(elem.select_applications_menu(list[i].Menu_Items))
    }
})

When(/^Actor click on the element "(.*)" and verify the dropdown options are greyed out$/, async (menu_name, DataTable) => {
    await ActionUtils.click(elem.menu_arrow(menu_name));
    let list = DataTable.hashes();
    for (let i = 0; i < list.length; i++) {
            expect(await ActionUtils.isClickable(elem.select_applications_menu(list[i].Menu_Items))).to.equal(false)    
    }
})


Then("User pauses for {string}", function (element) {
   browser.pause(element);
  });

  
When(/^the user clicks on user account details$/, async () => {
	await ActionUtils.click(elem.rpeUser_AccountClick)
});

Then(/^the user should see sign out button available$/, async () => {
	expect(await ActionUtils.isDisplayed(elem.rpeUser_SignOut)).to.equal(true)
});

When(/^the user clicks on sign out button$/, async () => {
	await ActionUtils.click(elem.rpeUser_SignOut)
});

When('User clicks on escape key', async function(){
    await browser.pause(1000);
    await browser.keys(['Escape']);
  });

When('User maximizes browser',async function(){
browser.maximize();
});