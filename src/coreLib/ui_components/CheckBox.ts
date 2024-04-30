import {type Locator, type Page } from '@playwright/test';
import { baseComponent } from './baseComponent';

export class CheckBox extends baseComponent
{
   
    
    constructor(indentifier:string)
    {
      super(indentifier);
      this.locator = this.page.getByRole('checkbox', { name:  this.indentifier});
    }



}