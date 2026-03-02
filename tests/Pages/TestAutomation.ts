import { Page } from "@playwright/test";

class TestAutomation {
    private page: Page;
    private sunday = "//input[@class='form-check-input' and @id='sunday']";

    constructor(page: Page) {
        this.page = page;
    }

    async gotoURL() {
        await this.page.goto("https://testautomationpractice.blogspot.com/");
    }

    async checkBoxSundat(){
        await this.page.locator(this.sunday).check();
    }

}

export default TestAutomation;