import { Page, type Locator } from '@playwright/test';

export class AddedToCartPage {
    readonly page: Page;
    readonly listStock: Locator;
    readonly firstChildCard: Locator;
    readonly cartButton: Locator;
    readonly cartLink: Locator;
    readonly cartHeading: Locator;
    readonly sizeItem: Locator;

    constructor(page: Page) {
        this.page = page;
        this.listStock = page.locator("li.inStock");
        this.firstChildCard = page.locator('.dpb-models > .vtmn-relative > .vtmn-absolute'); 
        this.cartButton = page.getByRole('button', { name: 'Ajouter au panier' });
        this.cartLink = page.getByRole('link', { name: 'Visualiser mon panier' });
        this.cartHeading = page.getByRole('heading', { name: 'Panier' });
        this.sizeItem = page.getByRole('combobox', { name: 'Sélectionnez une taille' });
    }

    async addToCartButton() {
        var test = await this.listStock.first().isVisible();

        await this.firstChildCard.first().click();
        while (test == false) {
            await this.sizeItem.click();
            test = await this.listStock.first().isVisible();
        }
        await this.listStock.first().click();
        await this.cartButton.scrollIntoViewIfNeeded();
        await this.cartButton.click();
        // await this.cartLink.isVisible();
        // await this.cartLink.click();
        // await this.cartHeading.isVisible();
    }
}
