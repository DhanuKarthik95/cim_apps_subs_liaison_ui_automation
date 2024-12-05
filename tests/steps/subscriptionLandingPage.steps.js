import { expect } from 'chai';
import { Given, When, Then, Before } from '@cucumber/cucumber';
import LoginPage from '../../PageObject/LoginPage';
import ActionUtils from '../../utilities/actionUtility';
const elem = require("../../PageObject/elementsPage").default;
const loginData = require("../../tests/testData/logintestData.js");

const cimurl = require('../../urls');
const ENV = process.env.ENV;
let users = [];


Given(/^the User enters the Subscription URL in the browser$/, async () => {
        
    ENV === 'cimftest' ? await LoginPage.openCIMSubscription() : ENV === 'cimstage' ? await LoginPage.openCIMSubscriptionStage() : ENV === 'cimprod' ? await LoginPage.openCIMSubscriptionProd() : await LoginPage.openCIMSubscription();
    expect(await ActionUtils.waitForPageToLoad(), true, "expected URL to be changed'");
     await ActionUtils.waitForPageToLoad(); 
     
    
});

  

When(/^User fills in the user credentials "([^"]*)" and submit$/, async (user) => {
    let username= loginData[user]
    let password= loginData[user+"_PWD"]
    //let username= testData[user]
    //let password= testData[user+"_PWD"]
    
    await LoginPage.login(username, password)
    expect(await ActionUtils.waitForPageToLoad(), true, "expected URL to be changed'");
    await ActionUtils.waitForPageToLoad();
    //ENV == 'cimftest' ? await ActionUtils.navigateTo(cimurl.cimftest_launch) : ''
    
})

Then(/^User should redirect to the Subscription landing  page$/, async () => {
   	
    if(ENV == 'cimprod'){
        expect(await ActionUtils.isDisplayed(elem.notNow_button)).to.equal(true);
        await ActionUtils.click(elem.notNow_button);
        browser.pause('5000');
        expect(await browser.getUrl()).to.equal('https://mec.aamc.org/cim-apps/#/subscription')
        
    }
    else{
    browser.pause('10000');
    ENV == 'cimftest' ? expect(await browser.getUrl()).to.equal('https://mec.ftest.aamc.org/cim-apps/#/subscription') : expect(await browser.getUrl()).to.equal('https://mec.stage.aamc.org/cim-apps/#/subscription')
    //browser.pause('10000');
    }
	});

    Then(/^User should see the AAMC logo and CiM homepage link in second header section$/, async () =>{
        expect(await ActionUtils.isDisplayed(elem.sub_logoLink)).to.equal(true)
        expect(await ActionUtils.isDisplayed(elem.sub_homepageLink)).to.equal(true)
    });

    When(/^User click on the AAMC logo in second header$/, async () =>{
        await ActionUtils.click(elem.sub_logoLink)
    });
    Then(/^User should redirect to the CMS home page$/, async () =>{
     
         expect(await ActionUtils.isDisplayed(elem.cim_homePageText)).to.equal(true)
        
    });
    When(/^User click on the browser back button$/, async () =>{
        browser.back();
    });
     
    When(/^User click on the CiM home page link$/, async () =>{
        await ActionUtils.click(elem.sub_homepageLink)
    });

    Then(/^User should redirect to the CMS home page in external tab$/, async () =>{
     
        await ActionUtils.switchToChildWindow();
        expect(await ActionUtils.isDisplayed(elem.cim_homePageText)).to.equal(true)
         await ActionUtils.closeChildWindow();
         await ActionUtils.switchToParentWindow();
        
   });

   Then(/^User should see the page title$/, async () =>{
     
        expect(await ActionUtils.isDisplayed(elem.sub_title)).to.equal(true)
        let getPageTitle = await ActionUtils.getText(elem.sub_title);              
        expect(getPageTitle.trim()).to.equal("How to access Careers in Medicine® (CiM)");

   
});
   Then(/^User should see the description and note$/, async () =>{
     
    expect(await ActionUtils.isDisplayed(elem.sub_desc)).to.equal(true)
    let getDescText = await ActionUtils.getText(elem.sub_desc);              
    expect(getDescText.trim()).to.equal("Some users receive access to the Careers in Medicine (CiM) program while others must purchase a subscription. See below to find out how you can access the CiM website and its resources.");

    expect(await ActionUtils.isDisplayed(elem.sub_note)).to.equal(true)
    let getNoteText = await ActionUtils.getText(elem.sub_note);              
    expect(getNoteText.trim()).to.equal("Note: For incoming students starting medical school, CiM access is granted on a rolling basis July through October.");


   
 });
