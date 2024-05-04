import { Page, expect } from "@playwright/test";
import {LoginPage} from "./login-page";
import { Dealer } from "../../businessEntities/dealer";
import {envReader} from "../../dataReader/envReader";
import { LogHandler } from "../../coreLib/utilities/log-handler";
import { LogLevel } from "../../enum/loglevel";

export class Login_Actions extends LoginPage
{
    constructor(page:Page)
    {
       super(page); 
    }
   /**
    * Login to Dealer Portal with dealer account
    * @param dealer 
    */
    async loginWithDealerAcc(dealer:Dealer)
    {
        try{
            await this.page.goto(await envReader.getDealerUrl());
        
            await (await this.getLocator(this.txt_UserName)).fill(dealer.username);
            
            await (await this.getLocator(this.txt_Password)).fill(dealer.password);
            
            (await this.getLocator(this.btn_SignIn)).click();
        }
        catch(error)
        {
            await LogHandler.printlog(error.message, LogLevel.ERROR);
        }
       

      

    }
}