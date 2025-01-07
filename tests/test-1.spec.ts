import { test } from '@playwright/test';
import { LandingPage } from "../pages/landing.page";
import { AddedToCartPage } from "../pages/added.to.cart.page";
import { VerifyCartPage } from "../pages/verify.cart.page";


test("test-1", async ({ page }) => {

    const landingPage = new LandingPage(page);
    const addToCartPage = new AddedToCartPage(page);
    const verifyCartPage = new VerifyCartPage(page);


    await landingPage.openSearchAndClick("converse");
    await addToCartPage.addToCartButton();
    await verifyCartPage.openCartAndVerify();
});
