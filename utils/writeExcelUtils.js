/*exports.writeExcelTestData = function writeExcelTestData(SheetName,TCName,ColName,CellValue)
{
const XLSX = require("xlsx");
const workbook = XLSX.readFile('./testdata/VOTestData.xlsx');
//const worksheet = workbook.Sheets["Sheet1"];
const worksheet = workbook.Sheets[SheetName];
const arrEvatic = XLSX.utils.sheet_to_json(worksheet);

for(const service of arrEvatic)
{
   
      if(service["TestCaseId"] == TCName)
         {
            //console.log(service[ColName]);
            service[ColName] = CellValue;
            break;
         }    
}
}*/


exports.writeExcelTestData = function writeExcelTestData(SheetName,TCName,ColName,CellValue)
{
const Excel = require('exceljs');

const fileName = 'C:/Users/RajanJeyaraj/OneDrive - Asolvi AS/Rajan/Rajan/Projects/VantageOnlineAutomationNew/testData/VOTestData.xlsx';

const wb = new Excel.Workbook();
const ws = wb.addWorksheet(SheetName);
//const ws = wb.getWorksheet('My Sheet');

ws.getCell('F1').value = CellValue;

wb.xlsx
  .writeFile(fileName)
  .then(() => {
    console.log('file created');
  })
  .catch(err => {
    console.log(err.message);
  });
}

