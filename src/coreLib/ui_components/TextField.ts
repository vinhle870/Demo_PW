import {type Locator, type Page } from '@playwright/test';
import { baseComponent } from './baseComponent';

export class TextField extends baseComponent
{
   
    
    constructor(page:Page,selector:string)
    {
      super(page,selector);
           
    }

    async clearText()
    {

    }

    async fillText(text:string)
    {
      await this.locator.fill(text);
      console
    }

  }