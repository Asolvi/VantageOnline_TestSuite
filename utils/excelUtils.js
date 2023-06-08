exports.testData = function f1(SheetName,TCName,ColName)
{
const XLSX = require("xlsx");
const workbook = XLSX.readFile('./testdata/VOTestData.xlsx');
//const worksheet = workbook.Sheets["Sheet1"];
const worksheet = workbook.Sheets[SheetName];
let ret

const arrEvatic = XLSX.utils.sheet_to_json(worksheet);
for(const service of arrEvatic)
{
   
      if(service["TestCaseId"] == TCName)
         {
            //console.log(service[ColName]);
            ret = service[ColName];
            break;
         }    
}
return ret
}

