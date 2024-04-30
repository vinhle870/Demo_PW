import { getProperties } from 'properties-file';
import { readFileSync } from 'node:fs'
export class propertiesReader
{
    constructor()
    {
        
    }
    
    static async readProperties(filePath: string): Promise<Record<string, string>> {
        try {
          const properties = await getProperties(readFileSync(filePath));
          console.dir(properties);
          return properties;
        } catch (error) {
          console.error('Error reading properties file:', error);
          throw error; // Re-throw the error for handling
        }
      }

}