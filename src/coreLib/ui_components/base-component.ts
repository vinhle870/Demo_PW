import { type Locator, type Page } from '@playwright/test';

export class BaseComponent {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Find and return the UI Field's locator
   * @param selector
   * @returns Locator
   */
  getLocator(selector: string): Locator {

    return this.page.locator(selector);
  }
}