import { Page } from "@playwright/test";
import {LoginPages} from "./LoginPages";

export class Login_Actions
{
    loginPage:LoginPages;
    
    constructor()
    {

    }

    async loginWithDealerAcc(username:string, password:string)
    {
        this.loginPage.page.goto("url");
        
        (await this.loginPage.txt_UserName()).fill(username);

        (await this.loginPage.txt_Password()).fill(password);
        
        (await this.loginPage.btn_SignIn()).click();

    }
}