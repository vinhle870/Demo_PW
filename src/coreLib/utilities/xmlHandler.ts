
import { parseString } from 'xml2js';
import { fileHandler } from './fileHandler';

export class xmlHandler extends fileHandler

{
    xmlObject:any;

   
/**
 * Convert xml format text to javascript object
 * @param filepath 
 * @returns return javascript object or undefined value if any error
 */
    async parseXmlDataToObject(filepath:string): Promise<object|undefined>
    {
        try {
            
            let xmlData;
            let rawdata = await this.readRawFile(filepath) as string; 
            parseString(rawdata, (err,result)=>{
                xmlData = result;
            });
            return xmlData;
          } catch (error) {
            console.error('Error reading or parsing XML file:', error);
            return undefined;
          }
    }

  

}