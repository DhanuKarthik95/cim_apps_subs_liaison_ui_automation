## ERAS UI Automation tests

* This is cucumber framework using feature files and step definitions for automating tests to leverage BDD. Webdriverio has This is a cucumber framework using feature files and step definations for automating tests UI functionalities of EPM application. 

* WebdriverIO : It is an open-source testing automation framework written in JavaScript and running on NodeJS. It is particularly useful for testing web applications and native mobile applications for iOS-enabled devices. Its support for both Behavior Driven Development (BDD) and Test Driven Development (TDD) makes it a highly preferred choice for automation testers.

### Setting Up WebdriverIO:
* Prerequisites for WebdriverIO

* To check if the NodeJS and npm are correctly installed, enter the following commands:

`` $ node -v ``

`` $ npm -v ``

* Clone the repo using SSH: [Instruction to setup SSH](https://support.atlassian.com/bitbucket-cloud/docs/set-up-an-ssh-key/)

`` $ git clone git@bitbucket.org:aamc-org/eras-ui-automation.git ``

Or

`` $ git clone https://vswarnkar@bitbucket.org/aamc-org/eras-ui-automation.git ``

* Installing all the dependencis

`` $ npm install ``


* To execute the entire test suite, use the command below

`$ npm test``

* If you want to run a specific feature file or specific set of scenarios add the respective tag in package.json -> scripts -> test as below

`` $ npx wdio wdio.conf.js --spec ./tests/<path-of-featurefile>``

### Reporters

We are generating a cucumber json report as the tests run. After the test run is finished, to get html report:
Report will get auto-open in browser. You can find the report at /report/index.html
           
* path to the report : ` ./report `

### Framework Overview
Tests are written in the Cucumber framework using the Gherkin Syntax. More about Gherkin & Cucumber can be found at https://cucumber.io/docs/reference
- Tests *.feature files are placed in the /tests/features/ directory.
- Step definations for features are placed in the /tests/steps directory.
- Common reusabe steps are added at /tests/steps/common.steps.js
- PageObject with all the element identifiers at /PageObject/<page name>
- Utilities are present at /utilities/<logger/apiUtility/visualregressionUtil>
- framework config at ./wdio.conf.js

### Visual Regression testing
wdio-image-comparison-service is a lightweight WebdriverIO service for browser and below are the files that helps to get visual regression of target pages. 
For more details: https://webdriver.io/docs/wdio-image-comparison-service/

* Path to the Base Images : `./tests/sauceLabsBaseline/desktop_chrome`
* Path to the feature file : `./tests/features/screenshot_comparision.feature`
* Path to the step definition file: `./tests/steps/visualregression.steps.js`

## Decoupled-EPM-Code-Future-Reference branch contains the Decoupled EPM Code having History and Past seasons scenarios for our future reference. 

Note: UI Automation Scripts are migrated to Github from Bitbucket.