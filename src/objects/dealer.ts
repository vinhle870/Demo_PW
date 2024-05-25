import { DataHandling } from "../data-handling/data-handling";
export class Dealer {

    /**
     * Get Dealer Login Account
     * @param dealer
     * @returns
     */
    initiateDealerInfo(dealer:object):object {

        dealer['UserName'] = process.env.DealerUserName as string;
        dealer['PassWord'] = process.env.DealerPassWord as string;
        dealer['DealerName'] = process.env.DealerName as string;
        dealer['Url'] = process.env.DealerUrl as string;
        return dealer;
    }

}