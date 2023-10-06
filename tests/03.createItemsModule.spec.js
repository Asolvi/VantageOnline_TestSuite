import { test,expect } from '@playwright/test';
import { CreateItemPage } from '../pages/createItem'
import { CreateEquipmentPage } from '../pages/createEquipment'
import { CreateSupplierPage } from '../pages/createSupplier'
import { testData } from '../utils/excelUtils'
import { randomNo } from '../utils/randomNo'
import { appVar } from '../appVariables/appVariables'
import { releaseNo } from '../utils/releaseNo'

test.beforeEach(async ({ page }) => {
     await page.goto(appVar.voUrl);
    
  });

test('TestSuite_03_VO_Regression_CreateItems', async ({ page }) => {

    const Item = new CreateItemPage(page)
    const Equipment = new CreateEquipmentPage(page)
    const rand = randomNo()
    const rel = releaseNo()

             
    const ItemPart1 =  testData('CreateItems','TC_01_VO_Regression_CreateAConsumItem','ItemPart')
    const ItemDesc1 =  testData('CreateItems','TC_01_VO_Regression_CreateAConsumItem','ItemDesc')
    const ItemManf1 =  testData('CreateItems','TC_01_VO_Regression_CreateAConsumItem','ItemManf')
    const ItemCategory1 =  testData('CreateItems','TC_01_VO_Regression_CreateAConsumItem','ItemCategory')
    //const ItemSupp1 =  testData('CreateItems','TC_01_VO_Regression_CreateAConsumItem','ItemSupp')
    //const ItemSupp1 =  supplierFullName
    const ItemCost1 =  testData('CreateItems','TC_01_VO_Regression_CreateAConsumItem','ItemCost')
    const ItemPrice1 =  testData('CreateItems','TC_01_VO_Regression_CreateAConsumItem','ItemPrice')
    const ItemTonerType1 =  testData('CreateItems','TC_01_VO_Regression_CreateAConsumItem','ItemTonerType')

    const ItemPart2 =  testData('CreateItems','TC_02_VO_Regression_CreateAPart','ItemPart')
    const ItemDesc2 =  testData('CreateItems','TC_02_VO_Regression_CreateAPart','ItemDesc')
    const ItemManf2 =  testData('CreateItems','TC_02_VO_Regression_CreateAPart','ItemManf')
    const ItemCategory2 =  testData('CreateItems','TC_02_VO_Regression_CreateAPart','ItemCategory')
    //const ItemSupp2 =  testData('CreateItems','TC_02_VO_Regression_CreateAPart','ItemSupp')
    const ItemCost2 =  testData('CreateItems','TC_02_VO_Regression_CreateAPart','ItemCost')
    const ItemPrice2 =  testData('CreateItems','TC_02_VO_Regression_CreateAPart','ItemPrice')
    const ItemTonerType2 =  testData('CreateItems','TC_02_VO_Regression_CreateAPart','ItemTonerType')
        
    const ItemPart3 =  testData('CreateItems','TC_03_VO_Regression_CreateAModel','ItemPart')
    const ItemDesc3 =  testData('CreateItems','TC_03_VO_Regression_CreateAModel','ItemDesc')
    const ItemManf3 =  testData('CreateItems','TC_03_VO_Regression_CreateAModel','ItemManf')
    const ItemCategory3 =  testData('CreateItems','TC_03_VO_Regression_CreateAModel','ItemCategory')
    //const ItemSupp3 =  testData('CreateItems','TC_03_VO_Regression_CreateAModel','ItemSupp')
    const ItemCost3 =  testData('CreateItems','TC_03_VO_Regression_CreateAModel','ItemCost')
    const ItemPrice3 =  testData('CreateItems','TC_03_VO_Regression_CreateAModel','ItemPrice')
    const ItemTonerType3 =  testData('CreateItems','TC_03_VO_Regression_CreateAModel','ItemTonerType')
    const ItemMeterPreSet1_3 =  testData('CreateItems','TC_03_VO_Regression_CreateAModel','ItemMeterPreSet1')
    const ItemMeterPreSet2_3 =  testData('CreateItems','TC_03_VO_Regression_CreateAModel','ItemMeterPreSet2')

    const ItemPart4 =  testData('CreateItems','TC_04_VO_Regression_CreateAAccess','ItemPart')
    const ItemDesc4 =  testData('CreateItems','TC_04_VO_Regression_CreateAAccess','ItemDesc')
    const ItemManf4 =  testData('CreateItems','TC_04_VO_Regression_CreateAAccess','ItemManf')
    const ItemCategory4 =  testData('CreateItems','TC_04_VO_Regression_CreateAAccess','ItemCategory')
    //const ItemSupp4 =  testData('CreateItems','TC_04_VO_Regression_CreateAAccess','ItemSupp')
    const ItemCost4 =  testData('CreateItems','TC_04_VO_Regression_CreateAAccess','ItemCost')
    const ItemPrice4 =  testData('CreateItems','TC_04_VO_Regression_CreateAAccess','ItemPrice')
    
    const EquipSerialNo =  testData('CreateItems','TC_05_VO_Regression_CreateAEquipment','EquipSerialNo')
        
    await test.step("TC_01_VO_Regression_CreateAConsumItem", async()=>
        {
          //console.log('The global SupplierName created is ' + globalSupplierName);
          await Item.itemCreation("consumable",rel+ItemPart1+rand,ItemDesc1,ItemManf1,ItemCategory1,globalSupplierName,ItemCost1,ItemPrice1,ItemTonerType1)
          global.globalItem = rel+ItemPart1+rand;          
        })

    await test.step("TC_02_VO_Regression_CreateAPart", async()=>
        {
          await Item.itemCreation("part",rel+ItemPart2+rand,ItemDesc2,ItemManf2,ItemCategory2,globalSupplierName,ItemCost2,ItemPrice2,ItemTonerType2)
          await page.waitForTimeout(5000)
                    
        })

    await test.step("TC_03_VO_Regression_CreateAModel", async()=>
        {
          
          await Item.itemCreation("model",rel+ItemPart3+rand,ItemDesc3,ItemManf3,ItemCategory3,globalSupplierName,ItemCost3,ItemPrice3,ItemTonerType3,ItemMeterPreSet1_3 ,ItemMeterPreSet2_3)
          await page.waitForTimeout(5000)
                    
        })
    await test.step("TC_04_VO_Regression_CreateAAccessory", async()=>
        {
          
          await Item.itemCreation("accessory",rel+ItemPart4+rand,ItemDesc4,ItemManf4,ItemCategory4,globalSupplierName,ItemCost4,ItemPrice4)
          await page.waitForTimeout(2000)
                    
        })

    await test.step("TC_05_VO_Regression_CreateAEquipment", async()=>
        {
          
          await Equipment.equipmentCreation(rel+ItemPart3+rand,EquipSerialNo+rand)
          await page.waitForTimeout(2000)
                    
        })
    });

