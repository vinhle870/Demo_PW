import { HomePageLocators } from "../locators/home-page-locators";
import { Page, expect } from '@playwright/test';
import { BasePage } from "./base-page";

export class HomePage extends BasePage{

    constructor(page:Page)
    {
        super(page);
    }

    /**
     * Validate The Dealer Name Displayed Correctly on HomePage Heading.
     * @param dealerName
     */
    async validateHeadingContainsText( dealerName:string) {

        const heading = await this.getLocator(HomePageLocators.heading_DealerName);
        await expect(heading).toContainText(dealerName);
    }
}