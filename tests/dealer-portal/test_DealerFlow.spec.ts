import { test, expect } from '@playwright/test';
import {envReader} from "../../src/dataReader/envReader"
import { LoginPageActions } from '../../src/pages/Login/login-page-actions';
import { HomePageActions } from '../../src/pages/HomePage/home-page-actions';

test('TC01: Successfully Login to Dealer Portal', async ({ page }) => {

    //Get Daler Account Info
    let dealeraccount = await envReader.getDealerAccountLogin();
    console.log("Dealer account: "+dealeraccount['username'] +" - "+dealeraccount['password'])

    //Log Into Dealer Portal
    await new LoginPageActions(page).loginWithDealerAcc(dealeraccount);

    //Verify Successfully Login
    await new LoginPageActions(page).validateLoginButtonIsHidden();
    await new HomePageActions(page).validateHeadingContainsText(dealeraccount['DealerName']);
});