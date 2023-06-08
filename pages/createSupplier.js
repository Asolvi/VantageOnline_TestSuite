import { test,expect } from '@playwright/test';
exports.CreateSupplierPage = class CreateSupplierPage
{
    constructor(page)
    {
        this.page = page
        this.SuppFullName = "";
        this.suppliers_tab = page.getByRole('tab', { name: 'Suppliers' })
        this.new_link = page.getByRole('link', { name: ' New ' })
        this.supplier_menuItem = page.getByRole('menuitem', { name: ' Supplier', exact: true })
        this.supplierName_textbox = page.locator('//form[@class="modal-content"] //input[@id="Supplier_Add_Name"]')
        this.supplierAddr1_textbox = page.locator('//form[@class="modal-content"] //input[@id="Supplier_Add_Address1"]')
        this.supplierTown_textbox = page.locator('//form[@class="modal-content"] //input[@id="Supplier_Add_Town"]')
        this.supplierPostCode_textbox = page.locator('//form[@class="modal-content"] //input[@id="Supplier_Add_PostCode"]')
        this.supplierView_btn = page.getByRole('button', { name: ' View' })
        this.supplierEdit_btn = page.getByRole('button', { name: ' Edit' })
        this.supplierDefDel_dropdown = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[2]/div/div/fieldset[2]/div/div[2]/div[2]/div/div/div[1]/span/span[1]/span/span[1]/span')
        this.supplierDefDel_select = page.getByRole('treeitem', { name: '2-3 Day Delivery (Data Direct)' })
        this.supplierSave_btn = page.getByRole('button', { name: ' Save' })
        this.supplierName_check = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[1]/div[1]/div[2]/div')
        this.supplierAddr1_check = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[2]/div/div/div/div[1]/div/address')
        this.supplierDelivery_check = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[2]/div/div/fieldset[2]/div/div[2]/div[3]/div/div/div/a')
        this.supplierCurrency_check = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[2]/div/div/fieldset[2]/div/div[2]/div[4]/div/a')
        this.supplierAccountName_check = page.locator('//*[@id="router"]/div/div/form/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/h4[2]')
    }

    async supplierCreation(SuppName,SuppAddr1,SuppTown,SuppPostCode,SuppCountry,SuppDelivery,SuppCurrency)
    {
        
        await test.step("Navigate to Suppliers Page", async()=>
        {
            await this.suppliers_tab.click();
            await this.new_link.click();
            await this.supplier_menuItem.click();
        })
        await test.step("Fill the Name,Addr1,Town,Postcode details in the Supplier Page", async()=>
        {
            await this.supplierName_textbox.click();
            await this.supplierName_textbox.fill(SuppName);
            await this.supplierAddr1_textbox.click();
            await this.supplierAddr1_textbox.fill(SuppAddr1);
            await this.supplierTown_textbox.click();
            await this.supplierTown_textbox.fill(SuppTown);
            await this.supplierPostCode_textbox.click();
            await this.supplierPostCode_textbox.fill(SuppPostCode);
        })
        
        await test.step("Click the view button", async()=>
        {
            await this.supplierView_btn.click();
        })
        await test.step("Click the edit button", async()=>
        {
            await this.supplierEdit_btn.click();
            await this.page.waitForTimeout(2000);
        })
        
        await test.step("Update the default delivery & click the save button", async()=>
        {
            //const SuppDelivery = '2-3 Day Delivery (Data Direct)';
            const Delivery = SuppDelivery;
            await this.supplierDefDel_dropdown.click();
            //await this.page.pause();
            //await this.page.getByRole('treeitem', { name: SuppDelivery }).click();
            await this.page.getByRole('treeitem', { name: Delivery }).click();
            //await this.supplierDefDel_select.click();
            await this.supplierSave_btn.click();
            await this.page.waitForTimeout(2000);
            
        })
               
        //await this.customerName_check
        await test.step("Verify the supplier name,Addr1,Town,Delivery,Country,Currency in the delivery page", async()=>
        {
            await expect(this.supplierName_check,'Verify the Search SupplierName').toHaveText(SuppName)
            await expect(this.supplierAddr1_check,'Verify the Search SupplierAddr1').toContainText(SuppAddr1)
            await expect(this.supplierAddr1_check,'Verify the Search SupplierTown').toContainText(SuppTown)
            await expect(this.supplierAddr1_check,'Verify the Search SupplierPostcode').toContainText(SuppPostCode)
            await expect(this.supplierAddr1_check,'Verify the Search SupplierCountry').toContainText(SuppCountry)
            await expect(this.supplierDelivery_check,'Verify the Search SupplierDelivery').toContainText(SuppDelivery)
            await expect(this.supplierCurrency_check,'Verify the Search SupplierCurrency').toContainText(SuppCurrency)
        })

        await test.step("Find out the Supplier Id", async()=>
        {
            const name = SuppName;
            const accNo = await this.supplierAccountName_check.textContent();
            const postCode = SuppPostCode;
            
            this.SuppFullName = accNo+" "+name+" "+postCode
            //SuppFullName = accNo+" "+name+" "+postCode
            //console.log(SuppFullName);
            console.log(this.SuppFullName);
            return this.SuppFullName
        })
    }


   
}