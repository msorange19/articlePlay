import {describe} from "node:test";
import testData from '../config/cred.json';

const {expect, chromium, firefox} = require('@playwright/test');
const fs = require('fs');
import {test} from "../fixtures/initialize.js";

describe('Article Tests', () => {
    test.beforeEach(async ({articleCreate})=>{
        await articleCreate.navigateArticle(testData.base_url);
    })

    test('Verify Create New Article ', async ({articleCreate}) => {
        await articleCreate.createArticleBTNVerify();
        await articleCreate.createArticleData(testData.title + Date.now(),testData.description, testData.body,testData.tags)
        const testBody = await articleCreate.getBody();
        console.log(testBody + "result")

        expect(testBody).toBe(testData.body);
    })


});
