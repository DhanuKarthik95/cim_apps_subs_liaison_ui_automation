@suscribe
Feature: User should be able to see the Subscription landing page
    Scenario: Launch CIM Subscription app URL 
        Given the User enters the Subscription URL in the browser
        And the application redirect to OneAAMC login page
    Scenario Outline: Validate the subscription landing page
        When User fills in the user credentials "<usercredentials>" and submit
        Then User should redirect to the Subscription landing  page
        And User pauses for "5000"
        And User should see the AAMC logo and CiM homepage link in second header section
        When User click on the AAMC logo in second header
        And User pauses for "5000"
        Then User should redirect to the CMS home page 
        And User pauses for "5000"
        When User click on the browser back button 
        And User pauses for "5000"
        Then User should redirect to the Subscription landing  page
        When User click on the CiM home page link
        And User pauses for "5000"
        Then User should redirect to the CMS home page in external tab
        And User pauses for "5000"
        And User should see the page title
        And User should see the description and note
        And User should see the U.S MD, U.S DO  students, U.S MD, U.S DO Advisors and OTHER student&Advisors block
       
        And User should see the U.S MD STUDENTS as header in the first block
        And User should see the subheading in the USMD tile
        And User should see the text present on the U.S MD Students
        When User click on the CiM home page link in USMD Tile
        And User pauses for "5000"
        Then User should redirect to the CMS home page in external tab
        And User pauses for "5000"
        When User click on the CIM liaison link
        And User pauses for "5000"
        Then User should redirect to the CIM liaison page
        And User pauses for "5000"
        When User click on the browser back button 
        Then User should redirect to the Subscription landing  page
        And User pauses for "5000"
        And User should see the U.S DO STUDENTS as header in the second block
        And User should see the text present on the U.S DO Students
        And User should see the subheading in the USDO tile
        When User click on the CIM liaison link in the USDO tile
        And User pauses for "5000"
        Then User should redirect to the CIM liaison page
        When User click on the browser back button
        And User pauses for "5000" 
        Then User should redirect to the Subscription landing  page
        And User pauses for "5000"
        And User should see the ADVISORS :U.S MD, U.S DO as header in the third block
        And User should see the text present on the ADVISORS: U.S MD, U.S. DO
        And User should see the subheading in the Advisors tile
        When User click on the CIM liaison link in the Advisors tile
        And User pauses for "5000"
        Then User should redirect to the CIM liaison page
        And User pauses for "5000"
        When User click on the browser back button 
        And User pauses for "5000"
        Then User should redirect to the Subscription landing  page
        And User pauses for "5000"
        When User click on the CIM liaison link
        And User pauses for "5000"
        Then User should redirect to the CIM liaison page
        And User pauses for "5000"
        When User click on the browser back button
        And User pauses for "5000" 
        Then User should redirect to the Subscription landing  page
        And User pauses for "5000"
        And User should see the OTHER STUDENTS AND ADVISORS block with title
        And User should see the subheading in the Other students and Advisors tile
        And User should see the Who are you Text with dropdown
        And User should see the Choose an option text in dropdown
        When the user clicks on user account details
        Then the user should see sign out button available
        And the user clicks on sign out button


        When User Click on the dropdown
        Then User should see the Canadian Advisor, Canadian Student/Graduate, International  Advisor, International student/Graduate options
        When User select the Canadian student 
        Then User should see the Medical school dropdown
        And User should see the Type or Choose an option text by default
        When User click on the Medical School options
        Then User should see the list of medical school
        When User select the any medical schools 
        Then you receive access message should be displayed to the user
        When User click on the CIM liaison link
        Then User should redirect to the CIM liaison page
        When User select the Canadian Advisor 
        Then User should see the Medical school dropdown
        And User should see the Type or Choose an option text by default
        When User click on the Medical School options
        Then User should see the list of medical school
        When User select the any medical schools 
        Then you receive access message should be displayed to the user
        When User click on the CIM liaison link
        Then User should redirect to the CIM liaison page
        When User select the International student 
        Then User should see the country dropdown
        And User should see the Type or Choose an option text by default
        When User clicks on the Country dropdown
        Then User should see the list of the country
        When User click on the Medical School options
        Then User should see the list of medical school
        When User select the any medical schools 
        Then User should see the subscription required message
        When User clicks on the purchase subscription 
        Then User should redirect to the AAMC store in external tab
        When User clicks on the create an account
        Then User should redirect to the account creation page
        When User select the International Advisor 
        Then User should see the country dropdown
        And User should see the Type or Choose an option text by default
        When User clicks on the Country dropdown
        Then User should see the list of the country
        When User click on the Medical School options
        Then User should see the list of medical school
        When User select the any medical schools 
        Then User should see the subscription required message
        When User clicks on the purchase subscription 
        Then User should redirect to the AAMC store in external tab
        When User clicks on the create an account
        Then User should redirect to the account creation page


   



        Examples:
            | usercredentials |
            | CIM_RPE_USDOLEARNER |



       