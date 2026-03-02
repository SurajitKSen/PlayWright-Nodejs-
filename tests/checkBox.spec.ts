import { test, expect } from "@playwright/test";
import TestAutomation from "./Pages/TestAutomation";



test("Handle checkBox", async ({ page }) => {
    const TA = new TestAutomation(page);
    await TA.gotoURL(); // Fix: Added 'await' to ensure proper async handling
    // await page.waitForTimeout(5000);
    await TA.checkBoxSundat();

   //  //Click on Single Checkbox
   //  //Sunday
   //  await page.locator("//input[@class='form-check-input' and @id='sunday']").click()
   //  // Or
   //  await page.click("//input[@class='form-check-input' and @id='sunday']")

   //  expect(await page.locator("//input[@class='form-check-input' and @id='sunday']")).toBeChecked()


    // https://www.youtube.com/watch?v=eUBTS7OCDeQ&list=PLUDwpEzHYYLsw33jpra65LIvX1nKWpp7-&index=10s
 });

 test.skip('launch url',async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForTimeout(5000);
 })
