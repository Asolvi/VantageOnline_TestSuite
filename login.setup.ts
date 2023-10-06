import { test as setup } from '@playwright/test';
import { storageStatePath } from './playwright.config';
import { appVar } from './appVariables/appVariables'

const username = process.env.USERNAME ?? '';
const password = process.env.PASSWORD ?? '';

setup('Login a user', async ({ page }) => {

    await page.goto(appVar.voUrl);
    await page.locator('id=User_Login_EmailAddress').fill(username)
    await page.locator('id=User_Login_Password').fill(password)
    await page.getByRole('button', { name: 'Sign In' }).click()
    await page.waitForTimeout(5000)
    await page.context().storageState({path: storageStatePath,});
    await page.getByRole('link', { name: 'TeamRefineVO ' }).click();
    await page.getByRole('menuitem', { name: ' Sign Out' }).click();
    await page.close();
});
  /*await page.goto('https://www.meetup.com/login');
  await page.getByLabel('Email').fill(username);
  await page.getByLabel('Password', { exact: true }).fill(password);

  await page.getByRole('button', { name: 'Log in', exact: true }).click();
  await page.waitForURL('https://www.meetup.com/home/**');*/

  
  
