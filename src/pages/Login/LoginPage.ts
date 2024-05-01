import {type Locator, type Page } from '@playwright/test';
import {TextField} from "../../coreLib/ui_components/TextField";
import {Button} from "../../coreLib/ui_components/Button";
import { uiPage } from '../uiPage';



export class LoginPage extends uiPage{

    constructor(page){
        super(page);
    }

   
txt_UserName  = (selector :string= "//input[@name='_username']") =>  new TextField(this.page,selector);
   
txt_Password = (selector:string=  "//input[@name='_password']") =>  new TextField(this.page,selector);
   
btn_SignIn = (selector:string=  "[type='submit']") =>  new Button(this.page,selector);   

}