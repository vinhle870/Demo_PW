
import { parseString } from 'xml2js';
import { fileHandler } from './fileHandler';

export class xmlHandler extends fileHandler

{
    xmlObject:any;

    constructor()
    {
        super();
    }
/**Return xmlObject: object */
    async parseXmlDataToObject(filepath:string)
    {
        try {
            
            let xmlData;
            await this.readFile(filepath); 
            console.log("Raw Data: "+ await this.getFileContent());
            parseString(await this.getFileContent(), (err,result)=>{
                xmlData = result;
            });
            return xmlData;
          } catch (error) {
            console.error('Error reading or parsing XML file:', error);
            return undefined;
          }
    }

  

}