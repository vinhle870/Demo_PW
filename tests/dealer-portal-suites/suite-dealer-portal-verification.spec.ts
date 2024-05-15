import { test, expect } from '@playwright/test';
import { DataHandling}  from '../../src/data-handling/data-handling.ts';
import { LoginPage } from '../../src/pages/login-page';
import { HomePage } from '../../src/pages/home-page';
import {Dealer} from "../../src/objects/dealer";

test.describe('Dealer Portal Account Verification', () => {

    let dealeraccount;

    test.beforeEach(async ({ page }) => {

        console.log("Get Dealer Account Info");
        dealeraccount = new Dealer().getDealerAcc(await DataHandling.readDealerAcc());

        console.log("Log Into Dealer Portal");
        await new LoginPage(page).loginWithDealerAcc(dealeraccount);
    });

    test('TC01: Successfully Login to Dealer Portal', async ({ page }) => {

        console.log("Verify Dealer Login Successfully");
        await new LoginPage(page).validateLoginButtonIsHidden();
        await new HomePage(page).validateHeadingContainsText(dealeraccount['dealername']);
    });

});
