"use strict";

import { source } from 'axe-core';

var xls_json = require('node-excel-to-json');
const path = require('path');
const fs = require('fs');

module.exports = {
    getAllValuesInArr: async(element) => {
        var arr = [];
        $$(element).map(ele => arr.push(ele.getText()));
        return arr;
    },

    isEquals: async(x, y) => {
        // If both x and y are null or undefined and exactly the same
        if (x === y) {
            return true;
        }
    },

    isArray: async(myArray) => {
        return myArray.constructor.toString().indexOf("Array") > -1;
    },

    getValueByKey: async(jsonObj, jsonKey) => {
        var keyValue = "";

        if (this.isArray(jsonObj)) {
            var json = jsonObj[0];
        } else { json = jsonObj; }

        if (json.hasOwnProperty(jsonKey.toUpperCase())) {
            return keyValue = json[jsonKey.toUpperCase()];
        } else if (json.hasOwnProperty(jsonKey.toLowerCase())) {
            return keyValue = json[jsonKey.toLowerCase()];
        } else if (json.hasOwnProperty(jsonKey)) {
            return keyValue = json[jsonKey];
        } else { return undefined; }
    },

    // key value to be searched against the json Key
    isContains: async(json, value) => {
        let contains = false;
        Object.keys(json).some(key => {
            contains = typeof json[key] === 'object' ? isContains(json[key], value) : json[key] === value;
            return contains;
        });
        return contains;
    },

    excel_getTableRows: async(fileName, sheetName, callback) => {
        xls_json(path.join(__dirname, `../${fileName}`), {
            'convert_all_sheet': false,
            'return_type': 'Object',
            'sheetName': sheetName
        }, function (err, result) {
            if (err) {
                console.error(err);
            } else if (result) {
                return callback(result);
            }
        });
    },

    excel_getAllSheetData: async(fileName, callback) => {
        xls_json(path.join(__dirname, `../${fileName}`), {
            'convert_all_sheet': true,
            'return_type': 'Object',
        }, function (err, result) {
            if (err) {
                console.error(err);
            } else if (result) {
                return callback(result);
            }
        });
    },

    //method to generate timestamp in the format: mm/dd/yy hh:mi:ss
    getTimeStamp: async() => {
        var now = new Date();
        return ((now.getMonth() + 1) + '/' +
            (now.getDate()) + '/' +
            now.getFullYear() + " " +
            now.getHours() + ':' +
            ((now.getMinutes() < 10)
                ? ("0" + now.getMinutes())
                : (now.getMinutes())) + ':' +
            ((now.getSeconds() < 10)
                ? ("0" + now.getSeconds())
                : (now.getSeconds())));
    },

    getDate: async() => {
        var now = new Date();
        return ((now.getMonth() + 1) + '/' +
            ((now.getDate())) + '/' +
            now.getFullYear()
        );
    },

    getYesterdayDate: async() => {
        var now = new Date();
        now.setDate(now.getDate() - 1);
        return ((now.getMonth() + 1) + '/' +
            ((now.getDate())) + '/' +
            now.getFullYear()
        );
    },

    getFutureDate: async(num) => {
        var now = new Date();
        now.setDate(now.getDate() + parseInt(num));
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        var fulldate = now.toLocaleDateString("en-US", options);
        return fulldate;

    },

    getTomorrowDate: async() => {
        var now = new Date();
        now.setDate(now.getDate() + 1);
        return ((now.getMonth() + 1) + '/' +
            ((now.getDate())) + '/' +
            now.getFullYear()
        );
    },

    elementWait: async(locater, timeout) => {
        try {
            await browser.waitForExist(locater, timeout);

        } catch (e) {
            expect(false).toBe(true);
            throw new Error('Timed out while waiting for control to load : ' + e);
        }
    },

    crossBrowserFullpageScreenshot: async(imagename) => {
        return await browser.checkFullPageScreen(imagename);
    },

    sameBrowserScreenshot: async(imagename) => {
        return await browser.checkFullPageScreen(imagename, { savePerInstance: true });
    },

    accessibilityChecks: async(page_name) => {
        browser.execute(source);
        const options = { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] } };
        const results = browser.executeAsync((options, done) => {
            axe.run(document, options, function (err, results) {
                if (err) throw err;
                done(results);
            });
        }, options);


        fs.writeFileSync("./accessibility-report/violations/" + page_name + ".json", JSON.stringify(results.violations, null, 2));
        fs.writeFileSync("./accessibility-report/passes/" + page_name + ".json", JSON.stringify(results.passes, null, 2));
        fs.writeFileSync("./accessibility-report/inapplicable/" + page_name + ".json", JSON.stringify(results.inapplicable, null, 2));
        fs.writeFileSync("./accessibility-report/incomplete/" + page_name + ".json", JSON.stringify(results.incomplete, null, 2));

        return results;
    },

    //method to generate timestamp in the format: mm/dd/yyyy hh:mi AM/PM
    getSystemDate: async() => {
        return new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', hour: 'numeric', minute: 'numeric' });
    },

    returnNumberfromText: (str) => {
        
        return  parseInt(str.match(/(\d+)/).join());
    },

    capitalizeFirstLetter: async(string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },

    sortAlphabetically: async(arr, order) => {
        return [...arr].sort((a, b) => {
            if (order == "ascending") {
                if (a.toLowerCase() < b.toLowerCase()) return -1;
                else if (a.toLowerCase() > b.toLowerCase()) return 1;
                else return 0;
            } else if (order == "descending") {
                if (a.toLowerCase() < b.toLowerCase()) return 1;
                else if (a.toLowerCase() > b.toLowerCase()) return -1;
                else return 0;
            }
        });
    },

    getCurrentdate: async() => {
        const now = new Date();
        var dt = now.getDate();
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        var fulldate = now.toLocaleDateString("en-US", options);
        return fulldate;
    },

    setTomorrowDate: async() => {
        var now = new Date();
        now.setDate(now.getDate() + 1);
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        var fulldate = now.toLocaleDateString("en-US", options);
        return fulldate;
    },

    setfutureDate: async() => {
        const now = new Date();
        var dt = now.setDate(32);
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        var fulldate = now.toLocaleDateString("en-US", options);
        return fulldate;
    },

    //for current month pass 0 as an index
    getMonth: async(index) => {
        var next = "";
        const monthNames = [" ","January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        const now = new Date();
        var current = new Date(now.getFullYear(), now.getMonth()+1, 1);
        index == "0" ? next = now.getMonth()+1 : next = current.getMonth()+index
        return monthNames[next];
    }

} // end of module