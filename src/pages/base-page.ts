import { test as base } from '@playwright/test';
import { LoginPage } from './login-page';
import { HomePage } from './home-page';

// Declare the types of your fixtures.
type MyFixtures = {
    dealerAccount: object;
    loginPage: LoginPage;
    homePage: HomePage;
};

export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        // Use the fixture value in the test.
        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    }
});

export { expect } from '@playwright/test';