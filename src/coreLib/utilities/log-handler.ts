import { LogLevel } from "../../enum/loglevel";


export class LogHandler
{
    static async printlog(message:string,level:LogLevel)
    {
        if(LogLevel.DEBUG || LogLevel.INFO || LogLevel.TRACE)
            console.log(level+": "+message);
        else if(LogLevel.ERROR)
            console.error(level+": "+message);
            

    }
}