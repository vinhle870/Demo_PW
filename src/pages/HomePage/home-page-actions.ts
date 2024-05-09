import { HomePage } from "./home-page";
import { Page, expect } from '@playwright/test';

export class HomePageActions extends HomePage {

    constructor(page:Page)
    {
        super(page);
    }
    async validateHeadingContainsText( dealerName:string) {

        //
        const heading = await this.baseComponent.getLocator(this.heading_DealerName);
        await expect(heading).toContainText(dealerName);

    }
}