import { Page } from "@playwright/test";
import {LoginPage} from "./LoginPage";
import { Dealer } from "../../businessEntities/Dealer";
import {envReader} from "../../dataReader/envReader";

export class Login_Actions
{
    loginPage:LoginPage;
    
    constructor(page:Page)
    {
        
        this.loginPage = new LoginPage(page);
    }

    async loginWithDealerAcc(dealer:Dealer)
    {
        await this.loginPage.page.goto(await envReader.getDealerUrl());
        
        await this.loginPage.txt_UserName().fillText(dealer.username);
        
        await this.loginPage.txt_Password().fillText(dealer.password);
        
        await this.loginPage.btn_SignIn().click();

      

    }
}