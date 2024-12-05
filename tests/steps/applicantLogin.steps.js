import { expect } from 'chai';
import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../../PageObject/LoginPage';
import ActionUtils from '../../utilities/actionUtility';
const elem = require("../../PageObject/elementsPage").default;
const url = require('../../urls');
const ENV = process.env.ENV;
//import termsAndCondition from '../../PageObject/TermsAndCondition';
let dashboard_page = "";
const loginData = require("../../tests/testData/logintestData");
const aamcIDData = require("../../tests/testData/aamcIDtestData");

// add feature specific step definitions 
Given(/^the Actor enters the EPM URL in the browser$/, async () => {
    await LoginPage.open();
    expect(await ActionUtils.waitForPageToLoad(), true, "expected URL to be changed'");
    await ActionUtils.waitForPageToLoad();
})

When(/^the application redirect to OneAAMC login page|the User Should be on the OneAAMC login page$/, async () => {
    await browser.refresh();
    expect(await ActionUtils.waitForExistence(elem.login_page_header, "Sign In"), true)
    expect(await ActionUtils.getText(elem.login_page_header)).to.equal("Sign In")
})

When(/^Actor fills in the username "([^\"]*)" and password "([^\"]*)" fields and submit$/, async (username, password) => {
    dashboard_page = await LoginPage.login(username, password);
    //this wait to be removed once new Program Management code is in place.Currently we are seeing errors moment we login and hence we are providing this wait.
    await ActionUtils.waitForSpecificTime(5000);
    await browser.pause(15000);
})

When(/^Actor fills in the user credentials "([^\"]*)" and submit$/, async (username) => {
    dashboard_page = await LoginPage.login(username, loginData[username]);
})

When(/^Actor logs in with the username "([^\"]*)" and password "([^\"]*)" fields for first time$/, async (username, password) => {
    dashboard_page = await LoginPage.firstTimeLogin(username, password)
})

When(/^Actor logs in with the usercredentials "([^\"]*)" for first time$/, async (username) => {
    dashboard_page = await LoginPage.firstTimeLogin(username, loginData[username])
})

Then(/^Verify "([^\"]*)" displayed in pop-up window$/, async (title) => {
    await browser.pause(3000);
    await termsAndCondition.validateTermsAndConditionPopUpTitle(title)
})

Then(/^Verify TermsAndCondition pop-up window is not displayed$/, async () => {
    expect(await ActionUtils.isExistingNoDisplay(elem.popup_modal_title)).to.equal(false)
})

When(/^the login should fail with error message "(.*)"$/, async (error_message) => {
    expect(await ActionUtils.getText(elem.login_error_message)).to.equal(error_message)
})

Then(/^the Actor is on Dashboard page$/, async () => {
    await browser.pause(1000);
    await ActionUtils.waitForDisplayed(dashboard_page.elements.Dashboard);
    let header = await ActionUtils.getText(dashboard_page.elements.Dashboard);
    expect(header).to.equal("Welcome to ERAS for Programs")
})

Then(/^Actor clicks on profile icon$/, async () => {
    await ActionUtils.click(elem.common_profile_icon);
})

Then(/^verify that dropdown is displayed with two options$/, async (DataTable) => {
    let list = DataTable.hashes();
    let data = await ActionUtils.getElements(elem.common_account_dropdown_links);
    if (list.length == data.length) {
        for (let i = 0; i < data.length; i++) {
            expect(await ActionUtils.getText(data[i])).to.equal(list[i].options)
        }
    }
})

Then(/^Actor clicks on "(.*)" option$/, async (option) => {
    await ActionUtils.click(elem.common_account_dropdown_link(option));
})

Then(/^the actor clicks on browser back option$/, async () => {
    await ActionUtils.browserBack();
})

Then(/^verify system should open the "(.*)" page in a new separate tab within the same browser$/, async (title) => {
    await ActionUtils.switchToChildWindow();
    await browser.pause(2000);
    expect(await browser.getTitle()).to.equal(title);
})

Then(/^verify that the EPM tab from where user clicked on My Account is still open$/, async () => {
    await ActionUtils.switchToParentWindow();
})

Then(/^actor click on "Return to Application" option from left navigation panel$/, async () => {
    await ActionUtils.click(elem.common_myaccount_returntoapp);
})

Then(/^verify the EPM Header contains following$/, async (DataTable) => {
    let list = DataTable.hashes();
    await ActionUtils.isDisplayed(elem.Global_AAMC_logo)
    expect(list[1].globalelements).to.equal(await ActionUtils.getText(elem.Global_Application_name))
})

