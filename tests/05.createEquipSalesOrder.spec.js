import { test,expect } from '@playwright/test';
import { CreateEquipSalesOrdPage } from '../pages/createEquipSalesOrd'
import { testData } from '../utils/excelUtils'
import { randomNo } from '../utils/randomNo'
import { appVar } from '../appVariables/appVariables'

test.beforeEach(async ({ page }) => {
     await page.goto(appVar.voUrl);    
  });

test.skip('TestSuite_05_VO_Regression_CreateEquipSalesOrder', async ({ page }) => {

    const EquipSalesOrd = new CreateEquipSalesOrdPage(page)
       
    const rand = randomNo()
          
    const SalesOrdType =  testData('CreateEquipSalesOrd','TC_01_VO_Regression_CreateEquipSalesOrd','SalesOrdType')
    
        
    await test.step("TC_01_VO_Regression_CreateEquipSalesOrd", async()=>
        {
          await EquipSalesOrd.CustomerSearch()
          await EquipSalesOrd.custTableVerify()
          await EquipSalesOrd.EquipSalesOrder(SalesOrdType)
                   
        })

    });

