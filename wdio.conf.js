const defaultTimeoutInterval = process.env.DEBUG ? 60 * 60 * 500 : 1500000;
const { removeSync } = require("fs-extra");
const cucumberJson = require("wdio-cucumberjs-json-reporter").default;
const startTime = new Date().toLocaleString();
const { join } = require("path");

 var path = require('path');
// global.downloadDir = path.join(__dirname, 'downloads');
// global.downloadpath = downloadDir.replace(/\\/g, "\\\\");


const defaultBrowserSauceOptions = {
  seleniumVersion: '4.0.0',
};

const downloadPath = path.join(__dirname, 'downloads');

const url = require('./urls')
const ENV = process.env.ENV
console.log("Scripts are running on "+ENV+" Environment");

if(!ENV || !['ftest', 'stage', 'prod', 'pdwsftest', 'pdwsstage', 'pdwsrwftest', 'pdwsrwstage', 'pdwsrwprod', 'cimftest', 'cimstage','cimprod'].includes(ENV)) {
  console.log("ENV value should be : | ftest | stage | prod |pdwsftest | pdwsstage | pdwsrwftest | pdwsrwstage | pdwsrwprod | cimftest | cimstage |");
  process.exit();
}

exports.config = {

  baseUrl: url[process.env.ENV],

  user: process.env.USER,
  key: process.env.KEY,
    
  
  // Define which test specs should run.
  specs: [
   // './tests/**/*.feature',
        './tests/**/subLandingPage.feature',

],

  // Define your capabilities here.
  maxInstances: 1,

   capabilities: [
     {
       maxInstances: 5,
       browserName: "chrome",
       "platformName": "Windows 10",
       'sauce:options': {
       'name': 'EPM - Visual Regression',
       'build': 'build-1234',
        defaultBrowserSauceOptions,
        "screenResolution": "1440x900",
        "maxDuration" : 10800,
        
     }
      }
  //  {
  //     maxInstances: 5,
  //     browserName: "safari",
  //     "platformName": "macOS 10.13",
  //     'sauce:options': {
  //       'name': 'EPM - Visual Regression',
  //       'build': 'build-1234',
  //        defaultBrowserSauceOptions,
  //       "screenResolution": "1400x1050",
  //       "maxDuration" : 10800,
  //     }
  //   }
  //  
  // {
    
  //     maxInstances: 2,
  //     browserName: "firefox",
  //     acceptInsecureCerts: true,
  //     'sauce:options': {
  //          'name': 'EPM - Visual Regression',
  //           'build': 'build-1234',
  //            defaultBrowserSauceOptions,
  //            "screenResolution": "1440x900",
  //            "maxDuration" : 10800,
  //         },
  //     "moz:firefoxOptions": {
  //       prefs: {
  //         directory_upgrade: true,
  //         "download.default_directory": downloadDir
  //       }
      
  //   }
  // }
   /*{
    maxInstances: 3,
    browserName: "MicrosoftEdge",
    "ms:edgeOptions": {
      prefs: {
        directory_upgrade: true,
        args: ['--start-maximized'],
        //"download.default_directory": downloadDir
      }
    }
  } */

  //],

   ],
  // sync: false,

  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "error",
  coloredLogs: true,
  screenshotPath: "./report/errorShots/", // Saves a screenshot to a given path if a command fails.

  // bail (default is 0 - don't bail, run all tests).
  bail: 0,

  // Default timeout for all waitFor* commands.
  // waitforTimeout: 150000,
  connectionRetryTimeout: 50000,
  connectionRetryCount: 3,
  
  reporters: ["spec", ["cucumberjs-json", { jsonFolder: "./report/", language: 'en', }]],

  // services: ["selenium-standalone"],
  services: [
    ['image-comparison',
      {
        // Some options, see the docs for more
        baselineFolder: join(process.cwd(), './tests/sauceLabsBaseline/'),
        formatImageName: '{tag}-{logName}-{width}x{height}',
        screenshotPath: join(process.cwd(), '.tmp/'),
        savePerInstance: true,
        autoSaveBaseline: true,
        blockOutStatusBar: true,
        blockOutToolBar: true,
        // ... more options
      }]
  ],
  // Framework you want to run your specs with.
  framework: "cucumber",

  cucumberOpts: {
    requireModule: ['@babel/register'],
    require: ["./tests/steps/*.steps.js"],
    backtrace: true,
    compiler: [],
    dryRun: false,
    failFast: true,
    format: ["pretty"],
    colors: true,
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tagsInTitle: false,
    tagExpression: ["@AccessibilityTest","@Smoke"],
    timeout: defaultTimeoutInterval,
    ignoreUndefinedDefinitions: true,
    failAmbiguousDefinitions: true,
  },

  // Hooks
  onPrepare: function (config, capabilities) {
    removeSync("./report");
    removeSync("./screenshots/actual");
    removeSync("./screenshots/diff");
    removeSync("./log");
  },

  beforeSession: function (config, capabilities, specs) {
    require("@babel/register");
  },

  before: function (capabilities, specs) {
    const chai = require("chai");
    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();

    global.reporter = require("wdio-cucumberjs-json-reporter").cucumberJson;
  },

  async afterStep(uri, feature, result) {
    if (!result.passed)
      cucumberJson.attach(await browser.takeScreenshot(), "image/png");
  },

  beforeSuite: function (suite) {
    console.log("suite is",suite)
  },

  after: function (result, capabilities, specs) {
    console.log("specs is", specs)
  },

  // afterFeature: function (uri, feature, scenarios) {
  //   if (browser.isChrome) {
  //     var action = require('./utilities/delete-test-data');
  //     action.default.deleteByFeatureTag(feature.document.feature.tags[1].name);
  //   }
  // },

  onComplete(exitCode, config, capabilities, results) {
    const endTime = new Date().toLocaleString();
    const report = require("multiple-cucumber-html-reporter");
    const fs = require("fs");
    report.generate({
      jsonDir: "./report/",
      reportPath: "./report/",
      openReportInBrowser: false,
      pageTitle: "Visual & Functional Tests",
      pageFooter:
        "<div><p> &nbsp &nbsp &nbsp A report for visual & functional tests</p></div>",
      displayDuration: true,
      //durationInMS: true,
      reportName: "Visual & Functional UI Tests",
      metadata: {
        browser: {
          name: 'chrome',
          version: 'latest'
        },
        device: 'Local test machine',
        platform: {
          name: 'Windows',
          version: 'Windows 10 Enterprise'
        }
      },
      customData: {
        title: 'Test Execution',
        data: [
          { label: 'Project', value: 'Project' },
          { label: 'Release', value: 'X.X.X' },
          { label: 'Cycle', value: 'X.X' },
          { label: 'Browser Resolution', value: '1440x900' },
          { label: 'Execution Start Time', value: startTime },
          { label: 'Execution End Time', value: endTime }
        ]
      }
    });
  },
};