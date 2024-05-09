import { TxtHandling } from './txtHandling';
export class JsonHandling extends TxtHandling
{

    /**
     * Parse json String to javascript Object
     * @param filepath
     * @returns javascript object or undefined if getting any error
     */
    static async parseJsonTextToObject(filepath:string):Promise<object | undefined>
    {
        try{
        const rawdata = await this.readRawFile(filepath) as string;
        const jsonObject = JSON.parse(rawdata);

        return jsonObject;
        }catch(error){
            console.error('Error reading or parsing JSON file:', error);
            throw error; // Or return a default value
        }

    }//func


}