Then(/^User should see the U.S MD, U.S DO  students, U.S MD, U.S DO Advisors and OTHER student&Advisors block$/, async () =>{
     
    expect(await ActionUtils.isDisplayed(elem.sub_blocks)).to.equal(true)
        const blocks = await browser.$$(elem.sub_blocks);
        const countBlocks = blocks.length;
        expect(countBlocks).to.equal(4)
});

Then(/^User should see the U.S MD STUDENTS as header in the first block$/, async () =>{
     
    expect(await ActionUtils.isDisplayed(elem.sub_usmdTitle)).to.equal(true)
   
});

Then(/^User should see the subheading in the USMD tile$/, async () =>{
     
    expect(await ActionUtils.isDisplayed(elem.usmd_subtitle)).to.equal(true)
   
});


Then(/^User should see the text present on the U.S MD Students$/, async () =>{
     
    expect(await ActionUtils.isDisplayed(elem.usmd_tileDesc)).to.equal(true)
   
});

When(/^User click on the CiM home page link in USMD Tile$/, async () =>{
    await ActionUtils.click(elem.tile1_homePageLink)
     
      
});


When(/^User click on the CIM liaison link$/, async () =>{
    await ActionUtils.click(elem.tile1_liaisonLink)
     
      
});


Then(/^User should redirect to the CIM liaison page$/, async () =>{
     
       expect(await ActionUtils.isDisplayed(elem.liasion_homePage)).to.equal(true)
       let getLiasionPageTitle = await ActionUtils.getText(elem.liasion_homePage);              
        expect(getLiasionPageTitle.trim()).to.equal("Find your school's Careers in Medicine® (CiM) liaisons");

   
});

Then(/^User should see the U.S DO STUDENTS as header in the second block$/, async () =>{
     
    expect(await ActionUtils.isDisplayed(elem.sub_usdoTitle)).to.equal(true)
   
});

Then(/^User should see the subheading in the USDO tile$/, async () =>{
     
    expect(await ActionUtils.isDisplayed(elem.usdo_subtitle)).to.equal(true)
   
});

Then(/^User should see the text present on the U.S DO Students$/, async () =>{
     
    expect(await ActionUtils.isDisplayed(elem.usdo_tileDesc)).to.equal(true)
   
});

When(/^User click on the CIM liaison link in the USDO tile$/, async () =>{
    await ActionUtils.click(elem.tile2_liaisonLink)
     
      
});

Then(/^User should see the ADVISORS :U.S MD, U.S DO as header in the third block$/, async () =>{
     
    expect(await ActionUtils.isDisplayed(elem.sub_advisorTitle)).to.equal(true)
   
});

Then(/^User should see the text present on the ADVISORS: U.S MD, U.S. DO$/, async () =>{
     
    expect(await ActionUtils.isDisplayed(elem.advisor_tileDesc)).to.equal(true)
   
});

Then(/^User should see the subheading in the Advisors tile$/, async () =>{
     
    expect(await ActionUtils.isDisplayed(elem.advisors_subtitle)).to.equal(true)
   
});

When(/^User click on the CIM liaison link in the Advisors tile$/, async () =>{
    await ActionUtils.click(elem.tile3_liaisonLink)
     
      
});

Then(/^User should see the OTHER STUDENTS AND ADVISORS block with title$/, async () =>{
     
    expect(await ActionUtils.isDisplayed(elem.sub_otherTitle)).to.equal(true)
   
});

Then(/^User should see the subheading in the Other students and Advisors tile$/, async () =>{
     
    expect(await ActionUtils.isDisplayed(elem.other_subtitle)).to.equal(true)
   
});

Then(/^User should see the Who are you Text with dropdown$/, async () =>{


    await ActionUtils.scrollIntoView(elem.dropdown_label)
 
    expect(await ActionUtils.isDisplayed(elem.dropdown_label)).to.equal(true)
   
});


Then(/^User should see the Choose an option text in dropdown$/, async () =>{
    await ActionUtils.scrollIntoView(elem.dropdown_defaultText)

    expect(await ActionUtils.isDisplayed(elem.dropdown_defaultText)).to.equal(true)
   
});
    