import { HomePage } from "./home-page";
import { Page, expect } from '@playwright/test';

export class HomePageActions extends HomePage {

    constructor(page:Page)
    {
        super(page);
    }
    async assertDealerNameOnHeading( dealerName:string) {

        const actualName = await this.baseComponent.getLocator(this.heading_DealerName).textContent();

        expect(actualName).toContain(dealerName);

    }
}