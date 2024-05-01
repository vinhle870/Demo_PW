import {type Locator, type Page } from '@playwright/test';

export class baseComponent
{
    page:Page;
    locator:Locator;
    selector:string

  
    constructor(page:Page,selector:string)
    {
      this.page = page;
      this.locator = this.page.locator(selector);
    
    }



    getLocator()
    {
      
      return this.locator;
    }

     


}