import { Locator, type Page } from '@playwright/test';
export class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigatetoPage(url: string) {
        await this.page.goto(url);
    }

    /**
  * Find and return the UI Field's locator
  * @param selector
  * @returns Locator
  */
    getLocator(selector: string): Locator {

        return this.page.locator(selector);
    }
}