import { BasePage } from '../base-page';



export class LoginPage extends BasePage {

    constructor(page) {
        super(page);
    }
    txt_UserName: string = "//input[@name='_username']";
    txt_Password: string = "//input[@name='_password']";
    btn_SignIn: string = "[type='submit']";
}
