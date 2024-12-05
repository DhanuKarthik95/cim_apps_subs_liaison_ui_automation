Feature: Axe violations validation for RPE landing page in CIM RPE application

@AccessibilityTestRPE @RPELandingAxe @ProdAxe
          
    Scenario Outline: 1. RPE landing page AXE violations validation
          When the Actor launches the URL "CIM_RPE" from "programManagementURLs"
          When User fills in the user credentials "<usercredentials>" and submit
          Then the login should be successful to CIM RPE MOD landing page
          And verify accessbility of the page
          When the user clicks on user account details
          Then the user should see sign out button available
          And the user clicks on sign out button
        Examples:
            | usercredentials |
            | CIM_RPE_USDOLEARNER |

 @AccessibilityTestRPE @PrefListAxe @ProdAxe
    Scenario Outline: 2. Prefernce list startup page AXE violations validation
        When the Actor launches the URL "CIM_RPE" from "programManagementURLs"
        When User fills in the user credentials "<usercredentials>" and submit
        Then the login should be successful to CIM RPE MOD landing page
        When the user clicks on add new list button from the preference list section
        Then the navigation should be successful to create preference list startup screen page
        And verify accessbility of the page
        When the user clicks on user account details
        Then the user should see sign out button available
        And the user clicks on sign out button
        Examples:
            | usercredentials |
            | CIM_RPE_USDOLEARNER |
    @AccessibilityTestRPE @ProgListAxe @ProdAxe
    Scenario Outline: 3. Program list startup page AXE violations validation
        When the Actor launches the URL "CIM_RPE" from "programManagementURLs"
        When User fills in the user credentials "<usercredentials>" and submit
        Then the login should be successful to CIM RPE MOD landing page
        When the user clicks on add new list button from the program list section
        Then the navigation should be successful to create program list startup screen page
        And verify accessbility of the page
        When the user clicks on user account details
        Then the user should see sign out button available
        And the user clicks on sign out button
        Examples:
            | usercredentials |
            | CIM_RPE_USDOLEARNER |
    @AccessibilityTestRPE @CategScreenAxe @ProdAxe
    Scenario Outline: 4. Category screens pages AXE violations validation
        When the Actor launches the URL "CIM_RPE" from "programManagementURLs"
        When User fills in the user credentials "<usercredentials>" and submit
        Then the login should be successful to CIM RPE MOD landing page
        When the user clicks on add new list button from the preference list section
        Then the navigation should be successful to create preference list startup screen page
        When the user clicks on START button
        And User pauses for "5000"
        Then the navigation should be successful to Preference list creation page category 1 screen
        And User pauses for "5000"
        And verify accessbility of the page
        When the user clicks on NEXT CATEGORY button of the category screen 1
        Then the navigation should be successful to Preference list creation page category 2 screen
        And verify accessbility of the page
        And the user clicks on NEXT CATEGORY button of the category screen 2
        Then the navigation should be successful to Preference list creation page category 3 screen
        And verify accessbility of the page
        And the user clicks on NEXT CATEGORY button of the category screen 3
        Then the navigation should be successful to Preference list creation page category 4 screen
        And verify accessbility of the page
        And the user clicks on NEXT CATEGORY button of the category screen 4
        Then the navigation should be successful to Preference list creation page category 5 screen
        And verify accessbility of the page
        And the user clicks on NEXT CATEGORY button of the category screen 5
        Then the navigation should be successful to Preference list creation page category 6 screen
        And verify accessbility of the page
        And the user clicks on NEXT CATEGORY button of the category screen 6
        Then the navigation should be successful to Preference list creation page category 7 screen
        And verify accessbility of the page
        When the user clicks on user account details
        Then the user should see sign out button available
        And the user clicks on sign out button
        Examples:
            | usercredentials |
            | CIM_RPE_USDOLEARNER |
       @AccessibilityTestRPE @AlertPopupAxe @ProdAxe
       Scenario Outline: 5. Validation alert pop-up page AXE violations validation
       When the Actor launches the URL "CIM_RPE" from "programManagementURLs"
        When User fills in the user credentials "<usercredentials>" and submit
        Then the login should be successful to CIM RPE MOD landing page
        When the user clicks on add new list button from the preference list section
        Then the navigation should be successful to create preference list startup screen page
        When the user clicks on START button
        And User pauses for "5000"
        Then the navigation should be successful to Preference list creation page category 1 screen
        And User pauses for "5000"
        When the user clicks on NEXT CATEGORY button of the category screen 1
        Then the navigation should be successful to Preference list creation page category 2 screen
        And the user clicks on NEXT CATEGORY button of the category screen 2
        Then the navigation should be successful to Preference list creation page category 3 screen
        And the user clicks on NEXT CATEGORY button of the category screen 3
        Then the navigation should be successful to Preference list creation page category 4 screen
        And the user clicks on NEXT CATEGORY button of the category screen 4
        Then the navigation should be successful to Preference list creation page category 5 screen
        And the user clicks on NEXT CATEGORY button of the category screen 5
        Then the navigation should be successful to Preference list creation page category 6 screen
        And the user clicks on NEXT CATEGORY button of the category screen 6
        Then the navigation should be successful to Preference list creation page category 7 screen
        And the user clicks on NEXT CATEGORY button of the category screen 7
        Then the navigation should be successful to Preference list creation page other factors screen
        #And User pauses for "5000"
        When the user clicks on CONTINUE button of other factors screen
        Then the validation alert pop up should be displayed
        And verify accessbility of the page
        When User clicks on Return to preferences button
        Then Alert pop up should not be displayed
        When the user clicks on user account details
        Then the user should see sign out button available
        And the user clicks on sign out button
        Examples:
            | usercredentials |
            | CIM_RPE_USDOLEARNER |
        @AccessibilityTestRPE @QuitModalAxe @ProdAxe
