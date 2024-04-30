export class Dealer
{
    constructor()
    {

    };

    username:string;
    password:string;
 
    async setUserName(username:string)
    {
        this.username = username;
    }

    async setPassword(password:string)
    {
        this.password = password;
    }
}