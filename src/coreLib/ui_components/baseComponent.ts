import {type Locator, type Page } from '@playwright/test';

export class baseComponent
{
    page:Page;
    locator:Locator;
    indentifier:string
    
    constructor(indentifier:string)
    {
      this.indentifier = indentifier;
    }

    async getLocator()
    {
      return this.locator;
    }

    


}