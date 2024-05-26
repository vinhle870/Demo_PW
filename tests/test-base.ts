import { DataHandling } from '../src/data-handling/data-handling';
import { Dealer } from '../src/objects/dealer';
import { Vehicle } from '../src/objects/vehicle';
import { Constants } from '../src/utilities/constants';

export class TestBase{

  /**
   * Get Dealer Account
   * @returns object
   */
    getDealerAccount():object {
      let dealer = DataHandling.parseDealerInfoFromFile(Constants.DEALER_ACCOUNT_FILE_NAME);
      return new Dealer().initiateDealerInfo(dealer);
  }

  /**
   * Get Vehicle Info
   * @returns object
   */
  getVehicleInfo():object {
      const vehicle = DataHandling.parseVehicleInfoFromFile(Constants.VEHICLE_FILE_NAME)
      return new Vehicle().initiateVehicleInfo(vehicle);
  }
}
