export class ArticlePage {
    constructor(page) {
        this.page = page;
        this.createArticleBTN = '//app-layout-header/nav[1]/div[1]/ul[1]/li[2]/a[1]';
        this.title = 'input[placeholder ="Article Title"]';
        this.description = 'input[formcontrolname ="description"]';
        this.body = '//form/fieldset/fieldset[3]/textarea';
        this.tags = 'input[placeholder="Enter tags"]';
        this.publishBtn = 'button[type="button"]';

    }

    async navigateArticle(url) {
        await this.page.goto(url);
        await this.page.waitForLoadState('networkidle'); // Wait for the network to be idle

    }

    async createArticleBTNVerify() {
        await this.page.pause()
        await this.page.click(this.createArticleBTN);
    }

    async createArticleData(title, description, body, tags) {

    }
}