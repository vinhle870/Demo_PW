import { Page, expect } from "@playwright/test";
import { LoginPage } from "./login-page";
import { envReader } from "../../dataReader/envReader";

export class LoginPageActions extends LoginPage {
    constructor(page: Page) {
        super(page);
    }
    /**
     * Login to Dealer Portal with dealer account
     * @param dealer
     */
    async loginWithDealerAcc(dealer: object) {

            await this.page.goto(await envReader.getDealerUrl());
            await this.baseComponent.getLocator(this.txt_UserName).fill(dealer['username']);
            await this.baseComponent.getLocator(this.txt_Password).fill(dealer['password']);
            await this.baseComponent.getLocator(this.btn_SignIn).click();
    }

    async validateLoginButtonIsHidden()
    {
        let btn_SignIn = await this.baseComponent.getLocator(this.btn_SignIn);
        await expect(btn_SignIn, 'Login Button Should Be HIDDEN').not.toBeVisible();
    }
}