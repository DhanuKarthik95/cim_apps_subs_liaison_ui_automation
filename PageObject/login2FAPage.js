const apiTempPassword = require('../api-utility/apiTempPassword');
const Page = require('./page');
const MyAccountpage = require('../pageobjects/myAccountpage');
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

/**
 * sub page containing specific selectors and methods for a specific page
 */
class login2FAPage extends Page {
    /**
     * define selectors using getter methods
     */
    //get inputUsername () {return $('input[placeholder="Enter Username"]'); }
    get inputUsername () {return $('input[name="IDToken1"]'); }
    get inputPassword () {return $('input[placeholder="Enter Password"]');}
    get networkPassword () {return $('input[placeholder="Enter Network Password"]');}
    get btnSubmit () { return $('button[type="submit"]');}
    get signinbtn () { return $('button[data-cy="login-btn"]');}
    get forgotUsername () {return $('a[id="forgotUsername"]');}
    get forgotPassword () {return $('a[id="forgotPassword"]');}
    get emailId () {return $('input[placeholder="Enter Email"]');}
    get continuebtn () {return $('button[id="continue-btn"]');}
    get loginScreen () {return $("//span[contains(text(),'Sign In')]");}
    get needHelpIcon () {return $("//a[contains(text(),'Need Help?')]");}
    get needHelpPage () {return $("//h1[contains(text(),'Need help with your AAMC account?')]");}
    get creatAccount () { return $('button[id="createAccount"]');}
    get mail_unverified_message () {return $("//h1[contains(text(),'Email Verification Pending')]");}
    get verification_mail_resent () {return $('button[data-cy="verification-resend"]');}
    get verification_mail_resent_newMail () {return $('mat-radio-button[data-cy="useCurrentEmailFalse"]');}
    get new_Mail_Id () {return $('input[data-cy="newEmail"]');}
    get link_resent_successMessage () {return $("//p[contains(text(),'You will receive a new verification email shortly.')]");}
    get login_error_message () {return $("//*[contains(text(),'The username or password you entered is incorrect.')]");}
    get login_first_warning_message () {return $("//*[contains(text(),'Warning: Account lockout will occur after 2 more failure(s).')]");}
    get login_second_warning_message () {return $("//*[contains(text(),'Warning: Account lockout will occur after 1 more failure(s).')]");}
    get account_locked_error_message () {return $("//*[contains(text(),'User Locked Out.')]");}
    get two_factor_authentication () {return $("//h1[contains(text(),'Two-Factor Authentication')]");}
    get staff_login_success_message () {return $("//div[contains(text(),'Login Success')]");}
    get email_option () { return $('mat-radio-button[id="mat-radio-2"]');}
    //get mobile_option () { return $('mat-radio-button[id="mat-radio-3"]');}
    get mobile_option () { return $('input[id="mat-radio-3-input"]');}
    get auth_continuebtn () {return $('button[data-cy="auth-journey-primary-btn"]');}
    get auth_submit () {return $("//span[contains(text(),' AUTHENTICATE ')]");}
    get otp_screen () {return $("//*[contains(text(),'Enter Your One-time Code')]");}
    get resend_otp () {return $("//a[contains(text(),'Resend Code')]");}
    get otp_resent_message () {return $("//p[contains(text(),'A new code has been sent.')]");}
    get splunkUsername () {return $('input[id="username"]'); }
    get splunkPassword () {return $('input[id="password"]');}
    get splunksignin () {return $('input[value="Sign In"]');}
    get otp () {return $("//table/tbody/tr[1]/td[5]/div[1]/div[2]");}
    get searchData () {return $("//html/body/div[3]/div[2]/div/div[1]/div[2]/form/table/tbody/tr/td[1]/div/div/pre/div[2]/div[1]");}
    get searchButton () {return $('td[class="search-button"]');}
    get otpInput () {return $('//input[@id="otp-input-0"]');}
    get splunkLogoff () {return $('a[title="User"]'); }
    get splunkLofButton () {return $("//a[contains(text(),'Logout')]"); }
    get incorrect_otp_error_message () {return $("//span[contains(text(),'The code you entered is incorrect.')]");}