Then(/^system should display the following navigational links on global navigation panel$/, async (DataTable) => {
    await browser.pause(10000);
    let list = DataTable.hashes();
    for (let i = 0; i < list.length; i++) {
        expect(await ActionUtils.getText(elem.Global_navigation_menu(list[i].globalNavMenu))).to.equal(list[i].globalNavMenu)
    }
})

Then(/^verify system should display following option icons on global navigation panel$/, async (DataTable) => {
    let list = DataTable.hashes();
    for (let i = 0; i < list.length; i++) {
        await ActionUtils.isDisplayed(elem.Global_icons(list[i].icons))
    }
})

Then(/^system should not display the following navigational links on global navigation panel$/, async (DataTable) => {
    let list = DataTable.hashes();
    for (let i = 0; i < list.length; i++) {
        expect(await ActionUtils.waitForNonExistence(elem.Global_navigation_menu(list[i].globalNavMenu))).to.equal(true);
    }
})

Then(/^verify system should not display following option icons on global navigation panel$/, async (DataTable) => {
    let list = DataTable.hashes();
    for (let i = 0; i < list.length; i++) {
        expect(await ActionUtils.waitForNonExistence(elem.Global_icons(list[i].icons))).to.equal(true);
    }
})

Then(/^verify the sections FtestAAMCID, StageAAMCID "(.*)" and "(.*)" displayed in global panel for "(.*)"$/, async (name, acronym, usercredentials) => {
    await ActionUtils.waitForSpecificTime(5000);
    let commonHeaderUserDetails = await ActionUtils.getElements(elem.common_header_user_details);
    expect(await ActionUtils.getText(commonHeaderUserDetails[0])).to.equal(name)
    ENV == "ftest" ? expect(await ActionUtils.getText(commonHeaderUserDetails[1])).to.equal(aamcIDData[usercredentials].FtestAAMCID) : expect(await ActionUtils.getText(commonHeaderUserDetails[1])).to.equal(aamcIDData[usercredentials].StageAAMCID);
    expect(await ActionUtils.getText(elem.common_miniaccount_circletext)).to.equal(acronym)
})

When(/^the Actor clicks on the "(.*)" icon in static enterprise header and the URL "(.*)" opened in new tab of same browser window$/, async (icon, URL) => {
    await ActionUtils.click(elem.Global_icons(icon))
    await ActionUtils.switchToChildWindow();
    expect(await ActionUtils.getUrl()).to.equal(URL);
    await ActionUtils.closeChildWindow();
    await ActionUtils.switchToParentWindow();
})

Then(/^actor hovers on "(.*)" icon$/, async (icon) => {
    await browser.pause(2000);
    await ActionUtils.hover(elem.Global_icons(icon));
})

Then(/^verify the placeholder text present in the search bar as "(.*)"$/, async (placeholderText) => {
    expect((await ActionUtils.getAttribute(elem.Globalsearch_icon, "placeholder"))).to.equal(placeholderText)
})

When(/^actor click on Global search field$/, async () => {
    expect(await ActionUtils.waitForPageToLoad(), true, `Unable to load the page`);
    await ActionUtils.click(elem.Globalsearch_icon);
})

When(/^user provides any input "(.*)" in search field$/, async (value) => {
   await ActionUtils.setValue(elem.Globalsearch_icon, value)
});

Then(/^verify the search field displays input "(.*)" as entered by the user$/, async (value) => {
    await browser.pause(2000);
    expect(await ActionUtils.getInputValue(elem.Globalsearch_icon)).to.equal(value)
});

Then(/^verify the user details are not displayed in global panel$/, async () => {
    expect(await ActionUtils.isExistingNoDisplay(elem.common_header_user_details)).to.equal(false)
    expect(await ActionUtils.isExistingNoDisplay(elem.common_miniaccount_circletext)).to.equal(false)
});

Then(/^verify the following navigational links are greyed out on global navigation panel$/, async (DataTable) => {
    let list = DataTable.hashes();
    for (let i = 0; i < list.length; i++) {
        expect(await ActionUtils.waitForNotClickable(elem.Global_navigation_menu(list[i].globalNavMenu))).to.equal(true);
    }
});

//  async staffOpen() {
//         await super.open('' + "https://AAMCUser:BasicAuth1!@amcas.ftest.aamc.org/amcas-staff/#/verification");
 
//     };