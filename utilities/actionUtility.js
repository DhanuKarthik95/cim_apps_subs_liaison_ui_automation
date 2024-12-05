"use strict";
var parentwindow;
const max_timeout = 90000;
import { expect } from 'chai';
module.exports = {
    click: async (element) => {
        await $(element).waitForClickable({ timeout: max_timeout, timeoutMsg: `Element ${element} is not clickable in 60sec.` });
        await $(element).click();
    },

    clickAway: async (element) => {
        await $(element).waitForClickable({ timeout: max_timeout, timeoutMsg: `Element ${element} is not clickable in 60sec.` });
        await $(element).click({ x: 30 })
    },

    clickAndWait: async (element) => {
        await $(element).waitForDisplayed({ timeout: max_timeout, timeoutMsg: `Element ${element} not found for a click.` });
        await $(element).waitForClickable({ timeout: max_timeout, timeoutMsg: `Element ${element} is not clickable in 60sec.` })
        await $(element).click();
        await browser.pause(7000);
    },

    clickLinkText: async (text) => {
        await $(`=${text}`).waitForDisplayed({ timeout: max_timeout, timeoutMsg: `${text} not found.` });
        const link = await $(`=${text}`);
        await link.click()
        await browser.pause(1000);
    },

    selectByValue: async (element, value) => {
        await $(element).waitForDisplayed({ timeout: max_timeout, timeoutMsg: `Element ${element} not found for selecting a value.` });
        await $(element).selectByAttribute('value', value);
    },

    selectByIndex: async (element, index) => {
        await $(element).waitForDisplayed({ timeout: max_timeout, timeoutMsg: `Element ${element} not found for selecting a value.` });
        await $(element).selectByIndex(index);
    },

    selectByText: async (element, text) => {
        await $(element).waitForDisplayed({ timeout: max_timeout, timeoutMsg: `Element ${element} not found for selecting a value.` });
        await $(element).selectByVisibleText(text);
        await browser.pause(3000);
    },

    getText: async (element) => {
        // $(element).waitForDisplayed({ timeout: max_timeout, timeoutMsg: `Element ${element} not found for get text.` });
        return await $(element).getText();
    },

    getTextWaitingForDisplay: async (element) => {
        await browser.waitUntil(async () => await $(element).isDisplayed() == true, {
            timeout: max_timeout,
            timeoutMsg: "expected element doesn't exist"
        })
        return await $(element).getText();
    },

    getHtmlFromSource: async (element) => {
        await $(element).waitForClickable({ timeout: max_timeout, timeoutMsg: `Element ${element} not found for get text.` });
        var innerHTML = await $(element).getHTML(false);
        return await innerHTML;
    },

    getHtmlOverlay: async (element) => {
        var innerHTML = await $(element).getHTML(false);
        return await innerHTML.trim();
    },


    getSignInText: async (element) => {
        await $(element).waitForDisplayed({ timeout: max_timeout, timeoutMsg: `Element ${element} not found for get text.` });
        await browser.pause(5000);
        return await $(element).getText();
    },

    isDisplayed: async (element) => {
        await $(element).waitForDisplayed({ timeout: max_timeout, timeoutMsg: `Element ${element} not found for get text.` });
        return await $(element).isDisplayed();
    },
    clearInput: async (element) => {
        //await $(element).waitForDisplayed({ timeout: max_timeout, timeoutMsg: `Element ${element} not found for clear text.` });
        await $(element).clearValue();
    },

    isExisting: async (element) => {
        //await $(element).waitForDisplayed({ timeout: max_timeout, timeoutMsg: `Element ${element} not found for getting value.` });
        return await $(element).isExisting();
    },

    //Does not have to wait for the element to check whether its existing or not as checked in the previous isExisting method
    isExistingNoDisplay: async (element) => {
        return await $(element).isExisting();
    },

    isClickable: async (element) => {
        return await $(element).isClickable();
    },

    getAttribute: async (element, value) => {
        await $(element).waitForDisplayed({ timeout: max_timeout, timeoutMsg: `Element ${element} not found for getting value.` });
        return await $(element).getAttribute(value);
    },

    getCSSProperty: async (element) => {
        await $(element).waitForDisplayed({ timeout: max_timeout, timeoutMsg: `Element ${element} not found for getting a property.` });
        return await $(element).getCSSProperty('font-family').value;
    },

    setValue: async (element, input) => {
        await $(element).waitForDisplayed({ timeout: max_timeout, timeoutMsg: `Element ${element} not found for entering a value.` });
        await $(element).setValue(input);
    },

    addValue: async (element, input) => {
        await $(element).waitForDisplayed({ timeout: max_timeout, timeoutMsg: `Element ${element} not found for entering a value.` });
        await $(element).doubleClick();
        await $(element).addValue(input);
    },

    inputValue: async (element, input) => {
        await $(element).waitForDisplayed({ timeout: max_timeout, timeoutMsg: `Element ${element} not found for tabbing.` });
        await $(element).doubleClick();
        $(element).value = input;
    },

    pressKey: async (key) => {
        await browser.keys(key)
        await browser.pause(1000);
    },

    selectText: async () => {
        await browser.keys(['Control', 'a']);
        await browser.pause(1000);
    },

    clearElement: async (selector) => {
        await browser.clearElement(selector);
    },
    
    pasteText: async() => {
        await browser.keys(['Control', 'v']);
        await browser.pause(1000);
    },

    copyText: async() => {
        await browser.keys(['Control', 'c']);
        await browser.pause(1000);
    },

    waitUntil: async (condition, error) => {
        return await browser.waitUntil(async () => condition(),
            { timeout: max_timeout, timeoutMsg: error });
    },

    waitForDisplayed: async (element) => {
        return await $(element).waitForDisplayed({ timeout: max_timeout, timeoutMsg: `Element ${element} not displayed within 60 sec.` });
    },

    waitForClickable: async (element) => {
        return await $(element).waitForClickable({ timeout: max_timeout, timeoutMsg: `Element ${element} is not clickable within 60 sec.` });
    },

    waitForNotClickable: async (element) => {
        return await $(element).waitForClickable({ timeout: max_timeout, reverse: true, timeoutMsg: `Element not active within 60 sec.` });
    },

    openNewWindow: async (url) => {
        await browser.newWindow(url);
        await browser.pause(20000);
        return await browser.getWindowHandles();
    },

    switchToWindow: async (guid) => {
        await browser.switchToWindow(guid);
    },

    waitForNonExistence: async (element) => {
        return await browser.waitUntil(async () => await $(element).isDisplayed() == false, {
            timeout: max_timeout,
            timeoutMsg: "expected element to disappear with in 60 sec",
        });
    },

    waitForExistence: async (element) => {
        return await browser.waitUntil(async () => await $(element).isDisplayed() == true, {
            timeout: max_timeout,
            timeoutMsg: "expected element doesn't exist",
        });
    },
    isDisplayedInViewport: async (element) => {
        await $(element).waitForDisplayed({ timeout: max_timeout, timeoutMsg: `Element ${element} not found for a click.` });
        return await $(element).isDisplayedInViewport();
    },

    switchToFrameByIndex: async function (position) {
        await browser.switchToFrame(position);
    },

    switchToFrame: async (element) => {
        await browser.switchToFrame($(element));
    },

    switchToParentFrame: async () => {
        await browser.switchToParentFrame();
    },

    getWindowHandles: async () => {
        await browser.pause(7000);
        return await browser.getWindowHandles();
    },

    getUrl: async () => {
        return await browser.getUrl();
    },

    setWindowSize: async function (width, height) {
        await browser.setWindowSize(width, height);
        await browser.pause(3000);
    },

    closeWindow: async () => {
        await browser.closeWindow();
    },

    moveToNoDisplay: async (element) => {
        await $(element).moveTo();
    },

    scrollIntoView: async (element) => {
        await $(element).waitForDisplayed({ timeout: max_timeout, timeoutMsg: `Element ${element} not found for scrolling.` });
        await $(element).scrollIntoView();
    },

    moveTo: async (element) => {
        await $(element).waitForDisplayed({ timeout: max_timeout, timeoutMsg: `Element ${element} not found for scrolling.` });
        await $(element).moveTo();
    },

    hover: async (element) => {
        await $(element).waitForDisplayed({
            timeout: max_timeout,
            timeoutMsg: `Element ${element} not found while moving focus.`,
        });
        await $(element).moveTo();
        await browser.pause(2000)
    },

    getElements: async (text) => {
        await browser.pause(1000)
        return await $$(text);
    },

    getElement: async (text) => {
        return await $(text);
    },

    isSelected: async (element) => {
        return await $(element).isSelected();
    },

    isEnabled: async (element) => {
        return await $(element).isEnabled();
    },

    waitForSelected: async (element) => {
        return await browser.waitUntil(async () => await $(element).isSelected() == true, {
            timeout: max_timeout,
            timeoutMsg: `expected element ${element} is not selected in 60 sec`,
        });
    },

    doubleClick: async (element) => {
        await $(element).waitForDisplayed({
            timeout: 6000,
            timeoutMsg: `Element ${element} not found while moving focus.`,
        });
        await $(element).moveTo();
        await $(element).doubleClick();
    },

    moveToClick: async (element) => {
        await $(element).waitForDisplayed({
            timeout: 6000,
            timeoutMsg: `Element ${element} not found while moving focus.`,
        });
        await $(element).moveTo();
        await $(element).click();
        await browser.pause(5000);
    },

    getInputValue: async (element) => {
        await browser.waitUntil(async () => await $(element).getValue() != "",
            { timeout: max_timeout, timeoutMsg: "Value not rendered" })
        return await $(element).getValue();
    },

    inputValueNotDisplayed: async (element) => {
        await browser.waitUntil(async () => await $(element).getValue() == "",
            { timeout: max_timeout, timeoutMsg: "Value not empty" })
        return await $(element).getValue();
    },

    getInputValueNoWait: async (element) => {
        return await $(element).getValue();
    },

    checkPageScreenshot: async (imagename) => {
        await browser.pause(5000);
        return await browser.checkScreen(imagename);
    },

    clearBrowserStorage: async () => {
        await browser.execute("if (window.Storage){window.localStorage.clear(); window.sessionStorage.clear()}");
    },

    setBrowserZoom: async () => {
        await browser.execute("document.body.style.zoom = '0.4'");
    },

    uploadFile: async (localFilePath) => {
        return await browser.uploadFile(localFilePath);
    },

    waitForTextToDisplay: async (element, text) => {
        await browser.waitUntil(async () => await $(element).getText() === text, { timeout: 8000, timeoutMsg: 'expected text to be different after 5s' });
    },

    switchToChildWindow: async () => {
        parentwindow = await browser.getWindowHandle();
        await browser.pause(7000);
        let otherwindows = await browser.getWindowHandles();
        for (var i = 0; i < otherwindows.length; i++) {
                if (otherwindows[i] != parentwindow) {
                   await browser.switchToWindow(otherwindows[i]);
                }
                else {
                    console.log("Not a child window");
                }
        }
    },

    switchToParentWindow: async () => {
        await browser.switchToWindow(parentwindow);
    },

    getWindowHandle: async () => {
        await browser.pause(7000);
        return await browser.getWindowHandle();
    },
    closeChildWindow: async () => {
        await browser.closeWindow();
    },


    waitForPageToLoad: async () => {
        await browser.waitUntil(async function () {
            const state = await browser.execute(async function () {
                return document.readyState;
            });
            return state === 'complete';
        },
            {
                timeout: max_timeout, //60secs
                timeoutMsg: 'Oops! Check your internet connection'
            });
    },

    waitForPageToLoadAndPause: async () => {
        await browser.waitUntil(async function () {
            const state = await browser.execute(async function () {
                return document.readyState;
            });
            return state === 'complete';
        },
            {
                timeout: max_timeout, //60secs
                timeoutMsg: 'Oops! Check your internet connection'
            });
        await browser.pause(1000);
    },

    waitForConditionToExecute: async () => {
        await browser.pause(15000);
    },

    waitForSpecificTime: async (time) => {
        await browser.pause(time)
    },

    getRandomNoRange: async (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    },

    getNextPositiveOrNegative: async (number, lessOrMore) => {
        let changednumber;
        (lessOrMore == 'more') ? changednumber = ++number : changednumber = --number;
        return changednumber
    },

    browserBack: async () => {
        await browser.back();
    },

    getAttributeofNotDisplayed: async (element, value) => {
        return await $(element).getAttribute(value);
    },

    async checkForNotification(notificationDuration, overLayElement, toastElement, message) {
        var containerIdentifier = false;
        var text = "";
        var now = new Date().getTime();
        while (new Date().getTime() < now + notificationDuration) {
            if (await this.isExistingNoDisplay(overLayElement)) {
                text = await this.getHtmlOverlay(toastElement);
                containerIdentifier = true;
                break
            }
            await this.waitForSpecificTime(200)
        }
        if (containerIdentifier) {
            expect(text).to.equal(message)
        }
        else {
            expect.fail("The Notification is not found")
        }
    },

    navigateTo: async (url) => {
        await browser.navigateTo(url);
    },

}