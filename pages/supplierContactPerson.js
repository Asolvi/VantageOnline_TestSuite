import { test,expect } from '@playwright/test';
exports.CreateSupplierContactPerson = class CreateSupplierContactPerson
{
    constructor(page)
    {
        this.page = page
        this.people_tab = page.getByRole('link', { name: 'People' })
        this.addNewPerson_tab = page.getByRole('link', { name: '' }).first()
        this.newPersonFirstName_textbox = page.getByPlaceholder('Forename')
        this.newPersonLastName_textbox = page.getByPlaceholder('Surname')
        this.newPersonMobileNo_textbox = page.getByLabel('Mobile #')
        this.newPersonSave_btn = page.getByRole('button', { name: ' Save' })
        this.newPersonRefresh_btn = page.getByRole('button', { name: '' }).nth(1)
        this.newPerson_table = page.locator("//div[@class='table-responsive']")
        //this.newPerson_headers = this.newPerson_table.locator("thead")
    }

    async supplierContactPersonCreation(ContPerFirstName,ContPerLastName,ContPerMobile)
    {
        await test.step("Navigate to People Page", async()=>
        {
            await this.people_tab.click();
            await this.addNewPerson_tab.click();
        })
        await test.step("Fill the FirstName,LastName,Mobile no details in the People Page", async()=>
        {
            await this.newPersonFirstName_textbox.fill(ContPerFirstName);
            await this.newPersonLastName_textbox.fill(ContPerLastName);
            await this.newPersonMobileNo_textbox.fill(ContPerMobile);
            //await this.page.pause();
            
        })

        await test.step("Click the Save button in the People Page", async()=>
        {
            await this.newPersonSave_btn.click();
            await this.page.waitForTimeout(4000);
            //await this.page.pause();
            await this.newPersonRefresh_btn.click();
            await this.page.waitForTimeout(2000);
        })

        //await this.page.pause();
        await test.step("Verify the Name,MobileNo details in the webTable", async()=>
        {
            
            await this.personTableVerify(ContPerFirstName,ContPerLastName,ContPerMobile);
        })
        
        
      }
   
    async personTableVerify(ContPerFirstName,ContPerLastName,ContPerMobile)
    {
        const table = this.newPerson_table
        const headers = table.locator("thead");
        const fullName = ContPerFirstName+" "+ContPerLastName
        //console.log(await headers.allTextContents());
        console.log(fullName);

        const rows = table.locator("tbody tr");
        //console.log(await rows.count());
        const cols = rows.first().locator("td")
        //console.log(await cols.count());

    for (let i = 0; i < await rows.count(); i++) 
    {
        const row = rows.nth(i);
        const tds = row.locator("td");
         for (let j = 0; j < await cols.count(); j++) 
         {
            if (await tds.nth(j).textContent() == fullName) 
            {
                //console.log(await tds.nth(2).textContent())
                await expect(tds.nth(2),'Verify the Name in the person table').toContainText(fullName);
                await expect(tds.nth(5),'Verify the MobileNumber in the person table').toContainText(ContPerMobile);
                //await expect(tds.nth(7),'Verify the invoicesCheck').toBeChecked();
                break;                
                
            }
            
         }

    }

        
    }
}