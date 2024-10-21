import  { test as base, firefox } from '@playwright/test' ;
import { LogInPage } from '../pages/LogInPage.spec.js';
import {ArticlePage} from '../pages/ArticlePage.spec.js';

export const test = base.extend({
    loginCredObj : async ({ page}, use) =>{
        await use(new LogInPage(page));
    },

    articleCreate : async ({ page }, use) =>{

        const articlePage = new ArticlePage(page);
        await articlePage.navigateArticle('https://conduit.bondaracademy.com');
        await use(articlePage);
    }
})