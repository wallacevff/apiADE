import { database } from "../Repository/Database";
import { UsuarioModel } from "../Models/UsuarioModel";
import { Token } from "./TokenService";
import { RegistrarErro } from "./LogFileService";
const path: string = "[/Services/UsuarioService/";

export class UsuarioService {
    static ListAllUsers = async (): Promise<Array<UsuarioModel>> => {
        try {
            const users = await database.users.findMany();
            return users.map((elem: any) => new UsuarioModel(elem));
        }
        catch (e: any) {
            RegistrarErro(path + "ListAllUsers]: " + (e as Error).message);
            throw new Error((e as Error).message);
        }
    }

    static GetUserByEmail = async (findemail: string): Promise<Array<UsuarioModel>> => {
        try {
            const users = await database.users.findMany({
                where: { email: findemail }
            });
            return users.map((elem: any) => new UsuarioModel(elem));
        }
        catch (e: any) {
            RegistrarErro(path + "GetUserByEmail]: " + (e as Error).message);
            throw new Error((e as Error).message);
        }
    }

    static Login = (user: UsuarioModel): string => {
        try {
            return Token.CeateToken(user);
        }
        catch (e: any) {
            RegistrarErro(path + "Login]: " + (e as Error).message);
            throw new Error((e as Error).message);
        }
    }

    static GetUserById = async (findId: number): Promise<UsuarioModel | null> => {
        try {
            let users: Array<UsuarioModel> = await database.$queryRaw<Array<UsuarioModel>>`SELECT * FROM semed_manaus.users where id = ${findId};`;
            if (!users) {
                return null;
            }
            users = users.map((elem: any) => new UsuarioModel(elem));
            return users[0];
        }
        catch(e: any){
            RegistrarErro(path + "GetUserById]: " + (e as Error).message);
            throw new Error((e as Error).message);
        }
    }
}