import { Dealer } from "../businessEntities/Dealer";
import * as dotenv from 'dotenv';

export class envReader{

      constructor()
    {
         
    }
    
      static async getDealerAccountLogin()
    {
      dotenv.config();  
      let dealerLogin = new Dealer();
        let username = process.env.DealerUsername as string;
        let pass = process.env.DealerPassword as string;

        await dealerLogin.setUserName(username) ;
        
        await dealerLogin.setPassword(pass) ;
       
        return dealerLogin;


    }

    static async getDealerUrl()
    {
      dotenv.config();    
      return process.env.DealerUrl as string;
    }
}
