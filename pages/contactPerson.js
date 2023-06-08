import { test,expect } from '@playwright/test';
exports.CreateContactPerson = class CreateContactPerson
{
    constructor(page)
    {
        this.page = page
        this.people_tab = page.getByRole('link', { name: 'People' })
        this.addNewPerson_tab = page.getByRole('link', { name: '' }).first()
        this.newPersonTitle_textbox = page.getByPlaceholder('Title')
        this.newPersonFirstName_textbox = page.getByPlaceholder('Forename')
        this.newPersonLastName_textbox = page.getByPlaceholder('Surname')
        this.newPersonJobTitle_textbox = page.getByLabel('Job Title')
        this.newPersonEmail_textbox = page.getByLabel('Email', { exact: true })
        this.newPersonInvoicePref_option = page.locator('//*[@id="content"]/div[5]/div/div/form/div[2]/div/div[16]/div/div/button[1]')
        this.newPersonSave_btn = page.getByRole('button', { name: ' Save' })
        this.newPersonRefresh_btn = page.getByRole('button', { name: '' }).nth(1)
        this.newPerson_table = page.locator("//div[@class='table-responsive']")
        //this.newPerson_headers = this.newPerson_table.locator("thead")
    }

    async contactPersonCreation(ContPerTitle,ContPerFirstName,ContPerLastName,ContPerJobTitle,ContPerEmailId)
    {
        await test.step("Navigate to People Page", async()=>
        {
            await this.people_tab.click();
            await this.addNewPerson_tab.click();
        })
        await test.step("Fill the Title,FirstName,LastName,JobTitle,Email Id details in the People Page", async()=>
        {
            await this.newPersonTitle_textbox.fill(ContPerTitle);
            await this.newPersonFirstName_textbox.fill(ContPerFirstName);
            await this.newPersonLastName_textbox.fill(ContPerLastName);
            await this.newPersonJobTitle_textbox.fill(ContPerJobTitle);
            await this.newPersonEmail_textbox.fill(ContPerEmailId);
        })
        await test.step("Set the Invoice preference YES in the People Page", async()=>
        {
            await this.newPersonInvoicePref_option.click();
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
        await test.step("Verify the Name,JobTitle,Email Id details in the webTable", async()=>
        {
            await this.personTableVerify(ContPerFirstName,ContPerLastName,ContPerJobTitle,ContPerEmailId);
        })
        
        
      }
   
    async personTableVerify(ContPerFirstName,ContPerLastName,ContPerJobTitle,ContPerEmailId)
    {
        const table = this.newPerson_table
        const headers = table.locator("thead");
        const fullName = ContPerFirstName+" "+ContPerLastName
        //console.log(await headers.allTextContents());
        console.log(ContPerJobTitle);
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
                await expect(tds.nth(2),'Verify the JobTitle in the person table').toContainText(ContPerJobTitle);
                await expect(tds.nth(5),'Verify the email in the person table').toContainText(ContPerEmailId);
                //await expect(tds.nth(7),'Verify the invoicesCheck').toBeChecked();
                break;                
                
            }
            
         }

    }

        
    }
}