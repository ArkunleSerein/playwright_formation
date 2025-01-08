import { test } from '@playwright/test';
import { EprimerAppPage } from '../pages/eprimer.app.page';

test("Se rends sur eprimer app", async ({ page }) => {

    const eprimerAppPage = new EprimerAppPage(page);

    await eprimerAppPage.visit();
});

test("Test du discourageWords", async ({ page }) => {

    const eprimerAppPage = new EprimerAppPage(page);

    await eprimerAppPage.visit();
    await eprimerAppPage.discourageWordsCheck();
    
});

test("Test du possibleWordViolation cas non-passant", async ({ page }) => {

    const eprimerAppPage = new EprimerAppPage(page);

    await eprimerAppPage.visit();
    await eprimerAppPage.possibleWordViolationCheck();

});

test("Test du globalCountCheck", async ({ page }) => {

    const eprimerAppPage = new EprimerAppPage(page);

    await eprimerAppPage.visit();
    await eprimerAppPage.globalCountCheck();

});