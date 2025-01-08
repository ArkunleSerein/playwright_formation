import { test } from '@playwright/test';
import { LandingPage } from "../pages/landing.page";
import { ErrorMailInputPage } from '../pages/error.mail.input.page';

test("test-2", async ({ page }) => {

    const landingPage = new LandingPage(page);
    const errorMailInputPage = new ErrorMailInputPage(page);

    await landingPage.visit();
    await errorMailInputPage.errorMailInput();
});
