import {type Locator, type Page } from '@playwright/test';
export class BasePage

{
    readonly page:Page;
    constructor(page:Page)
    {
        this.page = page;
    }

    async navigatetoPage(url:string)
    {
        await this.page.goto(url);
    }

    async getLocator(selector:string):Promise<Locator>{
        return await this.page.locator(selector);

    }


}