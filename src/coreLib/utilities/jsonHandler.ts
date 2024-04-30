import { fileHandler } from "./fileHandler";
export class jsonHandler extends fileHandler
{
    jsonObject:object
    constructor()
    {
        super();
    }
    
    async parseJsonTextToObject(filepath:string):Promise<object | undefined>
    {
        try{
        await this.readFile(filepath); 
       
        this.jsonObject = JSON.parse(await this.getFileContent());
        return this.jsonObject;
        }
        catch(error)
        {
            console.error('Error reading or parsing JSON file:', error);
            throw error; // Or return a default value
        }

    }//func


}