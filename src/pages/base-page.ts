import { type Page } from '@playwright/test';
import { BaseComponent } from '../coreLib/ui_components/base-component';
export class BasePage {
    page: Page;
    baseComponent: BaseComponent;

    constructor(page: Page) {
        this.page = page;
        this.baseComponent = new BaseComponent(page);
    }

    async navigatetoPage(url: string) {
        await this.baseComponent.page.goto(url);
    }
}