import { test, expect } from '@playwright/test';
import { xmlHandler} from '../src/coreLib/utilities/xmlHandler';
import { jsonHandler} from '../src/coreLib/utilities/jsonHandler';
import { propertiesReader } from '../src/coreLib/utilities/propertiesReader';
import {envReader} from '../src/dataReader/envReader';

import { VehicleGen } from '../src/dataReader/vehicle-gen';

test('READ JSON', async ({ page }) => {
  let vehicle = await VehicleGen.generateVehicleInfo();
  console.dir(vehicle);
  
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
  let url = await envReader.getDealerUrl();
  console.log(url);
  //console.log(dealer_user.password);

})

test('Generate VEhicle Info', async ({ page }) => {

  let vehicleinfo = await VehicleGen.generateVehicleInfo(); 
  console.dir(vehicleinfo);
  console.log("DONE");

})