Scenario Outline: 6. Quit modal page AXE violations validation
        When the Actor launches the URL "CIM_RPE" from "programManagementURLs"
        When User fills in the user credentials "<usercredentials>" and submit
        Then the login should be successful to CIM RPE MOD landing page
        When the user clicks on add new list button from the preference list section
        Then the navigation should be successful to create preference list startup screen page
        And the breadcrumb component should be available with preference list as title and other items as links
        And the Preference list header should be available with description text
        When the user clicks on START button
        Then the navigation should be successful to category 1 of the preference list screen
        When the user selects any of the factors from the category 1 of the preference list screen
        And the user clicks on Quit button of the category screen
        Then the quit modal should be displayed on the screen
        And verify accessbility of the page
        When the user clicks on the NO button
        Then the quit modal should be closed
        When the user clicks on user account details
        Then the user should see sign out button available
        And the user clicks on sign out button
        Examples:
            | usercredentials |
            | CIM_RPE_USDOLEARNER |
        @AccessibilityTestRPE @OtherFactorsAxe @ProdAxe
Scenario Outline: 7. Other factors screen page AXE violations validation
        When the Actor launches the URL "CIM_RPE" from "programManagementURLs"
        When User fills in the user credentials "<usercredentials>" and submit
        Then the login should be successful to CIM RPE MOD landing page
        When the user clicks on add new list button from the preference list section
        Then the navigation should be successful to create preference list startup screen page
        And the breadcrumb component should be available with preference list as title and other items as links
        And the Preference list header should be available with description text
        And the buttons START and CANCEL should be displayed on the page
        When the user clicks on START button
        Then the navigation should be successful to Preference list creation page category 1 screen
        And User pauses for "5000"
        And User clicks on factors checkbox
        When the user clicks on NEXT CATEGORY button of the category screen 1
        Then the navigation should be successful to Preference list creation page category 2 screen
        And the user clicks on NEXT CATEGORY button of the category screen 2
        Then the navigation should be successful to Preference list creation page category 3 screen
        And User pauses for "5000"
        And the user clicks on NEXT CATEGORY button of the category screen 3
        Then the navigation should be successful to Preference list creation page category 4 screen
        And User pauses for "5000"
        And the user clicks on NEXT CATEGORY button of the category screen 4
        Then the navigation should be successful to Preference list creation page category 5 screen
        And User pauses for "5000"
        And the user clicks on NEXT CATEGORY button of the category screen 5
        Then the navigation should be successful to Preference list creation page category 6 screen
        And User pauses for "5000"
        And the user clicks on NEXT CATEGORY button of the category screen 6
        Then the navigation should be successful to Preference list creation page category 7 screen
        And User pauses for "5000"
        And the user clicks on NEXT CATEGORY button of the category screen 7
        Then the navigation should be successful to Preference list creation page other factors screen
        And verify accessbility of the page
        When the user clicks on user account details
        Then the user should see sign out button available
        And the user clicks on sign out button
        Examples:
            | usercredentials |
            | CIM_RPE_USDOLEARNER |
    @AccessibilityTestRPE @prefListReviewAxe
