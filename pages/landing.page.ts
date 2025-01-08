import { Page } from '@playwright/test';

export class LandingPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async visit() {
        await this.page.setViewportSize({ width: 1920, height: 1080 });
        await this.page.goto('https://www.decathlon.fr');
        await this.page.getByRole('button', { name: 'Refuser' }).click();
    }
}