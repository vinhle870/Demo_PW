import { JsonHandling } from '../utilities/json-handling';
import { Constants } from "../utilities/constants";


export class DataHandling {


  /**
   * Generate Vehicle data for file name;
   * @returns vehicle as javascript object
   */
  static async readVehicleData(): Promise<object> {

    const filename = "vehicle.json"
    const vehicleinfo = await JsonHandling.parseJsonTextToObject(Constants.BUSINESS_ENTITY_FOLDER + filename) as object;
    return vehicleinfo;

  }

  static async readDealerAcc(): Promise<object> {

    let dealerLogin = await JsonHandling.parseJsonTextToObject(Constants.BUSINESS_ENTITY_FOLDER + "dealer.json") as object;

    return dealerLogin;

  }
}