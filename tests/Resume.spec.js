const {test,expect} = require('@playwright/test')

 test('Handle checkBox', async ({page}) =>{
    await page.goto("https://ct2.cpiworld.com/")

    await page.locator("//input[@id='ctl00_cph1_txtUserID']").click()
    await page.locator("//input[@id='ctl00_cph1_txtUserID']").fill("sirsilla.sunil043@gmail.com");

    await page.locator("//input[@id='ctl00_cph1_txtPassword']").click()
    await page.locator("//input[@id='ctl00_cph1_txtPassword']").fill("Momentum!10");


})
