import { BasePage } from '../base-page';



export class LoginPage extends BasePage {

    constructor(page) {
        super(page);
    }
    txt_UserName: string = "//input[@name='_username1']";
    txt_Password: string = "//input[@name='_password']";
    btn_SignIn: string = "[type='submit']";
}
