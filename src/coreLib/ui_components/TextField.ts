import {type Locator, type Page } from '@playwright/test';
import { baseComponent } from './baseComponent';

export class TextField extends baseComponent
{
   
    
    constructor(indentifier:string)
    {
      super(indentifier);
      this.locator = this.page.getByRole('textbox', { name:  this.indentifier});
    }

    async fill(value:string)
    {
        (await this.getLocator()).fill(value);
    }



}