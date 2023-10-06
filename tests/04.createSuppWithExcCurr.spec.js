import { test,expect } from '@playwright/test';
import { CreateSuppWithExchanCurrPage } from '../pages/createSuppWithExchanCurr'
import { testData } from '../utils/excelUtils'
import { randomNo } from '../utils/randomNo'
import { appVar } from '../appVariables/appVariables'
import { releaseNo } from '../utils/releaseNo'

test.beforeEach(async ({ page }) => {
     await page.goto(appVar.voUrl);    
  });

test('TestSuite_04_VO_Regression_CreateSuppWithExcCurr', async ({ page }) => {

    const SuppWithExcCurr = new CreateSuppWithExchanCurrPage(page)
       
    const rand = randomNo()
    const rel = releaseNo()
          
    const SuppName =  testData('CreateSuppWithExcCurr','TC_01_VO_Regression_CreateSuppWithExcCurr','SuppName')
    const SuppPhone =  testData('CreateSuppWithExcCurr','TC_01_VO_Regression_CreateSuppWithExcCurr','SuppPhone')
    const SuppAddr1 =  testData('CreateSuppWithExcCurr','TC_01_VO_Regression_CreateSuppWithExcCurr','SuppAddr1')
    const SuppTown =  testData('CreateSuppWithExcCurr','TC_01_VO_Regression_CreateSuppWithExcCurr','SuppTown')
    const SuppPostCode =  testData('CreateSuppWithExcCurr','TC_01_VO_Regression_CreateSuppWithExcCurr','SuppPostCode')
    const SuppCountry =  testData('CreateSuppWithExcCurr','TC_01_VO_Regression_CreateSuppWithExcCurr','SuppCountry')
    const SuppTaxCode =  testData('CreateSuppWithExcCurr','TC_01_VO_Regression_CreateSuppWithExcCurr','SuppTaxCode')
    const SuppCurrency =  testData('CreateSuppWithExcCurr','TC_01_VO_Regression_CreateSuppWithExcCurr','SuppCurrency')
    //const SuppPriceBokItem =  testData('CreateSuppWithExcCurr','TC_01_VO_Regression_CreateSuppWithExcCurr','SuppPriceBokItem')
        
    await test.step("TC_01_VO_Regression_CreateSuppWithExcCurr", async()=>
        {
          //console.log('The global ItemName created is ' + globalItem);
          await SuppWithExcCurr.SuppWithExcCurrCreation(rel+SuppName+rand,SuppPhone,SuppAddr1,SuppTown,SuppPostCode,SuppCountry,SuppTaxCode,SuppCurrency,globalItem)
                   
        })

    });

