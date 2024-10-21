import {test} from '../fixtures/initialize.js'
import {describe, beforeEach} from "node:test";
//const testData = JSON.parse(JSON.stringify(require('../config/cred.json')))
import testData from '../config/cred.json';

describe("signup Test", ()=>{

    test.beforeEach(async ({loginCredObj})=>{
        await loginCredObj.logInNavigation(testData.log_url);
    })

    test("verify signup url Test", async({loginCredObj,page})=>{
        await loginCredObj.verifyUserCred(testData.email,testData.password);
        await page.waitForSelector('text=Your Feed');
        const sessionStorage = await page.context().storageState({ path: 'state.json' });
        console.log(sessionStorage);
    })
})