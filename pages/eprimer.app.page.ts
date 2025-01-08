import { Page, Locator, expect } from '@playwright/test';

export class EprimerAppPage {
    readonly page: Page;
    readonly textArea: Locator;
    readonly validationButton: Locator;
    readonly discouragedWordCount: Locator;
    readonly possibleViolationWordCount: Locator;
    readonly wordCount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textArea = page.getByLabel('Text:');
        this.validationButton = page.getByRole('button', { name: 'Check For E-Prime' });
        this.wordCount = page.locator('#wordCount');
        this.discouragedWordCount = page.locator('#discouragedWordCount');
        this.possibleViolationWordCount = page.locator('#possibleViolationCount');
    }

    async visit(): Promise<void> {
        await this.page.setViewportSize({ width: 1920, height: 1080 });
        await this.page.goto('https://exploratorytestingacademy.com/app/');
    }

    discourageWords: string[] = [
        "be",
        "being",
        "been",
        "is",
        "are",
        "am",
        "was",
        "were",
        "isn't",
        "aren't",
        "wasn't",
        "weren't",
        "ain't",
        "I'm",
    ]; // E-Prime discourage words
    async discourageWordsCheck() {

        await this.textArea.fill(this.discourageWords.join(' '));
        await this.validationButton.click();

        if (parseInt(await this.discouragedWordCount.innerText()) === parseInt(await this.wordCount.innerText())) {
            console.log('Nombre de mots dépréciés: ' + await this.discouragedWordCount.innerText());
            console.log('Nombre de mots total: ' + await this.wordCount.innerText());
            console.log('La vérification des mots dépréciés est validée');
        } else {
            console.log('Nombre de mots dépréciés: ' + await this.discouragedWordCount.innerText());
            console.log('Nombre de mots total: ' + await this.wordCount.innerText());
            console.log('La vérification des mots dépréciés est invalide');
        }
    }

    possibleViolationWords: string[] = [
        "he's",
        "she's",
        "it's",
        "they're",
        "there's",
        "here's",
        "where's",
        "when's",
        "why's",
        "how's",
        "who's",
        "what's",
        "that's",
    ];
    async possibleWordViolationCheck() { 

        await this.textArea.fill(this.possibleViolationWords.join(' '));
        await this.validationButton.click();


        if (parseInt(await this.possibleViolationWordCount.innerText()) === parseInt(await this.wordCount.innerText())) {
            console.log('Nombre de mots en possible violation: ' + await this.possibleViolationWordCount.innerText());
            console.log('Nombre de mots total: ' + await this.wordCount.innerText());
            console.log('La vérification des mots en possible violation est validée');
        } else {
            console.log('Nombre de mots en possible violation: ' + await this.possibleViolationWordCount.innerText());
            console.log('Nombre de mots total: ' + await this.wordCount.innerText());
            console.log('La vérification des mots en possible violation est invalide');
        }
    }




    async globalCountCheck() {
        const text = [...this.discourageWords, ...this.possibleViolationWords].join(' ');
        await this.textArea.fill(text);
        await this.validationButton.click();

        const wordCount = parseInt(await this.wordCount.innerText());
        const discouragedWordCount = parseInt(await this.discouragedWordCount.innerText());
        const possibleViolationWordCount = parseInt(await this.possibleViolationWordCount.innerText());

        if (discouragedWordCount === wordCount) {
            console.log('Nombre de mots dépréciés: ' + discouragedWordCount);
            console.log('Nombre de mots total: ' + wordCount);
            console.log('La vérification des mots dépréciés est validée');
        } else {
            console.log('Nombre de mots dépréciés: ' + discouragedWordCount);
            console.log('Nombre de mots total: ' + wordCount);
            console.log('La vérification des mots dépréciés est invalide');
        }

        if (possibleViolationWordCount === wordCount) {
            console.log('Nombre de mots en possible violation: ' + possibleViolationWordCount);
            console.log('Nombre de mots total: ' + wordCount);
            console.log('La vérification des mots en possible violation est validée');
        } else {
            console.log('Nombre de mots en possible violation: ' + possibleViolationWordCount);
            console.log('Nombre de mots total: ' + wordCount);
            console.log('La vérification des mots en possible violation est invalide');
        }
    }


}