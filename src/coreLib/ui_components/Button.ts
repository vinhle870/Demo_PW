import {type Locator, type Page } from '@playwright/test';
import { baseComponent } from './baseComponent';

export class Button extends baseComponent
{
   
    
  constructor(page:Page,selector:string)
  {
    super(page,selector);
         
  }

    async click()
    {
      await this.locator.click();
    }



}