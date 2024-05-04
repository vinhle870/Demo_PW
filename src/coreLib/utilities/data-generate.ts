import { faker } from '@faker-js/faker';
import { format } from 'date-fns';

export class DataGenerate
{
    /**
     * select Randomly item from given list
     * @param array 
     * @returns string
     */
    static selectRandomlyInList(array:any[]):string
    {
        let length = array.length;
        let index = this.getRandomInt(0,length-1)
        return array[index];
    }

    /**
     * generate randomly the nunber in range
     * @param min 
     * @param max 
     * @returns 
     */
    static getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    /**
     * Generate Year from[20 year ago to current year]
     * @returns number
     */
    static generateYear():number
    {
        let currentYear = new Date().getFullYear();

        let year = this.getRandomInt(currentYear-20,currentYear);

        return year;
    }

    /**
     * Generate Amount
     * @returns number
     */
    static generateAmount():number
    {
            let amount = parseFloat(this.getRandomInt(1000.00,(1000.00*10)).toFixed(2));
            return amount;
    }

    /**
     * Generate Date
     * @param dateformat 
     * @returns string
     */
    static generateDate(dateformat:string):string
    {
        let currentDate = new Date();
        
        console.log(currentDate);

        return format(currentDate.setDate(currentDate.getDate()+0), dateformat);
    }


    
}