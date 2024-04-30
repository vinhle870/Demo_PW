import {type Locator, type Page } from '@playwright/test';
import { baseComponent } from './baseComponent';

export class Button extends baseComponent
{
   
    
    constructor(indentifier:string)
    {
      super(indentifier);
      this.locator = this.page.getByRole('button', { name:  this.indentifier});
    }

    async click()
    {
      (await this.getLocator()).click();
    }



}