/*import { expect } from 'chai';
import { Given, When, Then } from '@cucumber/cucumber';
const AxeBuilder = require('@axe-core/webdriverio').default;
var axeViolations;

async function getViolationResults() {
  const builder = new AxeBuilder({ client: browser });
  const results = await builder.analyze();
  return results;
}

async function getSelectedViolationResults(module) {
  const res = await getViolationResults();
  let selectedViolations = [];
  axeViolations = JSON.parse(JSON.stringify(res.violations));
  if (!Object.keys(axeViolations) == 0) {
    axeViolations.filter(violation => {
      delete violation.helpUrl;
      if (violation.impact == "critical" || violation.impact == "serious") {
        selectedViolations.push("Module:-" + module + ":" + JSON.stringify(violation));
      }
    })
  }
  return selectedViolations;
}

Then(/^verify the violations present in the module "(.*)"$/, async (module) => {
  let violations = await getSelectedViolationResults(module);
  expect(violations.length).to.be.equal(0, "The violations present are \n " + violations.map(violation => "\n" + violation))
})

Then(/^verify the violations present in the page$/, async () => {
  let violations = await getSelectedViolationResults(module);
  expect(violations.length).to.be.equal(0, "The violations present are \n " + violations.map(violation => "\n" + violation))
})*/

import { expect } from 'chai';
import { Given, When, Then } from '@cucumber/cucumber';
const AxeBuilder = require('@axe-core/webdriverio').default;
const cucumberReporterjs = require("wdio-cucumberjs-json-reporter").default;
// Then(/^verify accessbility of the page$/, async () => {
//   const builder = new AxeBuilder({ client: browser });

//   const EXCLUDED_VIOLATION_IDS = ['aria-hidden-focus'];

//   const results = await builder.analyze()
//   let violationFound;
//   const formattedReport = formatResults(results);
//   if (formattedReport.length > 0) {
//     formattedReport.forEach((violation) => {
//       if (violation.impact == "critical" || violation.impact == "serious") {
//         !EXCLUDED_VIOLATION_IDS.includes(violation.id)
//         violationFound = true;
//         cucumberReporterjs.attach(`Violation ID: ${violation.id}`, 'text/plain');
//         violation.nodes.forEach((node) => {
//           cucumberReporterjs.attach(`Element ID: ${node.id}`, 'text/plain');
//           cucumberReporterjs.attach(`HTML: ${node.html}`, 'text/plain');
//         });
//         cucumberReporterjs.attach(`IMPACT: ${violation.impact}`, 'text/plain');
//         cucumberReporterjs.attach(`Description: ${violation.description}`, 'text/plain');

//         cucumberReporterjs.attach("---------------------------------------------------------------------------------------------------");
//       }
//     });
//     if (violationFound == true) {
//       assert.fail("Violations are present in the page");
//     }
//   }
// });
// function formatResults(results) {
//   return results.violations.map((violation) => {
//     return {
//       id: violation.id,
//       impact: violation.impact,
//       description: violation.description,
//       nodes: violation.nodes.map((node) => ({
//         id: node.target[0],
//         html: node.html,
//         target: node.target,
//         locatorId: node.target[1] && node.target[1].id
//       })),
//     };
//   });
// };

const EXCLUDED_VIOLATION_IDS = ['aria-hidden-focus','aria-dialog-name','heading-order'];
 
When(/^verify accessbility of the page$/, async () => {
  const builder = new AxeBuilder({ client: browser });
 
  const results = await builder.analyze()
  let violationFound;
  const formattedReport = formatResults(results);
  const logMessages = [];
  if (formattedReport.length > 0) {
    formattedReport.forEach((violation) => {
      if (
        (violation.impact === 'critical' || violation.impact === 'serious' || violation.impact === 'moderate' || violation.impact === 'minor') 
        &&
        !EXCLUDED_VIOLATION_IDS.includes(violation.id)
      ){
        violationFound = true;
        //console.log(`URL: ${results.url}`);
        logMessages.push(`URL: ${results.url}`);
        logMessages.push(`Violation ID: ${violation.id}`);
        //console.log(`Violation ID: ${violation.id}`);
        violation.nodes.forEach((node) => {
          //console.log(`Element ID: ${node.id}`);
          logMessages.push(`Element ID: ${node.id}`);
        });
        //console.log(`IMPACT: ${violation.impact}`);
        logMessages.push(`IMPACT: ${violation.impact}`);
        //console.log(`Description: ${violation.description}`);
        logMessages.push(`Description: ${violation.description}`);
        logMessages.push(`-------------------------------------------------------------------------------------------`);
      }
    });
    if (violationFound == true) {
      assert.fail("\nViolations are present in the page.\nLog Messages:\n" + logMessages.join('\n'));
    }
  }
});
 
function formatResults(results) {
  return results.violations.map((violation) => {
    return {
      id: violation.id,
      impact: violation.impact,
      description: violation.description,
      nodes: violation.nodes.map((node) => ({
        id: node.target[0],
        html: node.html,
        target: node.target,
        locatorId: node.target[1] && node.target[1].id
      })),
    };
  });
};
 

