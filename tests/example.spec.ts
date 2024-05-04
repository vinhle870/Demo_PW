import { test, expect } from '@playwright/test';
import { Login_Actions } from '../src/pages/Login/Login_Actions';
import {envReader} from "../src/dataReader/envReader"




test('Login to Dealer Portal', async ({ page }) => {
  
    await new Login_Actions(page).loginWithDealerAcc(await envReader.getDealerAccountLogin());
  
   
  //await page.goto(await envReader.getDealerUrl());
  

 // await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});
