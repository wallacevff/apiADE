import { database } from "../Repository/Database";

export class LogUsersService{
    static CreateLogUser = async (obj : any) : Promise<void> => {
        console.log(obj);
       await database.$queryRaw`INSERT INTO 
       bi_semed.users_log(id_user, acesso) VALUES(
        ${obj.id_user as number}, ${obj.acesso as string});`;
    }
}