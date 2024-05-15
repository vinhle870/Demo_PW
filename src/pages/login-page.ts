import { Page, expect } from "@playwright/test";
import { LoginPageLocators } from "../locators/login-page-locators";
import { BasePage } from "./base-page";


export class LoginPage extends BasePage{
    constructor(page: Page) {
        super(page);
    }
    /**
     * Login to Dealer Portal with dealer account
     * @param dealer
     */
    async loginWithDealerAcc(dealer: object) {

            await this.page.goto(dealer['Url']);
            await this.getLocator(LoginPageLocators.txt_UserName).fill(dealer['UserName']);
            await this.getLocator(LoginPageLocators.txt_Password).fill(dealer['PassWord']);
            await this.getLocator(LoginPageLocators.btn_SignIn).click();
    }

    /**
     * Validate Login Button Is Hidden
     */
    async validateLoginButtonIsHidden()
    {
        let btn_SignIn = await this.getLocator(LoginPageLocators.btn_SignIn);
        await expect(btn_SignIn, 'Login Button Should Be HIDDEN').not.toBeVisible();
    }
}