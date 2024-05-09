import { test, expect } from '@playwright/test';
import { LoginPageActions } from '../../src/pages/Login/Login_Actions';
import {envReader} from "../../src/dataReader/envReader"
import { HomePageActions } from '../../src/pages/HomePage/home-page-actions';




test('TC01: Successfully Login to Dealer Portal', async ({ page }) => {

    await new LoginPageActions(page).loginWithDealerAcc(await envReader.getDealerAccountLogin());
    const dealerName = "Vinh Le 1";
    await new HomePageActions(page).assertDealerNameOnHeading(dealerName);
    let btn_SignIn = new LoginPageActions(page).baseComponent.getLocator(new LoginPageActions(page).btn_SignIn);
    await expect(btn_SignIn, 'Sign button Should be displayed').toBeVisible();


  //await page.goto(await envReader.getDealerUrl());


 // await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});