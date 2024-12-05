 'use-restrict'
const action = require('./actionUtility');

module.exports = {
    saveScreenshot: async(pagename, selector, options)=>{
        await action.waitForDisplayed(selector)
        await browser.saveScreen(pagename, options)
    },

    saveElementScreenshot: async(selector, element_name, options)=>{
        await browser.saveElement($(selector), element_name, options);
    },

    saveFullPageScreenshot: async(pagename, selector, options) =>{
        await action.waitForDisplayed(selector);
        await browser.saveFullPageScreen(pagename, options);
    },

    //--------- verifying the screenshot----------------
    checkScreenshot: async(pagename, selector, options) => {
        await action.waitForDisplayed(selector);
        return await browser.checkScreen(pagename, options)
    },

    checkElementScreenshot: async(selector,element_name, options) => {
        await action.waitForDisplayed(selector);
        return await browser.checkElement($(selector), element_name, options);
    },

    checkFullPageScreenshot: async(pagename, selector, options) => {
        await action.waitForDisplayed(selector)
        return await browser.checkFullPageScreen(pagename, options);
    }
}