import {type Locator, type Page } from '@playwright/test';
import {TextField} from "../../coreLib/ui_components/TextField";
import {Button} from "../../coreLib/ui_components/Button";
import { uiPage } from '../uiPage';



export class LoginPages extends uiPage{

   
    async txt_UserName(identier:string="_username"  ) {

        return new TextField(identier); 
        
    }   

    async txt_Password(identier:string="_password")
    {
        return new TextField(identier);
    }

     async btn_SignIn(identier:string="submit")
    {
        
       return new Button(identier);
    }



    

}