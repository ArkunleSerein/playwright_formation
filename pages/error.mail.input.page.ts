import { Page } from '@playwright/test';

export class ErrorMailInputPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
        
    }
    async errorMailInput() {

        await this.page.getByRole('textbox', { name: 'Email' }).fill('aaa');
    }
}