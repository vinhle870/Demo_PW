import { jsonHandler } from "../coreLib/utilities/jsonHandler";
import { BUSINESS_ENTITY_FOLDER } from "../coreLib/utilities/constants";
import * as dotenv from 'dotenv';

export class envReader {


  static async getDealerAccountLogin() {
    dotenv.config();
    const dealerLogin = await jsonHandler.parseJsonTextToObject(BUSINESS_ENTITY_FOLDER + "dealer.json") as object;
    const username = process.env.DealerUsername as string;
    const pass = process.env.DealerPassword as string;
    dealerLogin['username'] = username;
    dealerLogin['password'] = pass;
    return dealerLogin;
  }

  static async getDealerUrl() {
    dotenv.config();
    const url = process.env.DealerUrl as string;
    return url;
  }
}
