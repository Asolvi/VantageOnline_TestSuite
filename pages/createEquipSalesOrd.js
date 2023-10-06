import { test,expect } from '@playwright/test';
exports.CreateEquipSalesOrdPage = class CreateEquipSalesOrdPage
{
    constructor(page)
    {
        this.page = page
        this.dropDown =  page.locator('//html/body/div[1]/footer/div/div[1]/div/div/form/div[2]/span')
        this.dropDownSrchBox =  page.locator('input[type="search"]')
        this.searchBoxCustSelect = page.getByRole('treeitem', { name: 'Customers' })
        this.searchBox = page.getByPlaceholder('Search')        
        this.searchBtn = page.getByRole('button', { name: '' })
        this.newCust_table = page.locator("//div[@class='table-responsive']")
        this.salesOrders_tab = page.getByRole('link', { name: 'Sales Orders' });
        this.actions_tab = page.getByRole('button', { name: 'Action ' })
        this.newSalesOrder_link = page.getByRole('link', { name: ' New Sales Order' })

        this.saleOrderType_dropdown = page.locator('//html/body/div[1]/main/div[5]/div/div/form/div[2]/div/div[14]/div/div/div[1]/span/span[1]/span/span[1]/span')
        this.saleOrderType_textbox = page.locator('//html/body/span/span/span[1]/input')
        this.view_btn = page.getByRole('button', { name: ' View' })

    }

    async CustomerSearch()
    {
        
        await test.step("Navigate to Customers Page,enter the Customer & Perform Search", async()=>
        {
            await this.page.waitForTimeout(4000);
            //await page.getByRole('combobox', { name: 'Contract Centre' }).locator('span').nth(1).click();
            await this.dropDown.click();
            await this.dropDownSrchBox.click();
            await this.dropDownSrchBox.fill('Customers');
            //await this.page.pause();
            await this.searchBoxCustSelect.click();
            await this.searchBox.click();
            await this.searchBox.fill('R1.63AutoCust57426');
            await this.searchBtn.click();
            await this.page.waitForTimeout(5000);

        })
        
    }


    async custTableVerify()
      {
          const table = this.newCust_table
          const headers = table.locator("thead");
            
          const rows = table.locator("tbody tr");
          //console.log(await rows.count());
          const cols = rows.first().locator("td")
          //console.log(await cols.count());
          await this.page.pause();
  
      for (let i = 0; i < await rows.count(); i++) 
      {
          const row = rows.nth(i);
          const tds = row.locator("td");
           for (let j = 0; j < await cols.count(); j++) 
           {
              if (await tds.nth(j).textContent() == "R1.63AutoCust57426") 
              {
                
                await this.page.waitForTimeout(2000);
                //console.log(await tds.nth(2).textContent())
                  await tds.nth(j).click();
                  let i = await rows.count();
                  break;                
                  
              }
           
           }
  
      }
    }

    async EquipSalesOrder(SalesOrdType)
    {
        
        await test.step("Navigate to SalesOrders Page & fill the Type field", async()=>
        {
            await this.page.waitForTimeout(4000)
            await this.salesOrders_tab.click();
            await this.actions_tab.click();
            await this.newSalesOrder_link.click();
            await this.page.waitForTimeout(2000);

                   
            const SalOrdType = SalesOrdType;
            await this.saleOrderType_dropdown.click();
            await this.saleOrderType_textbox.fill(SalesOrdType);
            await this.saleOrderType_textbox.click();
            await this.page.getByRole('treeitem', { name: SalOrdType }).click();
            await this.view_btn.click();
        })
        
    }
}
  