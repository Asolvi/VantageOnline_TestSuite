import { test,expect } from '@playwright/test';
exports.CreateItemPage = class CreateItemPage
{
    constructor(page)
    {
        this.page = page
        this.stock_tab = page.getByRole('tab', { name: 'Stock' })
        this.new_link = page.getByRole('link', { name: ' New ' })
        this.stock_menuItem = page.getByRole('menuitem', { name: ' Item', exact: true })
        this.itemPartNo_textbox = page.getByLabel('Part #', { exact: true })
        this.itemDesc_textbox = page.getByLabel('Description')
        this.itemMfc_dropdown = page.locator('//html/body/div[1]/main/div[5]/div/div/form/div[2]/div/div[4]/div/div/div[1]/span/span[1]/span/span[1]/span')
        this.itemMfc_textbox = page.locator('//html/body/span/span/span[1]/input');
        this.itemCategory_dropdown = page.locator('//html/body/div[1]/main/div[5]/div/div/form/div[2]/div/div[5]/div/div/div[1]/span/span[1]/span/span[1]/span')
        this.itemCategory_textbox = page.locator('//html/body/span/span/span[1]/input')
        this.itemSupp_dropdown = page.locator('//html/body/div[1]/main/div[5]/div/div/form/div[2]/div/div[12]/div/div/div[1]/span/span[1]/span/span[1]/span')
        this.itemSupp_textbox = page.locator('//html/body/span/span/span[1]/input')
        this.itemCost_textbox = page.getByLabel('Cost');
        this.itemPrice_textbox = page.getByLabel('Price');
        this.itemView_btn = page.getByRole('button', { name: ' View' })
        this.itemEdit_btn = page.getByRole('button', { name: ' Edit' })
        this.itemSave_btn = page.getByRole('button', { name: ' Save' })
        this.itemRefresh_btn = page.getByRole('button', { name: '' })
        this.itemClose_btn = page.getByText('Close')
        this.itemSave1_btn = page.getByRole('toolbar').filter({ hasText: 'Action View Save Cancel' }).getByRole('button', { name: ' Save' })
        this.itemTonerType_dropdown = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[1]/div[2]/div[5]/div/div/div[1]/span/span[1]/span/span[1]/span')
        this.itemTonerType_textbox = page.locator('//html/body/span/span/span[1]/input')
        this.itemMeterPreSet_dropdown = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div/div/div[1]/span/span[1]/span/ul/li/input')

        this.itemPart_check = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/h4[2]')
        this.itemDesc_check = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[1]/div[1]/div[3]/div')
        this.itemManf_check = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[1]/div[1]/div[5]/div/a');
        this.itemCategory_check = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[1]/div[2]/div[1]/div/a');
        this.itemCost_check = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[2]/div/div/fieldset[1]/div/div[1]/div[4]/div/a')
        this.itemPrice_check = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[2]/div/div/fieldset[1]/div/div[1]/div[2]/div')
        this.itemTonerType_check = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[1]/div[2]/div[5]/div')
        this.itemMeterPreSet_check = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div/div/div');

    }

    async itemCreation(ItVar,ItemPart,ItemDesc,ItemManf,ItemCategory,ItemSupp,ItemCost,ItemPrice,ItemTonerType,ItemMeterPreSet1,ItemMeterPreSet2)
    {
        if(ItVar == 'consumable' || ItVar == 'part'|| ItVar == 'model'|| ItVar == 'accessory')
              {   
                await test.step("Navigate to Item Page", async()=>
                {

                    await this.stock_tab.click();
                    await this.new_link.click();
                    await this.stock_menuItem.click();
                       }
               )
                await test.step("Fill the Part,Desc,Manf,Category,Supplier,Cost,Price details in the Item Page", async()=>
                {
                    const Imanf = ItemManf;
                    const Isupp = ItemSupp;
                    const Icategory = ItemCategory;                   

                    await this.itemPartNo_textbox.click();
                    await this.itemPartNo_textbox.fill(ItemPart);
                    await this.itemDesc_textbox.click();
                    await this.itemDesc_textbox.fill(ItemDesc);
                    
                    await this.itemMfc_dropdown.click();
                    await this.itemMfc_textbox.click();
                    await this.itemMfc_textbox.fill(ItemManf);
                    await this.page.getByRole('treeitem', { name: Imanf }).click();

                    await this.itemCategory_dropdown.click();
                    await this.itemCategory_textbox.click();
                    await this.itemCategory_textbox.fill(ItemCategory);
                    await this.page.getByRole('treeitem', { name: Icategory }).click();

                    await this.itemSupp_dropdown.click();
                    await this.itemSupp_textbox.click();
                    await this.itemSupp_textbox.fill(ItemSupp);
                    await this.page.getByRole('treeitem', { name: Isupp }).click();
            
                    await this.itemCost_textbox.click();
                    await this.itemCost_textbox.clear();
                    await this.itemCost_textbox.fill(ItemCost);
                    await this.itemPrice_textbox.click();
                    await this.itemPrice_textbox.clear();
                    await this.itemPrice_textbox.fill(ItemPrice);
                    //await this.page.pause();
                    
                })
            }

        if(ItVar == 'consumable'|| ItVar == 'model')
           {
                    await test.step("Click the view button", async()=>
                    {
                        await this.itemView_btn.click();
                    })
            }

        if(ItVar == 'part'|| ItVar == 'accessory')
            {
                     await test.step("Click the save button", async()=>
                     {
                         await this.itemSave1_btn.click();
                     })
             }
        
        if(ItVar == 'consumable'|| ItVar == 'model')
            {
                    await test.step("Click the edit button", async()=>
                    {
                        await this.itemEdit_btn.click();
                    })
            }

        if(ItVar == 'consumable')
            {
                    await test.step("Update the Toner Type & click the save button", async()=>
                        {
                            const ItonerType = ItemTonerType;
                            await this.itemTonerType_dropdown.click();
                            await this.itemTonerType_textbox.click();
                            await this.itemTonerType_textbox.fill(ItemTonerType);
                            await this.page.getByRole('treeitem', { name: ItonerType }).click();
                            await this.itemSave_btn.click();
                            await this.page.waitForTimeout(2000);
                            await this.itemRefresh_btn.click();
                            await this.page.waitForTimeout(2000);
                            
                        })
            }

            if(ItVar == 'model')
            {
                    await test.step("Update the MeterPreSet & click the save button", async()=>
                        {
                            const IMeterPreSet1 = ItemMeterPreSet1;
                            const IMeterPreSet2 = ItemMeterPreSet2;
                            await this.itemMeterPreSet_dropdown.click();
                            await this.itemMeterPreSet_dropdown.fill(ItemMeterPreSet1);
                            await this.page.getByRole('treeitem', { name: IMeterPreSet1 }).click();
                            await this.itemMeterPreSet_dropdown.click();
                            await this.itemMeterPreSet_dropdown.fill(ItemMeterPreSet2);
                            await this.page.getByRole('treeitem', { name: IMeterPreSet2 }).click();

                            await this.itemSave_btn.click();
                                                        
                        })
            }
                            
        if(ItVar == 'consumable')
           {
                await test.step("Verify the Item Part,Desc,Manf,Category,Supp,Cost,Price,TonerType in the Item page", async()=>
                {
                    await expect.soft(this.itemPart_check,'Verify the Search ItemPart').toHaveText(ItemPart.toUpperCase())
                    await expect.soft(this.itemDesc_check,'Verify the Search ItemDescription').toContainText(ItemDesc)
                    await expect.soft(this.itemManf_check,'Verify the Search ItemManufacture').toContainText(ItemManf)
                    await expect.soft(this.itemCategory_check,'Verify the Search ItemCategory').toContainText(ItemCategory)
                    //await expect(this.itemSupp_check,'Verify the Search ItemSupplier').toContainText(ItemSupp)
                    await expect.soft(this.itemCost_check,'Verify the Search ItemCost').toContainText(ItemCost)
                    await expect.soft(this.itemPrice_check,'Verify the Search ItemPrice').toContainText(ItemPrice)
                    await expect.soft(this.itemTonerType_check,'Verify the Search ItemTonerType').toContainText(ItemTonerType)
                })
            }
            else if (ItVar == 'model') 
                {
                    //await this.page.pause();
                    await expect.soft(this.itemPart_check,'Verify the Search ItemPart').toHaveText(ItemPart.toUpperCase())
                    await expect.soft(this.itemDesc_check,'Verify the Search ItemDescription').toContainText(ItemDesc)
                    await expect.soft(this.itemManf_check,'Verify the Search ItemManufacture').toContainText(ItemManf)
                    await expect.soft(this.itemCategory_check,'Verify the Search ItemCategory').toContainText(ItemCategory)
                    await expect.soft(this.itemCost_check,'Verify the Search ItemCost').toContainText(ItemCost)
                    await expect.soft(this.itemPrice_check,'Verify the Search ItemPrice').toContainText(ItemPrice)
                    await expect.soft(this.itemMeterPreSet_check,'Verify the Search ItemMeterPreset').toContainText(ItemMeterPreSet1+","+" "+ItemMeterPreSet2)
                }

        if(ItVar == 'consumable'|| ItVar == 'model')
                {
                     await test.step("Click the Close button in the Item page", async()=>
                     {
                        await this.itemClose_btn.click();
                         
                     })
                 }

    }
  
}