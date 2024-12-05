@Regression
Feature: MFA login

   @MFAlogin @smoke
   Scenario: Validate the user's ability to access the MFA login flow and send the otp to their email address.
      Given I am on the login page
      #   When User launch a mfa login url
      And User login with below credentials
         | requestAttribute | requestValue  |
         | UserName         | Autotestombzf |
         | Password         | Password@001  |
      Then User should see two factor authentication screen
      When User select an "email" option to send OTP
      Then User should see enter your one time code screen
      When User enter "email" OTP in one time code screen
         | requestAttribute | requestValue                                                                                                       |
         | filterData       | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging" verification_Code |
      #   Then User should see login success message
      When User relaunch a URL
      And User sign out application
      Then User should see login form screen

   #@MFAlogin @smoke
   Scenario: Validate the user's ability to access the MFA login flow and send the otp to their mobile device.
      Given I am on the login page
      #   When User launch a mfa login url
      And User login with below credentials
         | requestAttribute | requestValue  |
         | UserName         | Autotestombzf |
         | Password         | Password@001  |
      Then User should see two factor authentication screen
      When User select an "mobile" option to send OTP
      Then User should see enter your one time code screen
      When User enter "mobile" OTP in one time code screen
         | requestAttribute | requestValue                                                                                                           |
         | filterData       | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging" Autotestombzf,otpCode |
      #   Then User should see login success message
      When User relaunch a URL
      And User sign out application
      Then User should see login form screen

   #@MFAlogin
   Scenario: Validate multi-factor authentication login with incorrect OTP numbers and clcik on resend otp.
      Given I am on the login page
      #   When User launch a mfa login url
      And User login with below credentials
         | requestAttribute | requestValue  |
         | UserName         | Autotestombzf |
         | Password         | Password@001  |
      Then User should see two factor authentication screen
      When User select an "mobile" option to send OTP
      Then User should see enter your one time code screen
      When User enter "invalid" OTP in one time code screen
         | requestAttribute | requestValue                                                                                                           |
         | filterData       | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging" Autotestombzf,otpCode |
      Then User should see an incorrect otp error message
      When User click on resend new opt and validate resent success message
      And User enter "mobile" OTP in one time code screen
         | requestAttribute | requestValue                                                                                                           |
         | filterData       | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging" Autotestombzf,otpCode |
      #   Then User should see login success message
      When User relaunch a URL
      And User sign out application
      Then User should see login form screen


   #@MFAlogin
   Scenario: Validate the new user 2FA setup is complete and click on the 'not now' option.
      Given I am on the login page
      When User click on creat account and navigate to create account page
      And User enter the personal information
         | requestAttribute | requestValue    |
         | mailId           | success+pnandib |
         | confirmMailId    | success+pnandib |
         | firstName        | Autotest        |
         | lastName         | test            |
      And User enter the initial questions
      And User enter the account information
         | requestAttribute | requestValue                              |
         | userName         | Autotest                                  |
         | Password         | Password@001                              |
         | questionOne      | Where did you first meet your spouse      |
         | firstAnswear     | spouse                                    |
         | questionTwo      | In what city did your parents get married |
         | secondAnswear    | married                                   |
         | questionThree    | What is the breed of your first pet       |
         | thiredAnswear    | pet                                       |
      Then User should see account created success message
      When User register through api
      And User launch a mfa login url
      And User login with created credintial to set 2FA
      Then User should see two factor authentication setup screen
      #When User click on "not_now" option
      When User click on "setup_2FA" option
      And User enter a mobile number in 2FA "skip_mobile" setup screen
      And User should see 2FA auth setup completed screen and click on done
      #   Then User should see login success message
      When User relaunch a URL
      And User sign out application
      Then User should see login form screen

   #@MFAlogin @smoke
   Scenario: Validate the 2FA setup completed message for new user mobile number.
      Given I am on the login page
      When User click on creat account and navigate to create account page
      And User enter the personal information
         | requestAttribute | requestValue    |
         | mailId           | success+pnandib |
         | confirmMailId    | success+pnandib |
         | firstName        | Autotest        |
         | lastName         | test            |
      And User enter the initial questions
      And User enter the account information
         | requestAttribute | requestValue                              |
         | userName         | Autotest                                  |
         | Password         | Password@001                              |
         | questionOne      | Where did you first meet your spouse      |
         | firstAnswear     | spouse                                    |
         | questionTwo      | In what city did your parents get married |
         | secondAnswear    | married                                   |
         | questionThree    | What is the breed of your first pet       |
         | thiredAnswear    | pet                                       |
      Then User should see account created success message
      When User register through api
      And User launch a mfa login url
      And User login with created credintial to set 2FA
      Then User should see two factor authentication setup screen
      When User click on "setup_2FA" option
      And User enter a mobile number in 2FA "mobile" setup screen
      Then User should see mobile number verify screen
      When User enter "mobile" OTP number in contact verification screen
         | requestAttribute | requestValue                                                                                                 |
         | filterData       | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging" 11234567890 |
      #Then User should see mail address verify screen
      And User should see 2FA auth setup completed screen and click on done
      # And User should see login success message
      When User relaunch a URL
      And User sign out application
      Then User should see login form screen


   #@MFAlogin @smoke
   Scenario: Validate the 2FA setup completed message for new user skip mobile number.
      Given I am on the login page
      When User click on creat account and navigate to create account page
      And User enter the personal information
         | requestAttribute | requestValue    |
         | mailId           | success+pnandib |
         | confirmMailId    | success+pnandib |
         | firstName        | Autotest        |
         | lastName         | test            |
      And User enter the initial questions
      And User enter the account information
         | requestAttribute | requestValue                              |
         | userName         | Autotest                                  |
         | Password         | Password@001                              |
         | questionOne      | Where did you first meet your spouse      |
         | firstAnswear     | spouse                                    |
         | questionTwo      | In what city did your parents get married |
         | secondAnswear    | married                                   |
         | questionThree    | What is the breed of your first pet       |
         | thiredAnswear    | pet                                       |
      Then User should see account created success message
      When User register through api
      And User launch a mfa login url
      And User login with created credintial to set 2FA
      Then User should see two factor authentication setup screen
      When User click on "setup_2FA" option
      And User enter a mobile number in 2FA "skip_mobile" setup screen
      #Then User should see mail address verify screen
      And User should see 2FA auth setup completed screen and click on done
      # And User should see login success message
      When User relaunch a URL
      And User sign out application
      Then User should see login form screen
   #   Then User should see mobile number verify screen

   #@MFAlogin
   Scenario: Validate the 2FA setup completed message for new user skip mobile number and change existing mail id to new mail id.
      Given I am on the login page
      When User click on creat account and navigate to create account page
      And User enter the personal information
         | requestAttribute | requestValue    |
         | mailId           | success+pnandib |
         | confirmMailId    | success+pnandib |
         | firstName        | Autotest        |
         | lastName         | test            |
      And User enter the initial questions
      And User enter the account information
         | requestAttribute | requestValue                              |
         | userName         | Autotest                                  |
         | Password         | Password@001                              |
         | questionOne      | Where did you first meet your spouse      |
         | firstAnswear     | spouse                                    |
         | questionTwo      | In what city did your parents get married |
         | secondAnswear    | married                                   |
         | questionThree    | What is the breed of your first pet       |
         | thiredAnswear    | pet                                       |
      Then User should see account created success message
      When User register through api
      And User launch a mfa login url
      And User login with created credintial to set 2FA
      Then User should see two factor authentication setup screen
      When User click on "setup_2FA" option
      And User enter a mobile number in 2FA "skip_mobile" setup screen
      # And User changes an existing email address
      # And User enter "email" OTP number in contact verification screen
      #    |requestAttribute| requestValue |
      #    | filterData    | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging"verification_code |
      And User should see 2FA auth setup completed screen and click on done
      # And User should see login success message
      When User relaunch a URL
      And User sign out application
      Then User should see login form screen

   #@MFAlogin 
   Scenario: Validate the new user 2FA setup is complete and click on the 'Remind me' option.
      Given I am on the login page
      When User click on creat account and navigate to create account page
      And User enter the personal information
         | requestAttribute | requestValue    |
         | mailId           | success+pnandib |
         | confirmMailId    | success+pnandib |
         | firstName        | Autotest        |
         | lastName         | test            |
      And User enter the initial questions
      And User enter the account information
         | requestAttribute | requestValue                              |
         | userName         | Autotest                                  |
         | Password         | Password@001                              |
         | questionOne      | Where did you first meet your spouse      |
         | firstAnswear     | spouse                                    |
         | questionTwo      | In what city did your parents get married |
         | secondAnswear    | married                                   |
         | questionThree    | What is the breed of your first pet       |
         | thiredAnswear    | pet                                       |
      Then User should see account created success message
      When User register through api
      And User launch a mfa login url
      And User login with created credintial to set 2FA
      Then User should see two factor authentication setup screen
      When User click on "remind" option
      #   Then User should see login success message
      When User relaunch a URL
      And User sign out application
   #   Then User should see login form screen

   #@MFAlogin
   Scenario: Validate the 2FA setup error message for new users who skip mobile numbers and change the existing email ID to the email ID that has already been registered with another user.
      Given I am on the login page
      When User click on creat account and navigate to create account page
      And User enter the personal information
         | requestAttribute | requestValue    |
         | mailId           | success+pnandib |
         | confirmMailId    | success+pnandib |
         | firstName        | Autotest        |
         | lastName         | test            |
      And User enter the initial questions
      And User enter the account information
         | requestAttribute | requestValue                              |
         | userName         | Autotest                                  |
         | Password         | Password@001                              |
         | questionOne      | Where did you first meet your spouse      |
         | firstAnswear     | spouse                                    |
         | questionTwo      | In what city did your parents get married |
         | secondAnswear    | married                                   |
         | questionThree    | What is the breed of your first pet       |
         | thiredAnswear    | pet                                       |
      Then User should see account created success message
      When User register through api
      And User launch a mfa login url
      And User login with created credintial to set 2FA
      Then User should see two factor authentication setup screen
      When User click on "setup_2FA" option
      And User enter a mobile number in 2FA "skip_mobile" setup screen
      #    And User entered an already registered email address
      #   Then User should see email id already used error "messages"
      #    And User should see two factor authentication setup screen
      #   When User click on "not_now" option
      And User should see 2FA auth setup completed screen and click on done
      #   Then User should see login success message
      #When User relaunch a URL
      And User sign out application
      Then User should see login form screen

   #@MFAlogin @smoke
   Scenario: Validate the 2FA enable from account security tab and login with mobile otp.
      Given I am on the login page
      When User click on creat account and navigate to create account page
      And User enter the personal information
         | requestAttribute | requestValue    |
         | mailId           | success+pnandib |
         | confirmMailId    | success+pnandib |
         | firstName        | Autotest        |
         | lastName         | test            |
      And User enter the initial questions
      And User enter the account information
         | requestAttribute | requestValue                              |
         | userName         | Autotest                                  |
         | Password         | Password@001                              |
         | questionOne      | Where did you first meet your spouse      |
         | firstAnswear     | spouse                                    |
         | questionTwo      | In what city did your parents get married |
         | secondAnswear    | married                                   |
         | questionThree    | What is the breed of your first pet       |
         | thiredAnswear    | pet                                       |
      Then User should see account created success message
      When User register through api
      And User launch a mfa login url
      And User login with created credintial to set 2FA
      Then User should see two factor authentication setup screen
      #When User click on "not_now" option
      When User click on "setup_2FA" option
      And User enter a mobile number in 2FA "skip_mobile" setup screen
      And User should see 2FA auth setup completed screen and click on done
      When User navigate to my accountpage
      And User add mobile number in account security tab
      And User enter a mobile number in 2FA "mobile" setup screen
      Then User should see mobile number verify screen
      When User enter "mobile" OTP number in contact verification screen from 2FA account security tab
         | requestAttribute | requestValue                                                                                                 |
         | filterData       | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging" 11234567890 |
      #Then User should see mail address verify screen
      Then User should see "mobile_number" update success message and click on done button
      When User sign out application
      Then User should see login form screen
      And User launch a mfa login url
      And User login with created credintial to set 2FA
      Then User should see two factor authentication screen
      When User select an "mobile" option to send OTP
      Then User should see enter your one time code screen
      When User enter "mobile" OTP in one time code screen
         | requestAttribute | requestValue                                                                                                         |
         | filterData       | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging" 11234567890,otpCode |
      When User relaunch a URL
      And User sign out application
      Then User should see login form screen

   #@MFAlogin
   Scenario: Validate the 2FA enable from account security tab and login with email otp.
      Given I am on the login page
      When User click on creat account and navigate to create account page
      And User enter the personal information
         | requestAttribute | requestValue    |
         | mailId           | success+pnandib |
         | confirmMailId    | success+pnandib |
         | firstName        | Autotest        |
         | lastName         | test            |
      And User enter the initial questions
      And User enter the account information
         | requestAttribute | requestValue                              |
         | userName         | Autotest                                  |
         | Password         | Password@001                              |
         | questionOne      | Where did you first meet your spouse      |
         | firstAnswear     | spouse                                    |
         | questionTwo      | In what city did your parents get married |
         | secondAnswear    | married                                   |
         | questionThree    | What is the breed of your first pet       |
         | thiredAnswear    | pet                                       |
      Then User should see account created success message
      When User register through api
      And User launch a mfa login url
      And User login with created credintial to set 2FA
      Then User should see two factor authentication setup screen
      #When User click on "not_now" option
      When User click on "setup_2FA" option
      And User enter a mobile number in 2FA "skip_mobile" setup screen
      And User should see 2FA auth setup completed screen and click on done
      When User navigate to my accountpage
      And User add mobile number in account security tab
      And User enter a mobile number in 2FA "mobile" setup screen
      Then User should see mobile number verify screen
      When User enter "mobile" OTP number in contact verification screen from 2FA account security tab
         | requestAttribute | requestValue                                                                                                 |
         | filterData       | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging" 11234567890 |
      #Then User should see mail address verify screen
      Then User should see "mobile_number" update success message and click on done button
      And User sign out application
      Then User should see login form screen
      And User launch a mfa login url
      And User login with created credintial to set 2FA
      Then User should see two factor authentication screen
      When User select an "email" option to send OTP
      Then User should see enter your one time code screen
      When User enter "email" OTP in one time code screen
         | requestAttribute | requestValue                                                                                                       |
         | filterData       | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging" verification_Code |
      When User relaunch a URL
      And User sign out application
      Then User should see login form screen

   #@MFAlogin
   Scenario: Validate 2FA is enabled with skip mobile number from account security tab and login with email otp.
      Given I am on the login page
      When User click on creat account and navigate to create account page
      And User enter the personal information
         | requestAttribute | requestValue    |
         | mailId           | success+pnandib |
         | confirmMailId    | success+pnandib |
         | firstName        | Autotest        |
         | lastName         | test            |
      And User enter the initial questions
      And User enter the account information
         | requestAttribute | requestValue                              |
         | userName         | Autotest                                  |
         | Password         | Password@001                              |
         | questionOne      | Where did you first meet your spouse      |
         | firstAnswear     | spouse                                    |
         | questionTwo      | In what city did your parents get married |
         | secondAnswear    | married                                   |
         | questionThree    | What is the breed of your first pet       |
         | thiredAnswear    | pet                                       |
      Then User should see account created success message
      When User register through api
      And User launch a mfa login url
      And User login with created credintial to set 2FA
      Then User should see two factor authentication setup screen
      #When User click on "not_now" option
      When User click on "setup_2FA" option
      And User enter a mobile number in 2FA "skip_mobile" setup screen
      And User should see 2FA auth setup completed screen and click on done
      When User navigate to my accountpage
      And User add mobile number in account security tab
      And User enter a mobile number in 2FA "mobile" setup screen
      Then User should see mobile number verify screen
      When User enter "mobile" OTP number in contact verification screen from 2FA account security tab
         | requestAttribute | requestValue                                                                                                 |
         | filterData       | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging" 11234567890 |
      #Then User should see mail address verify screen
      Then User should see "mobile_number" update success message and click on done button
      And User sign out application
      Then User should see login form screen
      And User launch a mfa login url
      And User login with created credintial to set 2FA
      Then User should see two factor authentication screen
      When User select an "default" option to send OTP
      Then User should see enter your one time code screen
      When User enter "email" OTP in one time code screen
         | requestAttribute | requestValue                                                                                                       |
         | filterData       | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging" verification_Code |
      When User relaunch a URL
      And User sign out application
      Then User should see login form screen

   #@MFAlogin
   Scenario: Validate 2FA is enabled with skip mobile number from account security tab and change existing mail id to new mail id.
      Given I am on the login page
      When User click on creat account and navigate to create account page
      And User enter the personal information
         | requestAttribute | requestValue    |
         | mailId           | success+pnandib |
         | confirmMailId    | success+pnandib |
         | firstName        | Autotest        |
         | lastName         | test            |
      And User enter the initial questions
      And User enter the account information
         | requestAttribute | requestValue                              |
         | userName         | Autotest                                  |
         | Password         | Password@001                              |
         | questionOne      | Where did you first meet your spouse      |
         | firstAnswear     | spouse                                    |
         | questionTwo      | In what city did your parents get married |
         | secondAnswear    | married                                   |
         | questionThree    | What is the breed of your first pet       |
         | thiredAnswear    | pet                                       |
      Then User should see account created success message
      When User register through api
      And User launch a mfa login url
      And User login with created credintial to set 2FA
      Then User should see two factor authentication setup screen
      #When User click on "not_now" option
      When User click on "setup_2FA" option
      And User enter a mobile number in 2FA "skip_mobile" setup screen
      And User should see 2FA auth setup completed screen and click on done
      When User navigate to my accountpage
      # And User turn on 2FA in account security tab
      # And User enter a mobile number in 2FA "skip mobileNumber" setup screen
      And User changes an existing email address
      When User enter "email" OTP number in contact verification screen from 2FA account security tab
         | requestAttribute | requestValue                                                                                                      |
         | filterData       | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging"verification_code |
      Then User should see "email_id" update success message and click on done button
   #   When User sign out application
   #   Then User should see login form screen

   #@MFAlogin
   Scenario: Validate 2FA is enableing error message with skip mobile number from account security tab and change existing mail id to new mail id already registered with another user mail id.
      Given I am on the login page
      When User click on creat account and navigate to create account page
      And User enter the personal information
         | requestAttribute | requestValue    |
         | mailId           | success+pnandib |
         | confirmMailId    | success+pnandib |
         | firstName        | Autotest        |
         | lastName         | test            |
      And User enter the initial questions
      And User enter the account information
         | requestAttribute | requestValue                              |
         | userName         | Autotest                                  |
         | Password         | Password@001                              |
         | questionOne      | Where did you first meet your spouse      |
         | firstAnswear     | spouse                                    |
         | questionTwo      | In what city did your parents get married |
         | secondAnswear    | married                                   |
         | questionThree    | What is the breed of your first pet       |
         | thiredAnswear    | pet                                       |
      Then User should see account created success message
      When User register through api
      And User launch a mfa login url
      And User login with created credintial to set 2FA
      Then User should see two factor authentication setup screen
      #When User click on "not_now" option
      When User click on "setup_2FA" option
      And User enter a mobile number in 2FA "skip_mobile" setup screen
      And User should see 2FA auth setup completed screen and click on done
      And User navigate to my accountpage
      And User entered an already registered email address
      Then User should see email id already used error "messages"
   #   When User sign out application
   #   Then User should see login form screen

   #@MFAlogin
   Scenario: Validate the help link in add mobile number screen.
      Given I am on the login page
      When User click on creat account and navigate to create account page
      And User enter the personal information
         | requestAttribute | requestValue    |
         | mailId           | success+pnandib |
         | confirmMailId    | success+pnandib |
         | firstName        | Autotest        |
         | lastName         | test            |
      And User enter the initial questions
      And User enter the account information
         | requestAttribute | requestValue                              |
         | userName         | Autotest                                  |
         | Password         | Password@001                              |
         | questionOne      | Where did you first meet your spouse      |
         | firstAnswear     | spouse                                    |
         | questionTwo      | In what city did your parents get married |
         | secondAnswear    | married                                   |
         | questionThree    | What is the breed of your first pet       |
         | thiredAnswear    | pet                                       |
      Then User should see account created success message
      When User register through api
      And User launch a mfa login url
      And User login with created credintial to set 2FA
      Then User should see two factor authentication setup screen
      When User click on "setup_2FA" option
      And User click on "help" link in add mobile number screen
      Then User should navigate to "help screen"
      When User click on "sms" link in add mobile number screen
      Then User should navigate to "sms screen"
      When User click on "privacy" link in add mobile number screen
      Then User should navigate to "privacy screen"

   #@MFAlogin420
   Scenario: Validate the turned off 2FA from account security tab.
      Given I am on the login page
      When User click on creat account and navigate to create account page
      And User enter the personal information
         | requestAttribute | requestValue    |
         | mailId           | success+pnandib |
         | confirmMailId    | success+pnandib |
         | firstName        | Autotest        |
         | lastName         | test            |
      And User enter the initial questions
      And User enter the account information
         | requestAttribute | requestValue                              |
         | userName         | Autotest                                  |
         | Password         | Password@001                              |
         | questionOne      | Where did you first meet your spouse      |
         | firstAnswear     | spouse                                    |
         | questionTwo      | In what city did your parents get married |
         | secondAnswear    | married                                   |
         | questionThree    | What is the breed of your first pet       |
         | thiredAnswear    | pet                                       |
      Then User should see account created success message
      When User register through api
      And User launch a mfa login url
      And User login with created credintial to set 2FA
      Then User should see two factor authentication setup screen
      #When User click on "not_now" option
      When User click on "setup_2FA" option
      And User enter a mobile number in 2FA "skip_mobile" setup screen
      And User should see 2FA auth setup completed screen and click on done
      When User navigate to my accountpage
      And User add mobile number in account security tab
      And User enter a mobile number in 2FA "mobile" setup screen
      Then User should see mobile number verify screen
      When User enter "mobile" OTP number in contact verification screen from 2FA account security tab
         | requestAttribute | requestValue                                                                                                             |
         | filterData       | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging" 11234567890, verifyCode |
      #Then User should see mail address verify screen
      And User should see "mobile_number" update success message and click on done button
      And User should see 2FA enabled status on account security screen
      When User turn off 2FA from account security screen
      Then User shouls see 2FA disable message and click on disable button
      When User select an "mobile" option to send OTP
      Then User should see enter your one time code screen
      When User enter "mobile otp" OTP number in contact verification screen from 2FA account security tab
         | requestAttribute | requestValue                                                                                                 |
         | filterData       | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging" 11234567890 |
      Then User should see turnOn 2FA button in account security screen
      When User sign out application
      Then User should see login form screen

   #@MFAlogin
   Scenario: Validate the 2FA enabled user mobile number changes from account security tab.
      Given I am on the login page
      When User click on creat account and navigate to create account page
      And User enter the personal information
         | requestAttribute | requestValue    |
         | mailId           | success+pnandib |
         | confirmMailId    | success+pnandib |
         | firstName        | Autotest        |
         | lastName         | test            |
      And User enter the initial questions
      And User enter the account information
         | requestAttribute | requestValue                              |
         | userName         | Autotest                                  |
         | Password         | Password@001                              |
         | questionOne      | Where did you first meet your spouse      |
         | firstAnswear     | spouse                                    |
         | questionTwo      | In what city did your parents get married |
         | secondAnswear    | married                                   |
         | questionThree    | What is the breed of your first pet       |
         | thiredAnswear    | pet                                       |
      Then User should see account created success message
      When User register through api
      And User launch a mfa login url
      And User login with created credintial to set 2FA
      Then User should see two factor authentication setup screen
      #When User click on "not_now" option
      When User click on "setup_2FA" option
      And User enter a mobile number in 2FA "skip_mobile" setup screen
      And User should see 2FA auth setup completed screen and click on done
      When User navigate to my accountpage
      And User add mobile number in account security tab
      And User enter a mobile number in 2FA "mobile" setup screen
      Then User should see mobile number verify screen
      When User enter "mobile" OTP number in contact verification screen from 2FA account security tab
         | requestAttribute | requestValue                                                                                                             |
         | filterData       | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging" 11234567890, verifyCode |
      #Then User should see mail address verify screen
      And User should see "mobile_number" update success message and click on done button
      And User should see 2FA enabled status on account security screen
      When User click on "mobile_number" edit button in account security screen
      Then User should see edit "mobile_number" screen
      When User clear existing "mobile_number" and re-enter new value in edit screen
      Then User should see mobile number verify screen
      When User enter "mobile" OTP number in contact verification screen from 2FA account security tab
         | requestAttribute | requestValue                                                                                                             |
         | filterData       | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging" 19876543210, verifyCode |
      Then User should see "mobile_number" update success message and click on done button
      When User sign out application
      Then User should see login form screen

   #@MFAlogin
   Scenario: Validate the 2FA enabled user change new mail id from account security tab.
      Given I am on the login page
      When User click on creat account and navigate to create account page
      And User enter the personal information
         | requestAttribute | requestValue    |
         | mailId           | success+pnandib |
         | confirmMailId    | success+pnandib |
         | firstName        | Autotest        |
         | lastName         | test            |
      And User enter the initial questions
      And User enter the account information
         | requestAttribute | requestValue                              |
         | userName         | Autotest                                  |
         | Password         | Password@001                              |
         | questionOne      | Where did you first meet your spouse      |
         | firstAnswear     | spouse                                    |
         | questionTwo      | In what city did your parents get married |
         | secondAnswear    | married                                   |
         | questionThree    | What is the breed of your first pet       |
         | thiredAnswear    | pet                                       |
      Then User should see account created success message
      When User register through api
      And User launch a mfa login url
      And User login with created credintial to set 2FA
      Then User should see two factor authentication setup screen
      #When User click on "not_now" option
      When User click on "setup_2FA" option
      And User enter a mobile number in 2FA "skip_mobile" setup screen
      And User should see 2FA auth setup completed screen and click on done
      When User navigate to my accountpage
      And User add mobile number in account security tab
      And User enter a mobile number in 2FA "mobile" setup screen
      Then User should see mobile number verify screen
      When User enter "mobile" OTP number in contact verification screen from 2FA account security tab
         | requestAttribute | requestValue                                                                                                             |
         | filterData       | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging" 11234567890, verifyCode |
      #Then User should see mail address verify screen
      And User should see "mobile_number" update success message and click on done button
      And User should see 2FA enabled status on account security screen
      When User click on "email_id" edit button in account security screen
      Then User should see edit "email_id" screen
      When User clear existing "email_id" and re-enter new value in edit screen
      Then User should see mfa edit mail address verify screen
      When User enter "email" OTP number in contact verification screen from 2FA account security tab
         | requestAttribute | requestValue                                                                                                      |
         | filterData       | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging"verification_code |
      Then User should see "email_id" update success message and click on done button
      When User sign out application
      Then User should see login form screen

   #@MFAlogin
   Scenario: Validate the 2FA enabled user delete mobile number from account security tab.
      Given I am on the login page
      When User click on creat account and navigate to create account page
      And User enter the personal information
         | requestAttribute | requestValue    |
         | mailId           | success+pnandib |
         | confirmMailId    | success+pnandib |
         | firstName        | Autotest        |
         | lastName         | test            |
      And User enter the initial questions
      And User enter the account information
         | requestAttribute | requestValue                              |
         | userName         | Autotest                                  |
         | Password         | Password@001                              |
         | questionOne      | Where did you first meet your spouse      |
         | firstAnswear     | spouse                                    |
         | questionTwo      | In what city did your parents get married |
         | secondAnswear    | married                                   |
         | questionThree    | What is the breed of your first pet       |
         | thiredAnswear    | pet                                       |
      Then User should see account created success message
      When User register through api
      And User launch a mfa login url
      And User login with created credintial to set 2FA
      Then User should see two factor authentication setup screen
      #When User click on "not_now" option
      When User click on "setup_2FA" option
      And User enter a mobile number in 2FA "skip_mobile" setup screen
      And User should see 2FA auth setup completed screen and click on done
      When User navigate to my accountpage
      And User add mobile number in account security tab
      And User enter a mobile number in 2FA "mobile" setup screen
      Then User should see mobile number verify screen
      When User enter "mobile" OTP number in contact verification screen from 2FA account security tab
         | requestAttribute | requestValue                                                                                                             |
         | filterData       | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging" 11234567890, verifyCode |
      #Then User should see mail address verify screen
      And User should see "mobile_number" update success message and click on done button
      And User should see 2FA enabled status on account security screen
      When User click on "delete_mobile_no" edit button in account security screen
      Then User should see delete mobile number screen and click on confirm button
      And User should see add mobile number button in account security screen
      When User sign out application
      Then User should see login form screen