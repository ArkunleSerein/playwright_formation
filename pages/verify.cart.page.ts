import { Page } from '@playwright/test';

export class VerifyCartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openCartAndVerify() {
        await this.page.getByRole('link', { name: 'Visualiser mon panier' }).click();
    }
}