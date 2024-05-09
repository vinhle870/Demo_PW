/*
import { test, expect } from '@playwright/test';
import { PropertiesReader } from '../../src/coreLib/utilities/propertiesReader';
import {envReader} from '../../src/dataReader/envReader';

import { VehicleGen } from '../../src/dataReader/vehicle-gen';

test('READ JSON', async ({ page }) => {
  let vehicle = await VehicleGen.generateVehicleInfo();
  console.dir(vehicle);

})


test('Read Properties File', async ({ page }) => {

  try {
    let properties = await PropertiesReader.readProperties('D:/AutomationProject/Demo_PW/src/resources/environments/Exec_Config.properties');
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


})
*/
