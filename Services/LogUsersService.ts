import { database } from "../Repository/Database";
import { LogAcessosModel } from "../Models/LogAcessosModel";
import { RegistrarErro } from "./LogFileService";
const path : string = "[/Services/LogUsersService/";

export class LogUsersService {
    static CreateLogUser = async (obj: any): Promise<void> => {
        //console.log(obj);
        await database.$queryRaw`INSERT INTO 
        bi_semed.users_log(id_user, acesso) VALUES(
        ${obj.id_user as number}, ${obj.acesso as string});`;
    }

    static ListAll = async (): Promise<Array<LogAcessosModel>> => {
        try {
            let obj: any = await database.$queryRaw`SELECT name, GRUPO,  QTD_ACESSO, ULTIMO_ACESSO FROM bi_semed.log_acessossemed;`;
            obj = obj.map((obj: any) => new LogAcessosModel(obj));
            return obj
        }
        catch (e) {
            RegistrarErro(path + "ListAll]: " + (e as Error).message);
            throw new Error(path + "ListAll]: " + (e as Error).message);
        }
        
    }
}