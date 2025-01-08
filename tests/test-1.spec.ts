import { test } from '@playwright/test';
import { LandingPage } from "../pages/landing.page";
import { FindItemPage } from "../pages/find.item.page";
import { AddedToCartPage } from "../pages/added.to.cart.page";
import { VerifyCartPage } from "../pages/verify.cart.page";
import { CheckoutPage } from "../pages/checkout.page";


test("test-1", async ({ page }) => {

    const landingPage = new LandingPage(page);
    const findItemPage = new FindItemPage(page);
    const addToCartPage = new AddedToCartPage(page);
    const verifyCartPage = new VerifyCartPage(page);
    const checkoutPage = new CheckoutPage(page);


    await landingPage.visit();
    await findItemPage.searchAndClick("t-shirt");
    await addToCartPage.addToCartButton();
    await verifyCartPage.openCartAndVerify();
    await checkoutPage.checkoutClick();
});
