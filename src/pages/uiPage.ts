import {type Locator, type Page } from '@playwright/test';
export class uiPage

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


}