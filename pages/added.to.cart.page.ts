import { Page } from '@playwright/test';

export class AddedToCartPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
        
    }
    async addToCartButton() {
        var test = await this.page.locator("li.inStock").first().isVisible();

        await this.page.locator('.dpb-models > .vtmn-relative > .vtmn-absolute').first().click();
        while (test == false) {
            await this.page.getByRole('combobox', { name: 'Sélectionnez une taille' }).click();
            test = await this.page.locator("li.inStock").first().isVisible();
        }  
        await this.page.locator("li.inStock").first().click();
        await this.page.getByRole('button', { name: 'Ajouter au panier' }).scrollIntoViewIfNeeded();
        await this.page.getByRole('button', { name: 'Ajouter au panier' }).click();
    }
}