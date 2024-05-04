import { jsonHandler } from "../coreLib/utilities/jsonHandler";
import {BUSINESS_ENTITY_FOLDER} from "../coreLib/utilities/constants";
import { faker } from '@faker-js/faker';
import {DataGenerate} from "../coreLib/utilities/data-generate";

export class VehicleGen
{
    
    /**
     * Generate data for vehicle information
     * @returns vehicle as javascript object
     */
    static async generateVehicleInfo():Promise<any>
    {
      try{
        let vehicleinfo = await jsonHandler.parseJsonTextToObject(BUSINESS_ENTITY_FOLDER+"vehicle.json") as object;
              
          vehicleinfo['VehicleType'] = "Passenger";
          vehicleinfo['vin'] = faker.vehicle.vin() as string;
          vehicleinfo['branch'] = faker.vehicle.manufacturer() as string;
          vehicleinfo['model'] = faker.vehicle.model() as string;
          vehicleinfo['year'] = DataGenerate.generateYear();
          vehicleinfo['price'] = DataGenerate.generateAmount();
          vehicleinfo['km'] = DataGenerate.getRandomInt(0,100000);
          vehicleinfo['condition'] = DataGenerate.selectRandomlyInList(["new", "used","reconstructed"]) as string;
          vehicleinfo['fuelType'] = faker.vehicle.fuel() as string;
          vehicleinfo['transmission'] = DataGenerate.selectRandomlyInList(["Automatic", "Manual"]) as string
          vehicleinfo['cylinders'] = DataGenerate.getRandomInt(1,100);
          vehicleinfo['engineSize'] =  DataGenerate.getRandomInt(2,10);
          vehicleinfo['engineSizeUnit'] = DataGenerate.selectRandomlyInList(["cc", "l","hp","watts"]) as string
          vehicleinfo['designation'] = DataGenerate.selectRandomlyInList(["Particular", "Commercial"]) as string
          vehicleinfo['isTurboEngine'] = DataGenerate.selectRandomlyInList(["yes", "no"]) as string
          vehicleinfo['is4X4'] = DataGenerate.selectRandomlyInList(["yes", "no"]) as string
          vehicleinfo['isAllWheelDrive'] = DataGenerate.selectRandomlyInList(["yes", "no"]) as string
          vehicleinfo['fullCoverageEndDate'] = DataGenerate.generateDate("yyyy-mm-dd") as string
          vehicleinfo['fullCoverageMaxMile'] = DataGenerate.getRandomInt(0,100000);
          vehicleinfo['powerTrainCoverageEndDate'] = DataGenerate.generateDate("yyyy-mm-dd") as string
          vehicleinfo['powerTrainCoverageMaxMile'] = DataGenerate.getRandomInt(0,100000);
                   
          return vehicleinfo;
        }catch(error){
        return undefined;
      }

    }
}