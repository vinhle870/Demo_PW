import { HomePageLocators } from "../locators/home-page-locators";
import { Page, expect } from '@playwright/test';
import { LocatorHandling } from "../utilities/locator-handling";

export class HomePage {

    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Validate The Dealer Name Displayed Correctly on HomePage Heading.
     * @param dealerName
     */
    async validateHeadingContainsText(dealerName: string) {

        const heading = await LocatorHandling.getLocator(this.page, HomePageLocators.heading_DealerName);
        await expect(heading).toContainText(dealerName);
    }
}