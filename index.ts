import csv from 'csv-parser';
import fs from 'fs';
import readline from 'readline';
 import express from 'express'
const server = express()

const delimiter = ",";

server.get('/', (req:any, res:any) => {
   const entries: any = [];
   const outries: any = {};

   const Header : any = [];
   const Reporting : any = [];
   const Blog : any = [];
   const FileStorage : any = [];
   const ApplicationIntergation : any = [];

   const readInterface = readline.createInterface({
      input: fs.createReadStream('PT.csv'),
     // output: process.stdout,     
  });


readInterface.on('line', function(line) {
   entries.push(line);
   // console.log(line);
});

readInterface.on('close',function() {
   var index = 0;

   const result:any = entries.reduce((acc: any , curr: any) => {
      if(curr === ",,,") index++;
      else acc[index] = (acc[index] || "") + delimiter + curr;
      return acc;
          }, [])

      //console.log(result)
       const outries = result.map((r: any) => r.substring(1).split(','));
     //  console.log(outries);
     //  res.send(outries);

const [HeaderData,ReportingData,BlogData,FileStorageData,ApplicationIntergationData] = outries
HeaderData.splice(0,4);
Header.push(HeaderData);

ReportingData.splice(1,3);
Reporting.push(ReportingData);

BlogData.splice(1,3)
Blog.push(BlogData);

FileStorageData.splice(1,3);
FileStorage.push(FileStorageData);

ApplicationIntergationData.splice(1,3);
const asd =JSON.stringify(ApplicationIntergationData).replace(/X/g, 'true' ).replace(/-/g, 'false' );
ApplicationIntergation.push(ApplicationIntergationData);
var cleanStr = ApplicationIntergation
console.log(asd)
res.send(asd);
//console.log(Object.assign({}, ApplicationIntergation))
//res.send(Object.assign({}, ApplicationIntergation));
      //  entries.map((element: string) => {
      //   //  console.log(element);
      //     if(element.split(',,,'))
      //     {
      //       Reporting.push(element[0]);
      //       console.log(Reporting);
      //     }
          
      //  });
       // res.send(JSON.stringify(final)); 
});

 console.log("Response sent successfully")

});

server.listen(3000, () => { 
console.log(`Server running on http://localhost:3000`)

 });
 



