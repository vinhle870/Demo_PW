import { promises as fsPromises } from 'fs';

export class fileHandler

{
    txtData:string;
   

    constructor()
    {

    }

    async readFile(filepath:string)
    {
       
        // Read the Txt file
        await fsPromises.readFile(filepath, 'utf-8')
        .then((rawdata) => {

            this.txtData = rawdata;
            
            })
        .catch((error) => {
        console.error('Error reading file:', error);
        });
    }

    async getFileContent()
    {
       
        return this.txtData;
    }


}