Scenario Outline: 7. Preference list review screen page AXE violations validation
        When the Actor launches the URL "CIM_RPE" from "programManagementURLs"
        When User fills in the user credentials "<usercredentials>" and submit
        Then the login should be successful to CIM RPE MOD landing page
        When the user clicks on add new list button from the preference list section
        # Then the navigation should be successful to create preference list startup screen page
        # And the breadcrumb component should be available with preference list as title and other items as links
        # And the Preference list header should be available with description text
        # And the buttons START and CANCEL should be displayed on the page
        When the user clicks on START button
        Then the navigation should be successful to Preference list creation page category 1 screen
        And User pauses for "5000"
        And User clicks on factors checkbox
        When the user clicks on NEXT CATEGORY button of the category screen 1
        Then the navigation should be successful to Preference list creation page category 2 screen
        And the user clicks on NEXT CATEGORY button of the category screen 2
        Then the navigation should be successful to Preference list creation page category 3 screen
        And User pauses for "5000"
        And the user clicks on NEXT CATEGORY button of the category screen 3
        Then the navigation should be successful to Preference list creation page category 4 screen
        And User pauses for "5000"
        And the user clicks on NEXT CATEGORY button of the category screen 4
        Then the navigation should be successful to Preference list creation page category 5 screen
        And User pauses for "5000"
        And the user clicks on NEXT CATEGORY button of the category screen 5
        Then the navigation should be successful to Preference list creation page category 6 screen
        And User pauses for "5000"
        And the user clicks on NEXT CATEGORY button of the category screen 6
        Then the navigation should be successful to Preference list creation page category 7 screen
        And User pauses for "5000"
        And the user clicks on NEXT CATEGORY button of the category screen 7
        Then the navigation should be successful to Preference list creation page other factors screen
        And User pauses for "5000"
        When the user clicks on CONTINUE button of other factors screen
        Then user should be navigated to preference list review screen
        And verify accessbility of the page
        When the user clicks on user account details
        Then the user should see sign out button available
        And the user clicks on sign out button
        Examples:
            | usercredentials |
            | CIM_RPE_USDOLEARNER |
# @AccessibilityTestRPE @progListSelAxe
# Scenario Outline: 7. Program list selection screen page AXE violations validation
#         When the Actor launches the URL "CIM_RPE" from "programManagementURLs"
#         When User fills in the user credentials "<usercredentials>" and submit
#         Then the login should be successful to CIM RPE MOD landing page
#         When the user clicks on add new list button from the program list section
#         Then the navigation should be successful to create program list startup screen page
#         And the breadcrumb component should be available with program list as title and other items as links
#         And the Program list header should be available with description text
#         And the buttons START and CANCEL should be displayed on the page
#         When the user clicks on CANCEL button
#         Then the navigation should be successful to CIM RPE landing page
#         When the user clicks on add new list button from the program list section
#         Then the navigation should be successful to create program list startup screen page
#         When the user clicks on START button
#         Then the user should be navigated to program list selection page
#         And verify accessbility of the page
#         When the user clicks on user account details
#         Then the user should see sign out button available
#         And the user clicks on sign out button
#         Examples:
#             | usercredentials |
#             | CIM_RPE_USDOLEARNER |

 @AccessibilityTestRPE @progListResultAxe @ProdAxe
Scenario Outline: 8. Program list result screen page AXE violations validation
        When the Actor launches the URL "CIM_RPE" from "programManagementURLs"
        When User fills in the user credentials "<usercredentials>" and submit
        Then the login should be successful to CIM RPE MOD landing page
        When the user clicks on add new list button from the program list section
        Then the navigation should be successful to create program list startup screen page
        When the user clicks on START button
        Then the user should be navigated to program list selection page
        When the user select the 'Internal Medicine' , 'Family medicine' and 'Anesthesiology' program speciality
        Then the 'Internal Medicine', 'Family medicine' and 'Anesthesiology' program should be selected
        When the user click on the search button
        And verify accessbility of the page
        When the user clicks on user account details
        Then the user should see sign out button available
        And the user clicks on sign out button
        Examples:
            | usercredentials |
            | CIM_RPE_USDOLEARNER |    

   @AccessibilityTestRPE @rateandCompareAxe
Scenario Outline: 9. Rate and Compare screen page AXE violations validation
        When the Actor launches the URL "CIM_RPE" from "programManagementURLs"
        When User fills in the user credentials "<usercredentials>" and submit
        Then the login should be successful to CIM RPE MOD landing page
        When the user clicks on the Rate and Compare button from the Rate and Compare section
        Then the navigation should be successful to Rate and Compare screen page
        And the breadcrumb component should be available with Rate and Compare as title and other items as links
        And the user should see the page title
        And the user should see the short description text
        And the user should not see the Alert message 
        And the user should see the preference list and program list dropdown
        And the user should see the preference list and progrma list dropdown as mandatory fields
        And the user should see the placeholder text  
        And the user should see the enabled preference and  program list dropdown fields and disabled Rate programs button
        And the user has selected option for both preference and program list dropdown
        And the user should see the enabled Rate programs button
        And verify accessbility of the page
        When the user clicks on user account details
        Then the user should see sign out button available
        And the user clicks on sign out button
      Examples:
            | usercredentials | 
            | CIM_RPE_USDOLEARNER |

            @AccessibilityTestRPE @programRatingListAxe
