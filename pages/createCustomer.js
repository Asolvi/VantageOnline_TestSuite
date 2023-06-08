import { test,expect } from '@playwright/test';
exports.CreateCustomerPage = class CreateCustomerPage
{
    constructor(page)
    {
        this.page = page
        this.customers_tab = page.getByRole('tab', { name: 'Customers' })
        this.new_link = page.getByRole('link', { name: ' New ' })
        this.customer_menuItem = page.getByRole('menuitem', { name: ' Customer', exact: true })
        this.customerName_textbox = page.locator('//form[@class="modal-content"] //input[@id="Customer_Add_Name"]')
        this.customerAddr1_textbox = page.locator('//form[@class="modal-content"] //input[@id="Customer_Add_Address1"]')
        this.customerTown_textbox = page.locator('//form[@class="modal-content"] //input[@id="Customer_Add_Town"]')
        this.customerCounty_textbox = page.locator('//form[@class="modal-content"] //input[@id="Customer_Add_County"]')
        this.customerPostCode_textbox = page.locator('//form[@class="modal-content"] //input[@id="Customer_Add_PostCode"]')
        this.customerArea_dropdown = page.locator('#content form').getByText('Area None')
        this.customerArea_select = page.getByRole('treeitem', { name: 'Northern Region' })
        this.customerServiceReg_dropdown = page.locator('#content form').getByText('Service Region None')
        this.customerServiceReg_select = page.getByRole('treeitem', { name: 'North Service' })
        this.customerSave_btn = page.getByRole('button', { name: ' Save' })
        this.customerView_btn = page.locator('//*[@id="content"]/div[5]/div/div/form/div[3]/div/div[7]/div[1]/button')
        this.edit_btn = page.getByRole('button', { name: ' Edit' })
        this.customerPhoneNum_textbox = page.getByLabel('Phone #')
        this.customerName_check = page.locator('//*[@id="router"]/div/div/form/div[2]/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]/div')
        this.customerPhone_check = page.locator('//*[@id="router"]/div/div/form/div[2]/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div[1]/div/a')
        this.customerAddr_check = page.locator('//*[@id="router"]/div/div/form/div[2]/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div[1]/address')
        //this.customerAddr1_check = page.locator('//*[@id="router"]/div/div/form/div[2]/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div[1]/address/text()[1]')
        //this.customerAddr_check = page.getByText('Address', { exact: true })
    }

    async customerCreation(CustName,CustAddr1,CustTown,CustCounty,CustPostCode,CustArea,CustPhone)
    {
        await test.step("Navigate to Customer Page", async()=>
        {
            await this.customers_tab.click();
            await this.new_link.click();
            await this.customer_menuItem.click();
        })
        await test.step("Fill the Name,Addr1,Town,County,Postcode details in the Customer Page", async()=>
        {
            await this.customerName_textbox.click();
            await this.customerName_textbox.fill(CustName);
            await this.customerAddr1_textbox.click();
            await this.customerAddr1_textbox.fill(CustAddr1);
            await this.customerTown_textbox.click();
            await this.customerTown_textbox.fill(CustTown);
            await this.customerCounty_textbox.click();
            await this.customerCounty_textbox.fill(CustCounty);
            await this.customerPostCode_textbox.click();
            await this.customerPostCode_textbox.fill(CustPostCode);
        })
        await test.step("Click the view button", async()=>
        {
            await this.customerView_btn.click();
        })
        await test.step("Click the edit button", async()=>
        {
            await this.edit_btn.click();
            await this.page.waitForTimeout(2000);
        })
        
        await test.step("Update the Phone number & click the save button", async()=>
        {
            await this.customerPhoneNum_textbox.click();
            await this.customerPhoneNum_textbox.fill(CustPhone);
            await this.customerSave_btn.click();
            await this.page.waitForTimeout(2000);
        })
        //await this.page.pause();
        
        //await this.customerName_check
        await test.step("Verify the customer name,Phone,Addr1,Town,County,Postcode in the customer page", async()=>
        {
            await expect(this.customerName_check,'Verify the Search CustomerName').toHaveText(CustName)
            await expect(this.customerPhone_check,'Verify the Search CustomerPhone').toHaveText(CustPhone)
            await expect(this.customerAddr_check,'Verify the Search CustomerAddr1').toContainText(CustAddr1)
            await expect(this.customerAddr_check,'Verify the Search CustomerTown').toContainText(CustTown)
            await expect(this.customerAddr_check,'Verify the Search CustomerCounty').toContainText(CustCounty)
            await expect(this.customerAddr_check,'Verify the Search CustomerPostCode').toContainText(CustPostCode)
        })
        
    }
   
}