import { Page } from '@playwright/test';

export class FindItemPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async searchAndClick(item: string) {
        await this.page.getByPlaceholder('Rechercher un produit, un').fill(item);
        await this.page.getByPlaceholder('Rechercher un produit, un').press('Enter');
    }
}