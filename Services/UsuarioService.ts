import { database } from "../Repository/Database";
import { UsuarioModel } from "../Models/UsuarioModel";
import { Token } from "./TokenService";

export class UsuarioService {
    static ListAllUsers = async (): Promise<Array<UsuarioModel>> => {
        const users = await database.users.findMany();
        return users.map((elem: any) => new UsuarioModel(elem));
    }

    static GetUserByEmail = async (findemail: string): Promise<Array<UsuarioModel>> => {
        const users = await database.users.findMany({
            where: { email: findemail }
        });
        return users.map((elem: any) => new UsuarioModel(elem));
    }

    static Login = (user: UsuarioModel): string => {
        return Token.CeateToken(user);
    }

    static GetUserById = async (findId: number): Promise<UsuarioModel | null> => {
        let users: Array<UsuarioModel> = await database.$queryRaw<Array<UsuarioModel>>`SELECT * FROM semed_manaus.users where id = ${findId};`;
        if (!users) {
            return null;
        }
        users = users.map((elem: any) => new UsuarioModel(elem));
        return users[0];
    }
}