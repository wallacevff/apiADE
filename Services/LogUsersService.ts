import { database } from "../Repository/Database";
import { LogAcessosModel } from "../Models/LogAcessosModel";

export class LogUsersService {
    static CreateLogUser = async (obj: any): Promise<void> => {
        console.log(obj);
        await database.$queryRaw`INSERT INTO 
       bi_semed.users_log(id_user, acesso) VALUES(
        ${obj.id_user as number}, ${obj.acesso as string});`;
    }

    static ListAll = async (): Promise<Array<LogAcessosModel>> => {
        
        let obj : any  = await database.$queryRaw`SELECT name, GRUPO,  QTD_ACESSO, ULTIMO_ACESSO FROM bi_semed.log_acessossemed;`;
        obj = obj.map((obj : any) => new LogAcessosModel(obj));
        console.log(obj);
        return obj
    }
}