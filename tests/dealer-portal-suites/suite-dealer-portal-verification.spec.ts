import { TestBase } from '../test-base'
import { test } from '../../src/pages/base-page';

test.describe('Dealer Portal Account Verification', () => {
    let dealerAccount;

    test.beforeEach(async ({ loginPage }) => {

        console.log('Get Dealer Account Info');
        dealerAccount = TestBase.getDealerAccount();
        console.log('Log Into Dealer Portal');
        await loginPage.loginWithDealerAcc(dealerAccount);
    });

    test('TC01: Successfully Login to Dealer Portal', async ({ loginPage, homePage }) => {

        console.log('Verify Dealer Login Successfully');
        await loginPage.validateLoginButtonIsHidden();
        await homePage.validateHeadingContainsText(dealerAccount['DealerName']);
    });
});
