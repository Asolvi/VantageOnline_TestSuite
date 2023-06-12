import { Browser,Page, expect,chromium } from '@playwright/test';
// import { appVar } from '../VantageOnlineAutomationNew/appVariables/appVariables'
import { appVar } from './appVariables/appVariables'

const username = process.env.MEETUP_USERNAME ?? '';
const password = process.env.MEETUP_PASSWORD ?? '';

async function globalSetup()
{
    const browser:Browser = await chromium.launch({headless : false});
    const context = await browser.newContext();
    const page:Page = await context.newPage();

    //await page.goto('https://stage.vantage.online/#');
    await page.goto(appVar.voUrl);
    await page.locator('id=User_Login_EmailAddress').fill(username)
    await page.locator('id=User_Login_Password').fill(password)
    await page.getByRole('button', { name: 'Sign In' }).click()
    await page.waitForTimeout(5000)
    await page.context().storageState({path: "./LoginAuth.json"});
    //await page.getByRole('link', { name: 'Rajan [Stage QA - C/P (Demo)] ' }).click();
    await page.getByRole('link', { name: 'TeamRefineVO ' }).click();
    //await page.pause();
    await page.getByRole('menuitem', { name: ' Sign Out' }).click();
    await page.close();
   }

export default globalSetup;
