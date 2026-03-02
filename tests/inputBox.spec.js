const{test,expect} = require('@playwright/test')
test('handle inputbox', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //inputBox - Full Name
    await expect(await page.locator("//input[@class='form-control' and @id='name']")).toBeVisible();
    await expect(await page.locator("//input[@class='form-control' and @id='name']")).toBeEmpty();
    await expect(await page.locator("//input[@class='form-control' and @id='name']")).toBeEditable();
    await expect(await page.locator("//input[@class='form-control' and @id='name']")).toBeEnabled();


    await page.locator("//input[@class='form-control' and @id='name']").fill("Jonathan");
    // 0r
    // page.fill("//input[@class='form-control' and @id='name']", "Jonathan")

    await page.waitForTimeout(5000);

})