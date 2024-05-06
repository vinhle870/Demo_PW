import { promises as fsPromises } from 'fs';

export class fileHandler {
    /**
     * Read raw data from .xml, .json, .txt
     * @param filepath
     * @returns string
     */
    static async readRawFile(filepath: string) {
        const data = await fsPromises.readFile(filepath, 'utf-8');
        return data;
    }

}