 const{test, expect} = require('@playwright/test')

 test('handleRadio Button',async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Click on Radio button - Male
    await page.locator("//input[@class='form-check-input' and @id='male']").check()
    await page.check("//input[@class='form-check-input' and @id='male']")
    // Assertion to check if the radio button is checked
    await expect(await page.locator("//input[@class='form-check-input' and @id='male']")).toBeChecked()
    // Assertion to check whether the radio button is checked or not
    await expect(await page.locator("//input[@class='form-check-input' and @id='male']").isChecked()).toBeTruthy()

    //Click on Radio button - FeMale
    await expect(await page.locator("//input[@class='form-check-input' and @id='female']").isChecked()).toBeFalsy()

    await page.waitForTimeout(5000)
 }) 