import {describe} from "node:test";
import testData from '../config/cred.json';

const {expect, chromium, firefox} = require('@playwright/test');
const fs = require('fs');
import {test} from "../fixtures/initialize.js";

describe('Article Tests', () => {
    let context = '';

    test.beforeAll(async () => {
        const browser = await chromium.launch();

        if (fs.existsSync('state.json')) {
            context = await browser.newContext({storageState: 'state.json'});

        } else {
            console.log('token is missing');
        }
    });



    test('Verify Create New Article Button on Navbar', async ({articleCreate}) => {
        await articleCreate.createArticleBTNVerify();
        await articleCreate.createArticleData(testData.title,testData.description, testData.body,testData.tags)

    });


});
