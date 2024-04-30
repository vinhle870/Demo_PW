import { test, expect } from '@playwright/test';
import { xmlHandler} from '../src/coreLib/utilities/xmlHandler';
import { jsonHandler} from '../src/coreLib/utilities/jsonHandler';
import { propertiesReader } from '../src/coreLib/utilities/propertiesReader';
import {envReader} from '../src/dataReader/envReader';
import { Dealer } from '../src/businessEntities/Dealer';

test('Debug', async ({ page }) => {
  let xmlReader = new xmlHandler();
  let xmlRootObject = await xmlReader.parseXmlDataToObject("D:/AutomationProject/Demo_PW/src/resources/environments/Staging_TestData.xml")
  console.dir(xmlRootObject.Data.AdminPortal);
  //let xmlData = await xmlReader.getXmlRootObject();

  
  
  //READ JSON

  let jsonReader = new jsonHandler();
  jsonReader.parseJsonTextToObject("D:/AutomationProject/Demo_PW/src/resources/environments/testdata.json").then((data) =>{
    console.log("JSON Object: "+data);
  })
  .catch((error)=>{

    console.error('Error processing JSON file:', error);
  })


  
})


test('Read Properties File', async ({ page }) => {

  try {
    let properties = await propertiesReader.readProperties('D:/AutomationProject/Demo_PW/src/resources/environments/Exec_Config.properties');
    console.log(properties['EnvName']); // Access properties object
  } catch (error) {
    console.error('Error reading properties:', error);
  }


})

test('Read .env File', async ({ page }) => {

  let dealer_user =  await envReader.getDealerAccountLogin();
  console.log(dealer_user.username);
  console.log(dealer_user.password);

})

