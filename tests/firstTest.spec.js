const {test,expect} = require('@playwright/test');

test('Home Page', async({page}) => {
    // await page.goto('https://demo.automationtesting.in/Index.html')
    // await page.goto('https://testautomationpractice.blogspot.com/')
    await page.goto('https://demoblaze.com/')

    const pageTitle = await page.title();
    console.log('Title of the page is:', pageTitle);

    await expect(page).toHaveTitle('STORE');

    // npx playwright test firstTest.spec.js --project=chromium --headed
    // npx playwright show-report
    //  https://www.youtube.com/watch?v=t2pcqfbtlYo&list=PLUDwpEzHYYLsw33jpra65LIvX1nKWpp7-&index=9

})
