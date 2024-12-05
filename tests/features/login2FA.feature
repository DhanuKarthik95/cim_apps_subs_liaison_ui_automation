@Regression
Feature: Recover Login Details

@forgotUsername
 Scenario Outline: Validate that user can able to clicking on forgot username successfully
    Given I am on the login page
    When User Navigates to Forgot Username Page By clicking on ForgotUsername <useremail>
    Then I should see a flash message
    When User navigate to login page 
    Then User should see login form screen
   
    Examples:
    | useremail         |              
    | saravi@aamc.org   |

@helpLink 
 Scenario: Validate that user can able to clicking on need help successfully
    Given I am on the login page
    When User click on need help in login page 
    Then User should navigate to help tab
    #And Enter Auth <AuthUser> and <AuthPass>

@resetPassword
 Scenario Outline: Validate that user can able to clicking on forgot password successfully
    Given I am on the login page
    When User Navigates to Reset Password Page By clicking on ForgotPassword <userName>
    And  User enter a security answer 
    And  User enter a new password <password>
    Then User should see password reset "success" message 
    And  User should see login form screen

    Examples:
    | userName              |  password |
    | Autotesttjsgautoma   |  @123 |

@resetPassword
 Scenario Outline: Validate the error message user enter existing password in new password field and click on continue button
    Given I am on the login page
    When User Navigates to Reset Password Page By clicking on ForgotPassword <userName>
     And User enter a security answer 
     And User enter a existing password <password>
    Then User should see password reset "unsuccess" message 

    Examples:
    | userName            |  password |
    | Autotestqhoneaamc   | Password@001 |          
   
@login501
 Scenario: Validate login a unverified account
  Given I am on the login page
  When User click on creat account and navigate to create account page 
   And User enter the personal information
      |requestAttribute| requestValue |
      |mailId          |  success+pnandib       |
      |confirmMailId   |  success+pnandib       |
      |firstName       | Autotest   |
      |lastName        | test         |
   And User enter the initial questions
   And User enter the account information
      |requestAttribute| requestValue |
      |userName        | Autotest  |
      |Password        | Password@001  |
      |questionOne     | Where did you first meet your spouse  |
      |firstAnswear    | spouse  |
      |questionTwo     | In what city did your parents get married  |
      |secondAnswear   | married  |
      |questionThree   | What is the breed of your first pet  |
      |thiredAnswear   | pet  |
  Then User should see account created success message
  When User login with created credentials
  Then User should see mail verefication screen
  When User relaunch a URL
   And User sign out application
  Then User should see login form screen

@login501
 Scenario: Validate login a unverified account and resend verification link to same mail-id
  Given I am on the login page
  When User click on creat account and navigate to create account page 
   And User enter the personal information
      |requestAttribute| requestValue |
      |mailId          |  success+pnandib       |
      |confirmMailId   |  success+pnandib       |
      |firstName       | Autotest   |
      |lastName        | test         |
   And User enter the initial questions
   And User enter the account information
      |requestAttribute| requestValue |
      |userName        | Autotest  |
      |Password        | Password@001  |
      |questionOne     | Where did you first meet your spouse  |
      |firstAnswear    | spouse  |
      |questionTwo     | In what city did your parents get married  |
      |secondAnswear   | married  |
      |questionThree   | What is the breed of your first pet  |
      |thiredAnswear   | pet  |
  Then User should see account created success message
  When User login with created credentials
  Then User should see mail verefication screen
  When User resend verification link to "same" mail id
  Then User should see mail resent success message
  When User register through api
   And User relaunch a URL
  Then User should see user name on home page
  When User sign out application
  Then User should see login form screen

@login @smoke
 Scenario: Validate login a unverified account and resend verification link sent to new mail-id
  Given I am on the login page
  When User click on creat account and navigate to create account page 
   And User enter the personal information
      |requestAttribute| requestValue |
      |mailId          |  success+pnandib       |
      |confirmMailId   |  success+pnandib       |
      |firstName       | Autotest   |
      |lastName        | test         |
   And User enter the initial questions
   And User enter the account information
      |requestAttribute| requestValue |
      |userName        | Autotest  |
      |Password        | Password@001  |
      |questionOne     | Where did you first meet your spouse  |
      |firstAnswear    | spouse  |
      |questionTwo     | In what city did your parents get married  |
      |secondAnswear   | married  |
      |questionThree   | What is the breed of your first pet  |
      |thiredAnswear   | pet  |
  Then User should see account created success message
  When User login with created credentials
  Then User should see mail verefication screen
  When User resend verification link to "new" mail id
  Then User should see mail resent success message
  When User register through api
   And User relaunch a URL
  Then User should see user name on home page
  When User sign out application
  Then User should see login form screen

@login900
 Scenario: Validate login with incorrect credentials
  Given I am on the login page
  When User click on creat account and navigate to create account page 
   And User enter the personal information
      |requestAttribute| requestValue |
      |mailId          |  success+pnandib       |
      |confirmMailId   |  success+pnandib       |
      |firstName       | Autotest   |
      |lastName        | test         |
   And User enter the initial questions
   And User enter the account information
      |requestAttribute| requestValue |
      |userName        | Autotest  |
      |Password        | Password@001  |
      |questionOne     | Where did you first meet your spouse  |
      |firstAnswear    | spouse  |
      |questionTwo     | In what city did your parents get married  |
      |secondAnswear   | married  |
      |questionThree   | What is the breed of your first pet  |
      |thiredAnswear   | pet  |
  Then User should see account created success message
  When User register through api
   And User navigate to login page after link verified
   And User trying to login with incorrect credentials
  Then User should see error message
  When User trying to login with incorrect credentials
  Then User should see error message
  When User trying to login with incorrect credentials
  Then User should see warning error message
  When User trying to login with incorrect credentials
  Then User should see second warning error message
  When User trying to login with incorrect credentials
  Then User should see account locked error message

