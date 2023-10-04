import {By, until} from 'selenium-webdriver';
import {BasePage} from './basePage';
export class uhfNav extends BasePage {
    //////////////Selectors////////////

    /////////////Top Header Items////////
    homeImg: By = By.id('img_comp-jut1hwuv');
    homeBtn: By = By.xpath('(//a[@class="j7pOnl"])[1]');
    loveBtn: By = By.xpath('(//a[@class="j7pOnl"])[2]');
    rehomeBtn: By = By.xpath('(//a[@class="j7pOnl"])[3]');
    amazonBtn: By = By.xpath('(//a[@class="oRtuWN"])[1]')
    facebookBtn: By = By.xpath('(//a[@class="oRtuWN"])[2]')
    instaBtn: By = By.xpath('(//a[@class="oRtuWN"])[3]')
    ////////////Nav Categories//////////
    homeNav: By = By.xpath('(//a[@class="lY3Nwh"])[1]')
    lostNav: By = By.xpath('(//a[@class="lY3Nwh"])[2]')
    adoptNav: By = By.xpath('(//a[@class="lY3Nwh"])[3]')
    volunteerNav: By = By.xpath('(//a[@class="lY3Nwh"])[4]')
    donateNav: By = By.xpath('(//a[@class="lY3Nwh"])[5]')
    employmentNav: By = By.xpath('(//a[@class="lY3Nwh"])[6]')
    faqNav: By = By.xpath('(//a[@class="lY3Nwh"])[7]')
    licenseNav: By = By.xpath('(//a[@class="lY3Nwh"])[8]')
    ////moreBtn: By = By.  NEED TO FIGURE THIS ELEMENT 

    ///////////Nav Sub Categories///////

    //////////Methods//////////////////

    constructor () {
        super ({url: "https://www.suvas.org/"})
    };

    async openPage(){
        await this.navigate();
        await this.driver.manage().window().maximize();
        await this.getElement(this.homeImg);
    };

    async clickHome(){
        await this.getElement(this.homeBtn);
        await this.click(this.homeBtn);
    };

    async checkUrl(){
        let currentURL = await this.driver.getCurrentUrl();
        return
    }

};