    get searchUsername () {return $('input[data-cy="username"]'); }
    get userSearchButton () {return $('button[data-cy="searchUsers"]'); }
    get actionMenu () {return $('button[data-cy="actions-menu"]'); }
    get selectOption () {return $("//span[contains(text(),'Reset Password')]"); }
    get responseText () {return $('input[data-cy="responseText"]'); }
    //get selectResponseText () {return $("//span[contains(text(),'AAMC Web Site')]"); }
    get verifyUserCheckbox () {return $("//*[contains(text(),'I have verified the identity of this user')]"); }
    get resetButton () {return $('button[data-cy="resetPassword"]'); }

    get sucessCode () {return $('small[id="success-aamcid"]'); }
    get closeButton () {return $('button[data-cy="closeDialog"]'); }

    get securityscreen () {return $("//h1[contains(text(),'Update Security Information')]"); }
    get tempPasswordText () {return $('input[data-cy="temporaryPassword"]'); }
    get newPasswordText () {return $('input[data-cy="create-password"]'); }
    get submitButton () {return $('button[data-cy="submit"]'); }
    get newpasswordSuccess () {return $("//h3[contains(text(),'Success! Your password has been updated')]"); }
    get skipButton () {return $('button[data-cy="skip-btn"]'); }
    get updateButton () {return $('button[data-cy="update-btn"]'); }
    get reEnterPassword () {return $("//input[@data-cy='password']"); }
    get updateSubmitButton () {return $("//span[contains(text(),'Submit')]"); }
    get questionOne () { return $('mat-select[id="securityQuestion1"]');}
    get firstAnswear () { return $('input[id="securityQuestion1Answer"]');}
    get questionTwo () { return $('mat-select[id="securityQuestion2"]');}
    get secondAnswear () { return $('input[id="securityQuestion2Answer"]');}
    get questionThree () { return $('mat-select[id="securityQuestion3"]');}
    get thirdAnswear () { return $('input[id="securityQuestion3Answer"]');}
    get mfaSetup_screen () { return $("//h1[contains(text(),'The AAMC Now Offers Two-Factor Authentication')]");}
    get setup_2fa () { return $("//button[contains(text(),'Setup 2FA')]");}
    get remind_me () { return $("//button[contains(text(),'Remind Me In 30 Days')]");}
    get notNow () { return $("//button[contains(text(),'Not Now')]");}
    get phoneNumber () { return $('input[name="phoneNumber"]');}
    get mfa_continue () { return $("//span[contains(text(),'CONTINUE')]");}
    get mfa_skip_mobNo () { return $("//span[contains(text(),'SKIP ADDING MOBILE PHONE')]");}
    get mobileNo_verify () {return $("//*[contains(text(),'Verify Your Mobile Phone Number')]");}
    get mailId_verify () {return $("//*[contains(text(),'Confirm Email Address')]");}
    get change_mailId () {return $('button[aria-label="edit-email-address"]');}
    get new_mailId () { return $('input[placeholder="Enter Email"]');}
    get verify_button () { return $("//span[contains(text(),'VERIFY')]");}
    get continue_button () { return $("//button[contains(text(),'Continue')]");}
    get mfa_setup_success () { return $("//*[contains(text(),'Two-factor Authentication Setup Complete')]");}
    get email_id_error_message () { return $("//p[contains(text(),'This email address is already in use')]");}
    get cancel_button () { return $("//span[contains(text(),'CANCEL')]");}
    get ok_button () { return $("//span[contains(text(),'OK')]");}
    get done_button () { return $("//*[contains(text(),'Done')]");}
    get mfa_done_button () { return $("//button/span[contains(text(),'DONE')]");}
    get mfa_helpLink () { return $("//*[contains(text(),'Visit our help page')]");}
    get mfa_smsLink () { return $("//div/a[contains(text(),'SMS Terms')]");}
    get mfa_privacyLink () { return $("//*[contains(text(),'Privacy Statement')]");}
    get mfa_faq_screen () { return $("//h1[contains(text(),'Two-Factor Authentication (2FA) FAQ')]");}
    get mfa_smsTerms_screen () { return $("//h1[contains(text(),'SMS Terms')]");}
    get mfa_privacy_screen () { return $("//h1[contains(text(),'Privacy Statement')]");}
    get enabled () { return $("//*[contains(text(),'Enabled')]");}
    get turnOff_mfa () { return $("//*[contains(text(),'Turn Off 2FA')]");}
    get mfa_disable_message () { return $("//*[contains(text(),'Disable Two-Factor Authentication')]");}
    get mfa_disable_buttom () { return $("//*[contains(text(),'DISABLE 2FA')]");}
    get turnOn_MFA_button () { return $("//*[contains(text(),'TURN ON 2FA')]");}
    get edit_mobile_number () { return $("button[aria-label='edit-mobile-number']");}
    get new_mobile_number () { return $("//aamc-auth-journey-layout/div/div[2]/container-element[1]/aamc-auth-journey-callback-choice/container-element//div/aamc-ui-phone-number/form/aamc-ui-extended-field/div[1]/div/mat-form-field/div[1]/div/div[3]/input");}
    get delete_mobile_number () { return $("button[aria-label='delete-mobile-number']");}
    get edit_mail_id () { return $("button[aria-label='edit-email-address']");}
    get edit_mobile_number_screen () { return $("//*[contains(text(),'Edit Mobile Phone Number')]");}
    get edit_email_id_screen () { return $("//*[contains(text(),'Edit Email Address')]");}
    get delete_mobile_number_screen () { return $("//*[contains(text(),'Delete Mobile Phone Number')]");}
    get delete_confirm_button () { return $("//*[contains(text(),'CONFIRM')]");}
    get mfa_verify_mail_id () { return $("//*[contains(text(),'Verify Your Email Address')]");}
    get email_id_update_message () { return $("//*[contains(text(),'Email Address Updated')]");}
    get mobile_no_update_message () { return $("//*[contains(text(),'Mobile Phone Number Updated')]");}
    get add_mobile_number_button () { return $("//*[contains(text(),'Add Phone Number')]");}



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async security_screen(){
        await this.securityscreen.waitForDisplayed();
        await this.securityscreen.isExisting();
    }

