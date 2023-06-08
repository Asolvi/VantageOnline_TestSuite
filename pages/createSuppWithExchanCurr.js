import { test,expect } from '@playwright/test';
exports.CreateSuppWithExchanCurrPage = class CreateSuppWithExchanCurrPage
{
    constructor(page)
    {
        this.page = page
        this.SuppFullName = "";
        this.suppliers_tab = page.getByRole('tab', { name: 'Suppliers' })
        this.new_link = page.getByRole('link', { name: ' New ' })
        this.supplier_menuItem = page.getByRole('menuitem', { name: ' Supplier', exact: true })
        this.supplierName_textbox = page.locator('//form[@class="modal-content"] //input[@id="Supplier_Add_Name"]')
        this.supplierPhoneNo_textbox = page.locator('//input[@id="Supplier_Add_PhoneNumber"]')
        this.supplierAddr1_textbox = page.locator('//form[@class="modal-content"] //input[@id="Supplier_Add_Address1"]')
        this.supplierTown_textbox = page.locator('//form[@class="modal-content"] //input[@id="Supplier_Add_Town"]')
        this.supplierPostCode_textbox = page.locator('//form[@class="modal-content"] //input[@id="Supplier_Add_PostCode"]')
        this.supplierView_btn = page.getByRole('button', { name: ' View' })
        this.supplierEdit_btn = page.getByRole('button', { name: ' Edit' })
        this.supplierTaxCode_dropdown = page.locator('//html/body/div[1]/main/div[5]/div/div/form/div[2]/div/div[13]/div/div/div[1]/span/span[1]/span/span[1]')
        this.supplierTaxCode_select = page.locator('//html/body/span/span/span[1]/input')
        this.supplierCurrency_dropdown = page.locator('//html/body/div[1]/main/div[5]/div/div/form/div[2]/div/div[14]/div/div/div[1]/span/span[1]/span/span[1]')
        this.supplierCurrency_select = page.locator('//html/body/span/span/span[1]/input')
        this.supplierSave_btn = page.getByRole('button', { name: ' Save' })
        this.supplierName_check = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[1]/div[1]/div[2]/div')
        this.supplierAddr1_check = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[2]/div/div/div/div[1]/div/address')
        this.supplierDelivery_check = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[2]/div/div/fieldset[2]/div/div[2]/div[3]/div/div/div/a')
        this.supplierCurrency_check = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[2]/div/div/fieldset[2]/div/div[2]/div[4]/div/a')
        this.supplierAccountName_check = page.locator('//*[@id="router"]/div/div/form/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/h4[2]')

        this.supplierPriceBooks_tab = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[1]/div[1]/ul/li[5]/a')
        this.supplierPriceBookNew_link = page.locator('//html/body/div[1]/main/div[2]/div/div/form/div[2]/div[2]/div[2]/div[2]/div/div/div[1]/div/div/div[7]/a')
        this.supplierPriceBokItem_dropdown = page.locator('//html/body/div[1]/main/div[5]/div/div/form/div[2]/div/div[2]/div/div/div[1]/span/span[1]/span/span[1]/span')
        this.supplierPriceBokItem_select = page.locator('//html/body/span/span/span[1]/input')
        this.supplierPriceBookPriContact = page.locator('//html/body/div[1]/main/div[5]/div/div/form/div[2]/div/div[5]/div/div/button[1]')
        this.supplierPriceBookSave_btn = page.locator('//html/body/div[1]/main/div[5]/div/div/form/div[3]/div/div[4]/div[2]/button')

        this.supplierPriceBookRefresh_btn = page.getByRole('button', { name: '' }).nth(1)
        this.newSupplierPersonBook_table = page.locator("//div[@class='table-responsive']")
    }

    async SuppWithExcCurrCreation(SuppName,SuppPhone,SuppAddr1,SuppTown,SuppPostCode,SuppCountry,SuppTaxCode,SuppCurrency,SuppPriceBokItem)
    {
        
        await test.step("Navigate to Suppliers Page", async()=>
        {
            await this.suppliers_tab.click();
            await this.new_link.click();
            await this.supplier_menuItem.click();
        })
        await test.step("Fill the Name,phone,Addr1,Town,Postcode details in the Supplier Page", async()=>
        {
            await this.supplierName_textbox.click();
            await this.supplierName_textbox.fill(SuppName);
            await this.supplierPhoneNo_textbox.click();
            await this.supplierPhoneNo_textbox.fill(SuppPhone);
            await this.supplierAddr1_textbox.click();
            await this.supplierAddr1_textbox.fill(SuppAddr1);
            await this.supplierTown_textbox.click();
            await this.supplierTown_textbox.fill(SuppTown);
            await this.supplierPostCode_textbox.click();
            await this.supplierPostCode_textbox.fill(SuppPostCode);
        })

        await test.step("Fill the Tax Code to 0% & Currency details in the Supplier Page", async()=>
        {
            const TaxCode = SuppTaxCode;
            const Currency = SuppCurrency;
            //await this.page.pause();
            await this.supplierTaxCode_dropdown.click();
            await this.supplierTaxCode_select.fill(TaxCode)
            await this.page.getByRole('treeitem', { name: TaxCode }).click();

            await this.supplierCurrency_dropdown.click();
            await this.supplierCurrency_select.fill(Currency)
            await this.page.getByRole('treeitem', { name: Currency }).click();
       
          
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

        await test.step("Click the supplierPriceBooks link", async()=>
        {
            await this.supplierPriceBooks_tab.click();
            await this.page.waitForTimeout(2000);
        })

        await test.step("Click the add a new SupplierPriceBook", async()=>
        {
            await this.supplierPriceBookNew_link.click();
            await this.page.waitForTimeout(2000);
        })

        
        await test.step("Fill the new SupplierPriceBook Details & click the save button", async()=>
        {
            const PriceBokItem = SuppPriceBokItem;
            await this.supplierPriceBokItem_dropdown.click();
            await this.supplierPriceBokItem_select.fill(PriceBokItem)
            await this.page.getByRole('treeitem', { name: PriceBokItem }).click();

            await this.supplierPriceBookPriContact.click();
            await this.page.waitForTimeout(2000);
            await this.supplierPriceBookSave_btn.click();
        })


        await test.step("click the refresh button", async()=>
        {
            //await this.page.pause();
            await this.page.waitForTimeout(2000);
            await this.supplierPriceBookRefresh_btn.click();
        })

     await test.step("Verify the Name,JobTitle,Email Id details in the webTable", async()=>
        {
            await this.supplierBooksTableVerify();
        })
}

    async supplierBooksTableVerify()
    {
        const table = this.newSupplierPersonBook_table
        const headers = table.locator("thead");

        const rows = table.locator("tbody tr");
        const cols = rows.first().locator("td")
        

    for (let i = 0; i < await rows.count(); i++) 
    {
        const row = rows.nth(i);
        const tds = row.locator("td");
         for (let j = 0; j < await cols.count(); j++) 
         {
            if (await tds.nth(j).textContent() == 'AUTOMATIONTONER157') 
            {
                //console.log(await tds.nth(2).textContent())
                await expect(tds.nth(1),'Verify the part in the supplierPriceBook table').toContainText('AUTOMATIONTONER157');
                await expect(tds.nth(2),'Verify the Description in the supplierPriceBook table').toContainText('Yellow non-OEM toner');
                await expect(tds.nth(4),'Verify the Currency in the supplierPriceBook table').toContainText('NOK');
                //await expect(tds.nth(5),'Verify the PrimaryContactCheck').toBeChecked();
                break;                
                
            }
            
         }

    }

        
    }



   
}