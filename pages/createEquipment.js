import { test,expect } from '@playwright/test';
exports.CreateEquipmentPage = class CreateEquipmentPage
{
    constructor(page)
    {
        this.page = page
        this.stock_tab = page.getByRole('tab', { name: 'Stock' })
        this.new_link = page.getByRole('link', { name: ' New ' })
        this.equipment_menuItem = page.getByRole('menu').getByRole('menuitem', { name: ' Equipment' })
        this.equipmentItem_dropdown = page.locator('//html/body/div[1]/main/div[5]/div/div/form/div[2]/div/div[1]/div/div/div[1]/span/span[1]/span/span[1]/span')
        this.equipmentItem_textbox = page.locator('//html/body/span/span/span[1]/input')
        this.equipmentSerialNo_textbox = page.getByLabel('Serial #')
        this.equipmentSave_btn = page.getByRole('toolbar').filter({ hasText: 'Action View Save Cancel' }).getByRole('button', { name: ' Save' })
        
    }

    async equipmentCreation(EquipItem,EquipSerialNo)
    {
        
        await test.step("Navigate to Equipments Page", async()=>
        {
            await this.stock_tab.click();
            await this.new_link.click();
            //await this.page.pause();
            await this.equipment_menuItem.click();
        })
        await test.step("Fill the Model#,Serial# details in the Equipments Page", async()=>
        {
            const EqItem = EquipItem;

            await this.equipmentItem_dropdown.click();
            await this.equipmentItem_textbox.fill(EquipItem);
            await this.equipmentItem_textbox.click();
            await this.page.getByRole('treeitem', { name: EqItem }).click();

            await this.page.waitForTimeout(3000);

            await this.equipmentSerialNo_textbox.click();
            await this.equipmentSerialNo_textbox.fill(EquipSerialNo);
            
        })
        
        await test.step("Click the save button", async()=>
        {
            await this.equipmentSave_btn.click();
            await this.page.waitForTimeout(3000);
        })
        

    }


   
}