    async reset_new_password () {
        await this.tempPasswordText.setValue(tempPassword);
        await this.newPasswordText.setValue("Newpassword@002");
        await this.searchUsername.click()
        await this.submitButton.click(); 
    }

    async new_password_update_screen(){
        await this.newpasswordSuccess.waitForDisplayed();
        await this.newpasswordSuccess.isExisting();
    }

    async skip_security_questions(){
        await this.skipButton.click(); 
    }

    async add_security_questions(qOne, ansOne, qTwo, ansTwo, qThree, ansThree) {
        await this.updateButton.click();
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
        await this.reEnterPassword.setValue("Newpassword@002");
        await this.updateSubmitButton.click(); 
    }

    async forgotId (useremail) {
        await this.forgotUsername.click();
        await this.emailId.setValue(useremail);
        await sleep(2000);
        await this.continuebtn.click();
        //await this.continuesignin.click();
        //await sleep(20000); 
    }

    async login (username, password) {
       
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.signinbtn.click();

        // var alert = browser.switchToWindow();
        // browser.sendAlertText("AAMCUser", "BasicAuth1!");        
        // alert.acceptAlert();
    }

    async needHelp(){
        await this.needHelpIcon.click();
        await sleep(20000);
    }

    async forgotpasswordLink(){
        await this.forgotPassword.click();

    }

    async mail_verification_pending_message(){
        await this.mail_unverified_message.waitForDisplayed();
        await this.mail_unverified_message.isExisting();

    }

    async verification_link_resent(sent_to){
        if(sent_to =="same"){
        await this.verification_mail_resent.click();
        }else{
            await this.verification_mail_resent_newMail.click();
            await this.new_Mail_Id.setValue("success@simulator.amazonses.com");
            await this.inputPassword.setValue("Password@001");
            await this.verification_mail_resent.click();
        }
    }

    async resent_Success_Message(){
        await this.link_resent_successMessage.waitForDisplayed();
        await this.link_resent_successMessage.isExisting();

    }

