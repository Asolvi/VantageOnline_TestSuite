import { test,expect } from '@playwright/test';
import { CreateSupplierPage } from '../pages/createSupplier'
import { CreateSupplierContactPerson } from '../pages/supplierContactPerson'
import { testData } from '../utils/excelUtils'
import { writeExcelTestData } from '../utils/writeExcelUtils'

import { appVar } from '../appVariables/appVariables'

test.beforeEach(async ({ page }) => {
     await page.goto(appVar.voUrl);
    
  });

test('TestSuite_02_VO_Regression_CreateASupplier', async ({ page }) => {

    const Supplier = new CreateSupplierPage(page)
    const SupplierContactPerson = new CreateSupplierContactPerson(page)
    
              
    const SuppName =  testData('CreateASupplier','TC_01_VO_Regression_CreateASupplier','SuppName')
    const SuppAddr1 =  testData('CreateASupplier','TC_01_VO_Regression_CreateASupplier','SuppAddr1')
    const SuppTown =  testData('CreateASupplier','TC_01_VO_Regression_CreateASupplier','SuppTown')
    const SuppPostCode =  testData('CreateASupplier','TC_01_VO_Regression_CreateASupplier','SuppPostCode')
    const SuppCountry =  testData('CreateASupplier','TC_01_VO_Regression_CreateASupplier','SuppCountry')
    const SuppDelivery =  testData('CreateASupplier','TC_01_VO_Regression_CreateASupplier','SuppDelivery')
    const SuppCurrency =  testData('CreateASupplier','TC_01_VO_Regression_CreateASupplier','SuppCurrency')

    const ContPerFirstName =  testData('CreateASupplier','TC_02_VO_Regression_ContactPerson','ContPerFirstName')
    const ContPerLastName =  testData('CreateASupplier','TC_02_VO_Regression_ContactPerson','ContPerLastName')
    const ContPerMobile =  testData('CreateASupplier','TC_02_VO_Regression_ContactPerson','ContPerMobile')

     
    
    await test.step("TC_001_VO_CreateASupplier", async()=>
        {
          await Supplier.supplierCreation(SuppName,SuppAddr1,SuppTown,SuppPostCode,SuppCountry,SuppDelivery,SuppCurrency)
          //console.log("The supplier full Name is " + Supplier.SuppFullName);
          //const supplierFullName = Supplier.SuppFullName
          //const supplierFullName= Supplier.SuppFullName
          //console.log("The supplier full Name is " + supplierFullName);
          //writeExcelTestData('CreateItems','TC_01_VO_Regression_CreateAConsumItem','ItemSupp',supplierFullName)
                    
        })

    await test.step("TC_002_VO_CreateASupplierContactPerson", async()=>
        {
          await SupplierContactPerson.supplierContactPersonCreation(ContPerFirstName,ContPerLastName,ContPerMobile)
        })
    
            
});

