const Page = require('./page');
const LoginPage = require('../pageobjects/login.page');
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));


class myAccount2FAPage extends Page {

    get acknowlegdeButton () { return $("//span[contains(text(),'I ACKNOWLEDGE')]/parent::button");}
    get prefixDropdown () { return $("//div[@id='mat-select-value-1']");}
    get selectPrefixvalue () { return $("//span[contains(text(),'Mr. ')]");}
    get generationalSufixDropdown () { return $("//div[@id='mat-select-value-3']");}
    get selectgenerationalSufix () { return $("//span[contains(text(),'Sr. ')]");}
    get postnominaSufix () { return $("//input[@id='postNominalSuffix']");}
    //get saveButton () { return $("//button[@id='account-form-submit-btn']");}
    get saveButton () { return $("//span[contains(text(),' Save ')]");}
    get resetButton () { return $("//button[@id='account-form-reset-btn']");}
    get moreResetButton () { return $("//button[@id='more-info-form-reset-btn']");}
    get moreInfo () { return $("//span[contains(text(),' More Info About Me ')]");}
    get genderPrefixdropdown () { return $("//mat-select[@id='legalSuffix']");}
    get selectGenderPrefix () { return $("//span[contains(text(),'III')]");}
    get citizenshipCountryDropdown () { return $("//mat-select[@id='citizenshipCountry']");}
    get selectCitizenshipCountry () { return $("//span[contains(text(),'India ')]");}
    get success () { return $("//div[contains(text(),'Profile Updated')]");}
    get accountDropdown() {return $("//button[@data-cy='account-drpdn']");}
    get signOut () { return $("//div[@id='mat-menu-panel-2']/div/a[2]");}

    get accountSecurity () { return $("//span[contains(text(),'Account Security')]");}
    get updatePwdDropdown () { return $("//mat-panel-title[contains(text(),'Update Password')]");}
    get currentPassword () { return $("//input[@id='currentPassword']");}
    get newPassword () { return $("//input[@id='password']");}
    get newPasswordTitle () { return $("//span[contains(text(),'New Password')]");}
    get savePwd () { return $("//button[@id='password-change-btn']");}
    get pwdUpdateSuccess () { return $("//div[contains(text(),'Password Updated')]");}

    get updateSecuQuesDropdown () { return $("//mat-panel-title[contains(text(),'Update Security Questions')]");}
    get questionOne () { return $('mat-select[id="securityQuestion1"]');}
    get firstAnswear () { return $('input[id="securityQuestion1Answer"]');}
    get questionTwo () { return $('mat-select[id="securityQuestion2"]');}
    get secondAnswear () { return $('input[id="securityQuestion2Answer"]');}
    get questionThree () { return $('mat-select[id="securityQuestion3"]');}
    get thirdAnswear () { return $('input[id="securityQuestion3Answer"]');}
    get reEnterPwd () { return $("//input[@id='confirmPassword']");}
    get saveChanges () { return $("//button[@id='security-question-change-btn']");}
    get sequrityQution () { return $("//div[contains(text(),'Security Questions Updated')]");}

    get reportDuplicateDropdown () { return $("//mat-panel-title[contains(text(),'Report Duplicate Account')]");}
    get userName () { return $('input[data-cy="username"]');}
    get message () { return $('textarea[data-cy="message"]');}
    get submit () { return $("//button[@data-cy='security-duplicate-account-submit']");}
    get reportSuccessMessage () { return $("//div[contains(text(),'Duplicate Account Report Submitted')]");}

    get viewPrivileges () { return $("//span[contains(text(),'View Privileges')]");}
    get myPrivileges () { return $("//h5[contains(text(),'My Access Privileges')]");}

    get addPrivileges () { return $("//span[contains(text(),'Add Privilege')]");}
    get addAPrivileges () { return $("//h5[contains(text(),'Add a privilege to your account')]");}

    get returnToAppli () { return $("//span[contains(text(),'Return to Application')]");}


    get prefixvalue () { return $("//mat-select[@id='prefix']//span/span");}
    get turnOnMFA() {return $("//button/span[contains(text(),'TURN ON 2FA')]");}
    get add_mobileNumber_button() {return $("//span[contains(text(),'Add Phone Number')]");}


