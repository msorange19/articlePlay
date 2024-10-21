import { Page, Locator } from "@playwright/test";
import path from "node:path";
const fs = require('fs');


export class LogInPage{

    constructor(page){
        this.page = page;
        this.userNameInputField = 'input[placeholder="Email"]';
        this.passInputField = 'input[placeholder="Password"]';
        this.loginButton = 'button[type="submit"]';
        this.errorMessage = '.error-messages';
    }

    async logInNavigation(url){
        await this.page.goto(url);
    }

    async verifyUserCred(userName, userPass){
        //await this.page.pause()
        await this.page.fill(this.userNameInputField,userName);
        await this.page.fill(this.passInputField,userPass);
        await this.page.click(this.loginButton);




    }

    async LoginErrorMessage(){
        return this.page.innerText(this.errorMessage);
    }

}