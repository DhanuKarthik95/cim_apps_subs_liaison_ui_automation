import Page from './BasePage'
//import DashboardPage from './DashboardPage'
import ActionUtils, { browserBack } from '../utilities/actionUtility'
//import TermsAndCondition from "./TermsAndCondition"

class LoginPage extends Page {

    get elements() {
        return {
            login_text_area: "input[name='IDToken1']",
            login_password_text_area: "input[name='IDToken2']",
            login_page_header: "oneaamc-login-container h1",
            login_submit_bttn: "#login-btn",
            login_error_message: "//*[contains(@class, 'error')]/div[not(div)]"
        }
    }

    constructor() {
        super("Login Page");
    }
   async openCIMSubscription(){
        await super.open("/account/#/login?gotoUrl=https://mec.ftest.aamc.org/cim-apps/#/subscription")
        

    }
    async openCIMRPEStage(){
        await super.open("/account/#/login?gotoUrl=https://cim.staging.aamc.org/cim-rpe/")
    }
    async openCIMRPEProd(){
        await super.open("/account/#/login?gotoUrl=https://cim.aamc.org/cim-rpe/")
    }
    //eam
   async login(user_name, password) {
       await browser.pause(2000);
       await ActionUtils.waitForPageToLoad();
       await ActionUtils.setValue(this.elements.login_text_area, user_name);
       await ActionUtils.setValue(this.elements.login_password_text_area, password);
       await ActionUtils.clickAndWait(this.elements.login_submit_bttn);
       //await TermsAndCondition.acceptTermsAndCondition("General Terms and Conditions (1 of 2)")
       //await TermsAndCondition.acceptTermsAndCondition("USMLE and COMLEX-USA Scores Terms and Conditions (2 of 2)")
        //return await new DashboardPage("dashboard page");
    }

    //eam
    async firstTimeLogin(user_name, password) {
        await browser.pause(2000);
        await ActionUtils.waitForPageToLoad();
        await ActionUtils.setValue(this.elements.login_text_area, user_name);
        await ActionUtils.setValue(this.elements.login_password_text_area, password);
        await ActionUtils.clickAndWait(this.elements.login_submit_bttn);
        //return new DashboardPage("dashboard page");
    }
}


const LoginPageObj = new LoginPage();
export default LoginPageObj;
exports.LoginPageElements = LoginPageObj.elements;