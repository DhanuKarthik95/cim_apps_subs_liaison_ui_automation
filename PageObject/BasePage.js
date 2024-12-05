export default class BasePage {
    
    constructor(page_title) {
        this.page_title = page_title;
    }

    open(path) {
        console.log("Launching Page :",this.page_title)
        browser.url(path)
    }

    /*openPDWS(path) {
        console.log("Launching Page :",this.page_title)
        browser.url(path)
    }

    openPDWSStage(path) {
        console.log("Launching Page :",this.page_title)
        browser.url(path)
    }*/
    openCIMRPE(path){
        console.log("Launching Page :",this.page_title)
        browser.url(path)
    }
}