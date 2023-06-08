import { test,expect } from '@playwright/test';
import { CreateCustomerPage } from '../pages/createCustomer'
import { CreateContactPerson } from '../pages/contactPerson'
import { CreateSite } from '../pages/site'
import { testData } from '../utils/excelUtils'
import { appVar } from '../appVariables/appVariables'

test.beforeEach(async ({ page }) => {
    //await page.goto('https://stage.vantage.online/#');
    await page.goto(appVar.voUrl);
    
  });

test('TestSuite_01_VO_Regression_CreateACustomer', async ({ page }) => {

    const Customer = new CreateCustomerPage(page)
    const ContactPerson = new CreateContactPerson(page)
    const Site = new CreateSite(page)

    const CustName =  testData('CreateACustomer','TC_01_VO_Regression_CreateACustomer','CustName')
    const CustAddr1 =  testData('CreateACustomer','TC_01_VO_Regression_CreateACustomer','CustAddr1')
    const CustTown =  testData('CreateACustomer','TC_01_VO_Regression_CreateACustomer','CustTown')
    const CustCounty =  testData('CreateACustomer','TC_01_VO_Regression_CreateACustomer','CustCounty')
    const CustPostCode =  testData('CreateACustomer','TC_01_VO_Regression_CreateACustomer','CustPostCode')
    const CustArea =  testData('CreateACustomer','TC_01_VO_Regression_CreateACustomer','CustArea')
    const CustPhone =  testData('CreateACustomer','TC_01_VO_Regression_CreateACustomer','CustPhone')

    const ContPerTitle =  testData('CreateACustomer','TC_02_VO_Regression_ContactPerson','ContPerTitle')
    const ContPerFirstName =  testData('CreateACustomer','TC_02_VO_Regression_ContactPerson','ContPerFirstName')
    const ContPerLastName =  testData('CreateACustomer','TC_02_VO_Regression_ContactPerson','ContPerLastName')
    const ContPerJobTitle =  testData('CreateACustomer','TC_02_VO_Regression_ContactPerson','ContPerJobTitle')
    const ContPerEmailId =  testData('CreateACustomer','TC_02_VO_Regression_ContactPerson','ContPerEmailId')

    const SiteName =  testData('CreateACustomer','TC_03_VO_Regression_Site','SiteName')
    const SiteAddr1 =  testData('CreateACustomer','TC_03_VO_Regression_Site','SiteAddr1')
    const SiteTown =  testData('CreateACustomer','TC_03_VO_Regression_Site','SiteTown')
    const SitePostCode =  testData('CreateACustomer','TC_03_VO_Regression_Site','SitePostCode')
    
    await test.step("TC_001_VO_CreateACustomer", async()=>
        {
          await Customer.customerCreation(CustName,CustAddr1,CustTown,CustCounty,CustPostCode,CustArea,CustPhone)
          
        })
    await test.step("TC_002_VO_CreateACustomerContactPerson", async()=>
        {
          await ContactPerson.contactPersonCreation(ContPerTitle,ContPerFirstName,ContPerLastName,ContPerJobTitle,ContPerEmailId)
        })
      
    await test.step("TC_003_VO_CreateASite", async()=>
        {
          await Site.siteCreation(SiteName,SiteAddr1,SiteTown,SitePostCode)
        })
       
   
});

