import { JsonHandling } from '../coreLib/utilities/jsonHandling';
import { BUSINESS_ENTITY_FOLDER } from "../coreLib/utilities/constants";
import * as dotenv from 'dotenv';

export class envReader {


  static async getDealerAccountLogin() {
    let dealerLogin = await JsonHandling.parseJsonTextToObject(BUSINESS_ENTITY_FOLDER + "dealer.json") as object;
    const username = process.env.DealerUsername as string;
    const pass = process.env.DealerPassword as string;
    const name = process.env.DealerName as string;
    dealerLogin['username'] = username;
    dealerLogin['password'] = pass;
    dealerLogin['DealerName'] = name;
    console.dir(dealerLogin);
    return dealerLogin;
  }

  static async getDealerUrl() {
    const url = process.env.DealerUrl as string;
    return url;
  }
}
