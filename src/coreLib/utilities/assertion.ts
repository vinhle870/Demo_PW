import { expect } from "@playwright/test"

export class assertion
{
    static assertTextExact = (actualText:string,expectedText:string)=>
    {
        expect.soft(actualText).toEqual(expectedText)
    }

}