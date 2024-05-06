import { Page, expect } from "@playwright/test";
import { LoginPage } from "./login-page";
import { envReader } from "../../dataReader/envReader";

export class Login_Actions extends LoginPage {
    constructor(page: Page) {
        super(page);
    }
    /**
     * Login to Dealer Portal with dealer account
     * @param dealer
     */
    async loginWithDealerAcc(dealer: object) {
        try {
            await this.page.goto(await envReader.getDealerUrl());
            await this.baseComponent.getLocator(this.txt_UserName).fill(dealer['username']);
            await this.baseComponent.getLocator(this.txt_Password).fill(dealer['password']);
            await this.baseComponent.getLocator(this.btn_SignIn).click();

        } catch (error) {
            console.error(error.message);
        }
    }
}