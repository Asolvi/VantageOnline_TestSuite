import { test,expect } from '@playwright/test';
exports.CreateSite = class CreateSite
{
    constructor(page)
    {
        this.page = page
        this.sites_tab = page.getByRole('link', { name: 'Sites' })
        this.addNewSite_tab = page.getByRole('link', { name: '' }).first();
        this.newSiteName_textbox = page.getByRole('textbox', { name: 'Name', exact: true })
        this.newSiteAddr1_textbox = page.getByLabel('Address 1')
        this.newSiteTown_textbox = page.getByLabel('Town')
        this.newSitePostCode_textbox = page.getByLabel('Post Code')
        this.newSiteTaxCode_textbox = page.locator('//input[@id="Customer_Add_TaxCodeId"]')
        this.newSiteCurrency_textbox = page.locator('//input[@id="Customer_Add_CurrencyCode"]')
        this.newSiteExtAcc_textbox = page.locator('//input[@id="Customer_Add_ExternalAccountNumber"]') 
        this.newSiteSave_btn = page.getByRole('button', { name: ' Save' })
        this.newSite_table = page.locator("//div[@class='table-responsive']")
        //this.newPerson_headers = this.newPerson_table.locator("thead")
    }

    async siteCreation(SiteName,SiteAddr1,SiteTown,SitePostCode)
    {
        
        await test.step("Navigate to Site Page", async()=>
       {
        await this.page.waitForTimeout(1000);
        await this.sites_tab.click();
        await this.page.waitForTimeout(2000);
        await this.addNewSite_tab.click();
        })
        await test.step("Fill the Name,Addr1,Town,Postcode details in the Site Page", async()=>
       {
        await this.newSiteName_textbox.fill(SiteName);
        await this.newSiteAddr1_textbox.fill(SiteAddr1);
        await this.newSiteTown_textbox.fill(SiteTown);
        await this.newSitePostCode_textbox.fill(SitePostCode);
        })
        //await this.page.pause();
        await expect(this.newSiteExtAcc_textbox ,'Verify the External Account Text box greyOut').toBeDisabled();
        await expect(this.newSiteTaxCode_textbox ,'Verify the TaxCode Text box greyOut').toHaveAttribute('disabled','');
        await expect(this.newSiteCurrency_textbox ,'Verify the Currency Text box greyOut').toHaveAttribute('disabled','');
        await test.step("Click the save button", async()=>
        {
            await this.newSiteSave_btn.click();
            await this.page.waitForTimeout(2000);
         })
         await test.step("Verify the Name,Addr1,Town,Postcode details in the webTable", async()=>
         {
            await this.siteTableVerify(SiteName,SiteAddr1,SiteTown,SitePostCode);
        })


      }

      async siteTableVerify(SiteName,SiteAddr1,SiteTown,SitePostCode)
      {
          const table = this.newSite_table
          const headers = table.locator("thead");
          //const fullName = ContPerFirstName+" "+ContPerLastName
          //console.log(await headers.allTextContents());
          //console.log(ContPerJobTitle);
          //console.log(fullName);
  
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
              if (await tds.nth(j).textContent() == SiteName) 
              {
                  //console.log(await tds.nth(2).textContent())
                  await expect(tds.nth(2),'Verify the Name in the Site webtable').toContainText(SiteName);
                  await expect(tds.nth(3),'Verify the Address1 in the Site webtable').toContainText(SiteAddr1);
                  await expect(tds.nth(4),'Verify the Town in the Site webtable').toContainText(SiteTown);
                  await expect(tds.nth(5),'Verify the PostCode in the Site webtable').toContainText(SitePostCode);
                  break;                
                  
              }
              
           }
  
      }
  
          
      }
   
   
}