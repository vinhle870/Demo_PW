import {type Locator, type Page } from '@playwright/test';
import { baseComponent } from './baseComponent';

export class Dropdown extends baseComponent
{
   
    
    constructor(indentifier:string)
    {
      super(indentifier);
      this.locator = this.page.getByRole('listitem', { name:  this.indentifier});
    }



}