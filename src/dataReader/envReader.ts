import { Dealer } from "../businessEntities/dealer";
import * as dotenv from 'dotenv';

export class envReader{

     
      static async getDealerAccountLogin()
    {
      dotenv.config();  
      let dealerLogin = new Dealer();
        let username = process.env.DealerUsername as string;
        let pass = process.env.DealerPassword as string;

         dealerLogin.username = username;
        
         dealerLogin.password = pass ;
       
        return dealerLogin;


    }

    static async getDealerUrl()
    {
      dotenv.config(); 
      let url:string;
      url = process.env.DealerUrl as string;
      return url; 
    }
}
