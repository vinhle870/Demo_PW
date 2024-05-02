import { fileHandler } from "./fileHandler";
export class jsonHandler extends fileHandler
{
    jsonObject:object
       
    /**
     * Parse json String to javascript Object
     * @param filepath 
     * @returns javascript object or undefined if getting any error
     */
    async parseJsonTextToObject(filepath:string):Promise<object | undefined>
    {
        try{
        let rawdata = await this.readRawFile(filepath) as string; 
       
        this.jsonObject = JSON.parse(rawdata);
        return this.jsonObject;
        }
        catch(error)
        {
            console.error('Error reading or parsing JSON file:', error);
            throw error; // Or return a default value
        }

    }//func


}