Scenario Outline: 10. Program Ratings List screen page AXE violations validation
        When the Actor launches the URL "CIM_RPE" from "programManagementURLs"
        When User fills in the user credentials "<usercredentials>" and submit
        Then the login should be successful to CIM RPE MOD landing page
        When the user clicks on the Rate and Compare button from the Rate and Compare section
        Then the navigation should be successful to Rate and Compare screen page
        When the user has selected option for both preference and program list dropdown
        Then the user clicks on the Rate programs button
        And the user should redirect to the program rating list screen
        And verify accessbility of the page
        When the user clicks on user account details
        Then the user should see sign out button available
        And the user clicks on sign out button
      Examples:
            | usercredentials | 
            | CIM_RPE_USDOLEARNER |

      @AccessibilityTestRPE @rateAProgramScreenAxe
Scenario Outline: 11. Rate A program screen page AXE violations validation
        When the Actor launches the URL "CIM_RPE" from "programManagementURLs"
        When User fills in the user credentials "<usercredentials>" and submit
        Then the login should be successful to CIM RPE MOD landing page
        When the user clicks on the Rate and Compare button from the Rate and Compare section
        Then the navigation should be successful to Rate and Compare screen page
        When the user has selected option for both preference and program list dropdown
        Then the user clicks on the Rate programs button
        And the user should redirect to the program rating list screen
        When User clicks on Rate button for a program
        Then User should be redirected to rate programs form screen page
        And verify accessbility of the page
        When the user clicks on user account details
        Then the user should see sign out button available
        And the user clicks on sign out button
      Examples:
            | usercredentials | 
            | CIM_RPE_USDOLEARNER |

@AccessibilityTestRPE @ProgramListEditandOverviewScreenAxe @ProdAxe
Scenario Outline: 12. Program List edit and overview screen page AXE violations validation
        When the Actor launches the URL "CIM_RPE" from "programManagementURLs"
        When User fills in the user credentials "<usercredentials>" and submit
        Then the login should be successful to CIM RPE MOD landing page
        When User clicks on Program list name
        Then User should be redirected to Edit and Overview program list screen
        And verify accessbility of the page
        When the user clicks on user account details
        Then the user should see sign out button available
        And the user clicks on sign out button
      Examples:
            | usercredentials | 
            | CIM_RPE_USDOLEARNER |

            @AccessibilityTestRPE @PreferenceListEditandOverviewScreenAxe
Scenario Outline: 13. Preference List edit and overview screen page AXE violations validation
        When the Actor launches the URL "CIM_RPE" from "programManagementURLs"
        When User fills in the user credentials "<usercredentials>" and submit
        Then the login should be successful to CIM RPE MOD landing page
        When User clicks on preference list name
        Then User should be redirected to Edit and Overview preference list screen
        And verify accessbility of the page
        When the user clicks on user account details
        Then the user should see sign out button available
        And the user clicks on sign out button
      Examples:
            | usercredentials | 
            | CIM_RPE_USDOLEARNER |


            @AccessibilityTestRPE @ProgramComparisonResult
Scenario Outline: 14. Program Comparison Result screen page AXE violations validation
        When the Actor launches the URL "CIM_RPE" from "programManagementURLs"
        When User fills in the user credentials "<usercredentials>" and submit
        Then the login should be successful to CIM RPE MOD landing page
        When the user clicks on the Rate and Compare button from the Rate and Compare section
        Then the navigation should be successful to Rate and Compare screen page
        And User pauses for "5000"
        When the user has selected option for both preference and program list dropdown
        And User pauses for "5000"
        Then the user clicks on the Rate programs button
        And the user should redirect to the program rating list screen
        And User should see the compare button on the top right and other one on the bottom right of the Program list
        When User has selected 3 programs
        And User clicked on the Compare button
        Then User should redirect to the Program comparison result page
        And verify accessbility of the page
        When the user clicks on user account details
        Then the user should see sign out button available
        And the user clicks on sign out button
      Examples:
            | usercredentials | 
            | CIM_RPE_USDOLEARNER |




 
 
           