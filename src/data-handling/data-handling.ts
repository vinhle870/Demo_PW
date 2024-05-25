import { JsonHandling } from '../utilities/json-handling';
import { Constants } from "../utilities/constants";

export class DataHandling {

  /**
   * Parse Vehicle data for file name
   * @returns vehicle as vehicle object
   */
  static async parseVehicleInfoFromFile(filename: string): Promise<object> {
    const vehicleinfo = await JsonHandling.parseJsonTextToObject(Constants.BUSINESS_ENTITY_FOLDER + filename) as object;
    return vehicleinfo;
  }

  /**
   * Parse Dealer Info from file
   * @param filename
   * @returns dealer object
   */
  static parseDealerInfoFromFile(filename: string): object {
    return JsonHandling.parseJsonTextToObject(Constants.BUSINESS_ENTITY_FOLDER + filename);
  }
}