    async iAcknowlegde (action){
        await sleep(4000);
        await this.acknowlegdeButton.waitForDisplayed();
        await this.acknowlegdeButton.click();
        await this.prefixDropdown.click();
        await this.selectPrefixvalue.click();
        await this.postnominaSufix.setValue("MBA");
        await this.generationalSufixDropdown.click();
        await this.selectgenerationalSufix.click();

        if(action =="save"){
             await this.saveButton.click();
        }else{
            await this.resetButton.click();
        }
            }

    async moreInfoScreen (action){
        await sleep(4000);
        await this.moreInfo.click();
        await sleep(4000);
        await this.acknowlegdeButton.waitForDisplayed();
        await this.acknowlegdeButton.click();
        await this.genderPrefixdropdown.click();
        await this.selectGenderPrefix.click();
        await this.citizenshipCountryDropdown.click();
        await this.selectCitizenshipCountry.click();

        if(action =="save"){
             await this.saveButton.click();
        }else{
            await this.moreResetButton.click();
        }
    }

    async successMessage (){
       
        //await this.success.waitForDisplayed();
        await this.success.isExisting();
        }

    async logOut (){
        await sleep(4000);
        await this.accountDropdown.click();
        await sleep(4000);
        await this.signOut.waitForDisplayed();
        await this.signOut.click();
        await sleep(4000);
                      
        }

    async passwordUpdate (){
        await this.accountSecurity.click();
        await this.updatePwdDropdown.click();
        await this.currentPassword.setValue("Password@001");
        await this.newPassword.setValue("Password@002");
        await this.newPasswordTitle.click();
        await this.savePwd.click();
        await this.updatePwdDropdown.click();
        }

    async pwdUpdateSuccessMessage (){
    
        await this.pwdUpdateSuccess.waitForDisplayed();
        await this.pwdUpdateSuccess.isExisting();
        }
    
    async updateSecurityQuestions (qOne, ansOne, qTwo, ansTwo, qThree, ansThree) {
        await this.updateSecuQuesDropdown.click();
        await this.questionOne.click();
        await sleep(5000);
        await $("//span[contains(text(),'"+qOne+"')]").click();
        await this.firstAnswear.setValue(ansOne);
        await this.questionTwo.click();
        await  $("//span[contains(text(),'"+qTwo+"')]").click();
        await this.secondAnswear.setValue(ansTwo);
        await this.questionThree.click();
        await $("//span[contains(text(),'"+qThree+"')]").click();
        await this.thirdAnswear.setValue(ansThree);
        await this.reEnterPwd.setValue("Password@002");
        await this.saveChanges.click();
        await this.updateSecuQuesDropdown.click();
    }    

    async securityQuestionsSuccessMessage (){
    
        await this.sequrityQution.waitForDisplayed();
        await this.sequrityQution.isExisting();
        }

    async duplicateUser (){
        await this.accountSecurity.click();
        await this.reportDuplicateDropdown.click();
        await this.userName.waitForDisplayed();
        await this.userName.setValue("Autotestnphx");
        await this.message.setValue("Duplicate User");
        await sleep(5000);
        //await this.submit.waitForDisplayed();
        await this.submit.click();
        }

    async duplicate_User_successMessage (){

        await this.reportSuccessMessage.waitForDisplayed();
        await this.reportSuccessMessage.isExisting();
        }
        
    async addNewPrivileges (){

        await this.addPrivileges.click();
        }

    async addAPrivilegesScreen (){

        await this.addAPrivileges.waitForDisplayed();
        await this.addAPrivileges.isExisting();
        }

    async viewPrivilegesTab (){

        await this.viewPrivileges.click();
        }

    async viewAPrivilegesScreen (){

        await this.myPrivileges.waitForDisplayed();
        await this.myPrivileges.isExisting();
        }

    async returnToApplication (){

        await this.returnToAppli.click();
        }

    async add_mobile_number (){
        await this.accountSecurity.click();
        await this.add_mobileNumber_button.click();
         //await this.turnOnMFA.click();
        }
}

module.exports = new myAccount2FAPage();
exports.myAccountPageElements = myAccount2FAPage.elements;