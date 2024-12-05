import Page from './BasePage'

export default class SubscriptionHomePage extends Page {

    constructor(page_title) {
        super(page_title);
    }

    get elements() {
        return {
    
       sub_logoLink : "(//aamc-ui-header//a)[1]",
       sub_homepageLink: "(//aamc-ui-header//a)[2]",
       cim_homePageText:"//h3[text()='Welcome to Careers in Medicine! ']",
       sub_title: "//h1",
       sub_desc: "//div[contains(text(),'Some')]",
       sub_note: "//p[contains(text(),'Note')]",
       sub_blocks:"//mat-card",
       sub_usmdTitle: "//mat-card-title[contains(text(),'U.S. MD')]",
       sub_usdoTitle: "//mat-card-title[contains(text(),'U.S. DO')]",
       sub_advisorTitle: "//mat-card-title[contains(text(),'ADVISORS:')]",
       sub_otherTitle:"//mat-card-title[contains(text(),'OTHER')]",
       //usmd_tile: "(//mat-card)[1]",
       tile1_homePageLink: "(//mat-card)[1]//a[text()='CiM homepage']",
       tile1_liaisonLink: "(//mat-card)[1]//a[text()='CiM liaison']",
       liasion_homePage:"//h1[contains(text(),'Find your')]",
       tile2_liaisonLink: "(//mat-card)[2]//a[text()='CiM liaison']",
       tile3_liaisonLink: "(//mat-card)[3]//a[text()='CiM liaison']",
       usdo_tile: "(//mat-card)[2]",
       advisors_tile: "(//mat-card)[3]",
       usmd_subtitle: "(//mat-card-subtitle)[1]",
       usdo_subtitle: "(//mat-card-subtitle)[2]",
       advisors_subtitle: "(//mat-card-subtitle)[3]",
       other_subtitle: "(//mat-card-subtitle)[4]",
       usmd_tileDesc: "(//mat-card)[1]//p",
       usdo_tileDesc: "(//mat-card)[2]//p",
       advisor_tileDesc: "(//mat-card)[3]//p",
       other_title: "//mat-card-title[contains(text(),'OTHER')]",
       other_tileDesc: "(//mat-card)[4]//p",
       dropdown_label: "//div[text()='Who are you?']",
       roles_dropdown: "//mat-select",
       dropdown_defaultText: "//span[text()=' Choose an option ']",
       Canadian_advisor: "//span[text()='Canadian Advisor']",
       Canadian_student: "//span[text()=' Canadian Student/Graduate ']",
       Internationa_advisor: "//span[text()=' International Advisor ']",
       International_student: "//span[text()=' International Student/Graduate ']",
       School_dropdownLabel: "//div[text()='Medical School']",
       School_defaultText: "//input[@id='School']",
       Canadian_school: "//span[contains(text(),'McMaster University')]",
       canadian_accessMsg: "//div[@id='result']",
       Canadian_resultLink: "//div[@id='result']//a",
       Country: "//span[text()=' Angola ']",
       Int_school: "//span[text()=' Universidade Agostinho Neto Faculdade de Medicina ']",
       Sub_title: "//span[text()='Subscription required']",
       Sub_msg: "//div[@aria-controls='result']",
       Purchase_sub: "//a[text()=' individual subscription']",
       Create_account: "//a[text()='create an account']",
        
    }
}
}

const SubscriptionHome_page = new SubscriptionHomePage();
exports.SubscriptionHomePageElements = SubscriptionHome_page.elements;