    async invalid_credential (username) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue("Password@002");
        await this.btnSubmit.click();
    }

    async invalid_login_erroeMessage(){
        await this.login_error_message.waitForDisplayed();
        await this.login_error_message.isExisting();

    }

    async invalid_login_first_warning_erroeMessage(){
        await this.login_first_warning_message.waitForDisplayed();
        await this.login_first_warning_message.isExisting();

    }

    async invalid_login_second_warning_erroeMessage(){
        await this.login_second_warning_message.waitForDisplayed();
        await this.login_second_warning_message.isExisting();

    }

    async invalid_login_account_locked_erroeMessage(){
        await this.account_locked_error_message.waitForDisplayed();
        await this.account_locked_error_message.isExisting();

    }

    async login_with_samUser (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.signinbtn.click();
    }

    async staffLogin(){
        await sleep(5000);
        await browser.url("https://AAMCUser:BasicAuth1@www.ftest.aamc.org/user/login/aamclogin");
        
    }

    async login_with_networkCredential (username, password) {
        await this.inputUsername.setValue(username);
        await this.networkPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async network_credential_login_Message(){
        await this.staff_login_success_message.waitForDisplayed();
        await this.staff_login_success_message.isExisting();

    }

    async mfaLogin(){
        await sleep(5000);
        await browser.url("https://AAMCUser:BasicAuth1!@auth.ftest.aamc.org/account/#/login?bypass=2fanotification");
        await browser.deleteCookies();
        await browser.refresh();
        
    }

    async authenticationScreen(){
        await this.two_factor_authentication.waitForDisplayed();
        await this.two_factor_authentication.isExisting();

    }

    async auth_otp_send(sent_to){
        if(sent_to =="default"){
            await this.auth_continuebtn.click();
            }else{
        if(sent_to =="email"){
        await this.email_option.click();
        }else{
            await this.mobile_option.click();
        }

        await this.auth_continuebtn.click();
    }
    }

    async one_time_code_Screen(){
        await this.otp_screen.waitForDisplayed();
        await this.otp_screen.isExisting();

    }

    async mobileNo_Verify_Screen(){
        await this.mobileNo_verify.waitForDisplayed();
        await this.mobileNo_verify.isExisting();

    }

    async mailID_Verify_Screen(){
        await this.mailId_verify.waitForDisplayed();
        await this.mailId_verify.isExisting();
        await this.continue_button.click();

    }

    async mfa_setup_completed(){
        await this.mfa_setup_success.waitForDisplayed();
        await this.mfa_setup_success.isExisting();
        await this.done_button.click();
        await sleep(2000);

    }

    async mfa_email_error(ok){
        await this.email_id_error_message.waitForDisplayed();
        await this.email_id_error_message.isExisting();
        await this.cancel_button.click();

        if(ok =="message"){
            await this.ok_button.click();
            }

    }

   

    async capture_otp(inputData, otp){
        await sleep(5000);
        await browser.newWindow("https://splunk.ent.aamc.org/en-US/app/search/search");
        await this.splunkUsername.setValue("saravi");
        await this.splunkPassword.setValue("Newjob@#234");
        await this.splunksignin.click();
        await sleep(10000);
        await this.searchData.click();
        await browser.keys(inputData)
        await this.searchButton.click();
        await sleep(10000);
        await this.otp.waitForDisplayed();
       const otpValue = await this.otp.getText();

       if(otp =="mobile"){
          var otpNumbeer = otpValue.split("otpCode")[1]
          var otpNumber = otpNumbeer.slice(3, 9);
       }else if(otp =="email"){
          var otpNumberr = otpValue.split("verification_code")[1]   
          var otpNumber = otpNumberr.slice(3, 9);
       }else{
          var otpNumber = "123456";
       }

       console.log("==================OTP======== :" + otpNumber);
       await this.splunkLogoff.click();
       await this.splunkLofButton.click();
       await browser.closeWindow();
       await browser.switchWindow('OneAAMC | Sign in');
       await this.otpInput.click();
       await this.otpInput.setValue(otpNumber);
       await this.auth_submit.click();
    }

    async otp_resend(){
        await this.resend_otp.click();
          }

    async otp_resent_success_message(){
        await this.otp_resent_message.waitForDisplayed();
        await this.otp_resent_message.isExisting();
         }      

    async contact_verify_otp(inputData, otp){
        await sleep(5000);
        await browser.newWindow("https://splunk.ent.aamc.org/en-US/app/search/search");
        await this.splunkUsername.setValue("saravi");
        await this.splunkPassword.setValue("Newjob@#234");
        await this.splunksignin.click();
        await sleep(2000);
        await this.searchData.click();
        await browser.keys(inputData)
        await this.searchButton.click();
        await sleep(5000);
        await this.otp.waitForDisplayed();
       const otpValue = await this.otp.getText();

       if(otp =="mobile"){
          var otpNumbeer = otpValue.split("verifyCode")[1]
          var otpNumber = otpNumbeer.slice(3, 9);
       }else if(otp =="mobile otp"){
        var otpNumbeer = otpValue.split("otpCode")[1]
        var otpNumber = otpNumbeer.slice(3, 9);
     }else if(otp =="email"){
          var otpNumberr = otpValue.split("verification_code")[1]   
          var otpNumber = otpNumberr.slice(3, 9);
       }else{
          var otpNumber = "123456";
       }

       console.log("==================OTP======== :" + otpNumber);
       await this.splunkLogoff.click();
       await this.splunkLofButton.click();
       await browser.closeWindow();
       await browser.switchWindow('OneAAMC | Sign in');
       await this.otpInput.click();
       await this.otpInput.setValue(otpNumber);
      // await this.verify_button.click();
       
    }

    async inCorrect_otp_erroeMessage(){
        await this.incorrect_otp_error_message.waitForDisplayed();
        await this.incorrect_otp_error_message.isExisting();

    }

    async mfa_setup_screen(){
        await this.mfaSetup_screen.waitForDisplayed();
        await this.mfaSetup_screen.isExisting();

    }

    async mfa_setup(option){
        if(option =="not_now"){
        await this.notNow.click();
        }else if(option =="remind"){
        await this.remind_me.click();
        }else{
        await this.setup_2fa.click();
        }
        
    }

    async mobileNumber_setup(option){
     if(option == "mobile"){   
      await this.phoneNumber.setValue("1234567890");
      await sleep(2000);
      await this.mfa_continue.click();
     }else{
        await this.mfa_skip_mobNo.click();
     }
    }

    async link_Validation(option){
        if(option == "help"){  
            await sleep(2000); 
           await this.mfa_helpLink.click();
           await sleep(2000);
        }else if(option == "sms"){
            await sleep(2000); 
           await this.mfa_smsLink.click();
           await sleep(2000);
        }else {
            await sleep(2000); 
           await this.mfa_privacyLink.click();
           await sleep(2000);
         }
       }

    async screen_name_validation(option){
        if(option == "help screen"){
            await sleep(2000);
            await browser.switchWindow('Need help with your AAMC account'); 
            await sleep(2000);
            await this.mfa_faq_screen.waitForDisplayed();
            await this.mfa_faq_screen.isExisting();
            //await browser.closeWindow();
            await browser.switchWindow('OneAAMC | Sign in');
            //await this.cancel_button.click();
        }else if(option == "privacy screen"){ 
            await sleep(2000);
            await browser.switchWindow('Privacy Statement | AAMC');  
            await this.mfa_privacy_screen.waitForDisplayed();
            await this.mfa_privacy_screen.isExisting();
            //await browser.closeWindow();
            await browser.switchWindow('OneAAMC | Sign in');
        }else{
            await sleep(2000);
            await browser.switchWindow('SMS Terms | AAMC');   
            await this.mfa_smsTerms_screen.waitForDisplayed();
            await this.mfa_smsTerms_screen.isExisting();
            //await browser.closeWindow();
            await browser.switchWindow('OneAAMC | Sign in');
        }
       }

    async temporary_Password_Request(userName){
        await this.searchUsername.setValue(userName);
        await this.userSearchButton.click();
        await this.actionMenu.click();
        await this.selectOption.click();
        await this.responseText.setValue("AAMC Web Site");
        //await this.selectResponse.click();
        
        await this.verifyUserCheckbox.click();
        await this.resetButton.click();
    }

     async password_request_sucessMessage(){
        await this.sucessCode.waitForDisplayed();
        await this.sucessCode.isExisting();
        await this.closeButton.click();

    }

    async login_with_temp_password (username) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(tempPassword);
        await this.btnSubmit.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
        return await super.open('login');
    }

    async relaunchURL (){
        await sleep(5000);
        await browser.url("https://AAMCUser:BasicAuth1!@auth.ftest.aamc.org/sam");
        await sleep(5000);
        // await browser.deleteCookies();
        // await browser.refresh();
    }

    async mfa_mobile_verify_otp(inputData, otp){
        await sleep(5000);
        await browser.newWindow("https://splunk.ent.aamc.org/en-US/app/search/search");
        await this.splunkUsername.setValue("saravi");
        await this.splunkPassword.setValue("Newjob@#234");
        await this.splunksignin.click();
        await sleep(2000);
        await this.searchData.click();
        await browser.keys(inputData)
        await this.searchButton.click();
        await sleep(5000);
        await this.otp.waitForDisplayed();
       const otpValue = await this.otp.getText();

       if(otp =="mobile"){
          var otpNumbeer = otpValue.split("verifyCode")[1]
          var otpNumber = otpNumbeer.slice(3, 9);
       }else if(otp =="mobile otp"){
        var otpNumbeerr = otpValue.split("otpCode")[1]
        var otpNumber = otpNumbeerr.slice(3, 9);
     }else if(otp =="email"){
          var otpNumberr = otpValue.split("verification_code")[1]   
          var otpNumber = otpNumberr.slice(3, 9);
       }else{
          var otpNumber = "123456";
       }

       console.log("==================OTP======== :" + otpNumber);
       await this.splunkLogoff.click();
       await this.splunkLofButton.click();
       await browser.closeWindow();
       await browser.switchWindow('OneAAMC | Security');
       await this.otpInput.click();
       await this.otpInput.setValue(otpNumber);
      // await this.verify_button.click();
       
    }

    async account_security_mfa_setup_completed(){
        await this.mfa_setup_success.waitForDisplayed();
        await this.mfa_setup_success.isExisting();
        await this.mfa_done_button.click();

    }

    async mfa_status(){
        await this.enabled.waitForDisplayed();
        await this.enabled.isExisting();

    }

    async mfa_turn_off(){
        await this.turnOff_mfa.click();
      
    }

    async mfaDisable_message(){
        await this.mfa_disable_message.waitForDisplayed();
        await this.mfa_disable_message.isExisting();
        await this.mfa_disable_buttom.click();
      
    }

    async turnOn_mfa(){
        await this.turnOn_MFA_button.waitForDisplayed();
        await this.turnOn_MFA_button.isExisting();
      
    }

    async edit(option){

        if(option == "mobile_number"){
          await this.edit_mobile_number.click();
        }else if(option == "email_id"){
          await this.edit_mail_id.click();
        }else if(option == "delete_mobile_no"){
          await this.delete_mobile_number.click();
        }      
    }

    async edit_screen(option){

        if(option == "mobile_number"){
            await this.edit_mobile_number_screen.waitForDisplayed();
            await this.edit_mobile_number_screen.isExisting();
        }else if(option == "email_id")
            await this.edit_email_id_screen.waitForDisplayed();
            await this.edit_email_id_screen.isExisting();
      
    }

    async edit_value(option){
        if(option == "mobile_number"){
        await this.new_mobile_number.clearValue();
        await sleep(2000);
        await this.new_mobile_number.setValue("9876543210");
        //await browser.keys("3")
    }else if(option == "email_id"){
        await this.new_mailId.setValue("success+"+regUserName+"@simulator.amazonses.com");
    }
        await sleep(2000);
        await this.mfa_continue.click();
      
    }

    async edit_email_Verify_Screen(){
        await this.mfa_verify_mail_id.waitForDisplayed();
        await this.mfa_verify_mail_id.isExisting();

    }

    async mobile_number_updated(option){
        
        if(option == "mobile_number"){
            await this.mobile_no_update_message.waitForDisplayed();
            await this.mobile_no_update_message.isExisting();
        }else if(option == "email_id"){
            await this.email_id_update_message.waitForDisplayed();
            await this.email_id_update_message.isExisting();
        }

        await this.done_button.click();
      
    }

    async mfa_delete_mobile_number_Screen(){
        await this.delete_mobile_number_screen.waitForDisplayed();
        await this.delete_mobile_number_screen.isExisting();
        await this.delete_confirm_button.click();

    }

    async mfa_add_mobile_number_button(){
        await this.add_mobile_number_button.waitForDisplayed();
        await this.add_mobile_number_button.isExisting();

    }

}

module.exports = new login2FAPage();
exports.login2FAPageElements = login2FAPage.elements;