@login420
 Scenario: Validate locked account password reset
  Given I am on the login page
  When User click on creat account and navigate to create account page 
   And User enter the personal information
      |requestAttribute| requestValue |
      |mailId          |  success+pnandib       |
      |confirmMailId   |  success+pnandib       |
      |firstName       | Autotest   |
      |lastName        | test         |
   And User enter the initial questions
   And User enter the account information
      |requestAttribute| requestValue |
      |userName        | Autotest  |
      |Password        | Password@001  |
      |questionOne     | Where did you first meet your spouse  |
      |firstAnswear    | spouse  |
      |questionTwo     | In what city did your parents get married  |
      |secondAnswear   | married  |
      |questionThree   | What is the breed of your first pet  |
      |thiredAnswear   | pet  |
  Then User should see account created success message
  When User register through api
   And User navigate to login page after link verified
   And User trying to login with incorrect credentials
  Then User should see error message
  When User trying to login with incorrect credentials
  Then User should see error message
  When User trying to login with incorrect credentials
  Then User should see warning error message
  When User trying to login with incorrect credentials
  Then User should see second warning error message
  When User trying to login with incorrect credentials
  Then User should see account locked error message
  When User reset the password for locked account
  Then User should see password reset "success" message 

@stafflogin @smoke
 Scenario: Validate user able to login with system credentials
  Given I am on the login page
  When User launch a staff login url
   And User login with below network credentials
         |requestAttribute| requestValue |
         |UserName        | saravi       |
         |Password        | Newjob@#234 |
  Then User should see login success message 

@Temp_Password
 Scenario: Validate that user can able to get temp passsword successfully and update security questions
  Given I am on the login page
  When User click on creat account and navigate to create account page 
   And User enter the personal information
      |requestAttribute| requestValue |
      |mailId          |  success+pnandib       |
      |confirmMailId   |  success+pnandib       |
      |firstName       | Autotest   |
      |lastName        | test         |
   And User enter the initial questions
   And User enter the account information
      |requestAttribute| requestValue |
      |userName        | Autotest  |
      |Password        | Password@001  |
      |questionOne     | Where did you first meet your spouse  |
      |firstAnswear    | spouse  |
      |questionTwo     | In what city did your parents get married  |
      |secondAnswear   | married  |
      |questionThree   | What is the breed of your first pet  |
      |thiredAnswear   | pet  |
  Then User should see account created success message
  When User register through api
   And User relaunch a URL
  Then User should see login form screen
   And User login with below credentials
         |requestAttribute| requestValue |
         |UserName        | saravi       |
         |Password        | Newpassword@123 |
  Then User should see two factor authentication screen
  When User select an "default" option to send OTP
  Then User should see enter your one time code screen
  When User enter "email" OTP in one time code screen 
   |requestAttribute| requestValue |
   | filterData    | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging" verification_Code |
  When User initiated temporary password request
  Then User should see temporary password request success message
  When User capture temporary password through api
   And User relaunch a URL
  Then User should see user name on home page
  When User sign out application
  Then User should see login form screen
  When User login with temporary password
  Then User should see security screen after login success with temporary password
  When User update new password after login with temporary password
  Then User should see new password updated success message
  When User update security questios after temporary password reset
      |requestAttribute| requestValue |
      |questionOne     | What was your dream job as a child  |
      |firstAnswear    | child  |
      |questionTwo     | What school did you attend when you started sixth grade  |
      |secondAnswear   | grade  |
      |questionThree   | In what city did your parents get married  |
      |thiredAnswear   | marrird  |
  Then User should see user name on home page
  When User sign out application
  Then User should see login form screen

@Temp_Password1
 Scenario: Validate that user can able to get temp passsword successfully and skip to update security questions
  Given I am on the login page
  When User click on creat account and navigate to create account page 
   And User enter the personal information
      |requestAttribute| requestValue |
      |mailId          |  success+pnandib       |
      |confirmMailId   |  success+pnandib       |
      |firstName       | Autotest   |
      |lastName        | test         |
   And User enter the initial questions
   And User enter the account information
      |requestAttribute| requestValue |
      |userName        | Autotest  |
      |Password        | Password@001  |
      |questionOne     | Where did you first meet your spouse  |
      |firstAnswear    | spouse  |
      |questionTwo     | In what city did your parents get married  |
      |secondAnswear   | married  |
      |questionThree   | What is the breed of your first pet  |
      |thiredAnswear   | pet  |
  Then User should see account created success message
  When User register through api
    And User relaunch a URL
  Then User should see login form screen
   And User login with below credentials
         |requestAttribute| requestValue |
         |UserName        | saravi       |
         |Password        | Newpassword@123 |
  Then User should see two factor authentication screen
  When User select an "default" option to send OTP
  Then User should see enter your one time code screen
  When User enter "email" OTP in one time code screen 
   |requestAttribute| requestValue |
   | filterData    | index=forgerock host="ft-u-forgerock-am-use1*" source="/var/log/forgerock/am/debug/OtherLogging" verification_Code |
  Then User should see user name on home page
  When User initiated temporary password request
  Then User should see temporary password request success message
  When User capture temporary password through api
   And User relaunch a URL
  Then User should see user name on home page
  When User sign out application
  Then User should see login form screen
  When User login with temporary password
  Then User should see security screen after login success with temporary password
  When User update new password after login with temporary password
  Then User should see new password updated success message
  When User skip a security questios after temporary password reset
  Then User should see user name on home page