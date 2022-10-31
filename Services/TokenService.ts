import jasonwebtoken, { JwtPayload, SignOptions } from "jsonwebtoken";
import { UsuarioModel } from "../Models/UsuarioModel";
import { RegistrarErro } from "./LogFileService";
const path: string = "[/Services/TokenService/";

export class Token {
    static CeateToken(user: UsuarioModel) {
        try {
            const payload: JwtPayload = {
                id: user.Id
            };
            const token: string = jasonwebtoken.sign(payload, process.env.SECRET as string);
            return token;
        }
        catch(e: any){
            RegistrarErro(path + "CeateToken]: " + (e as Error).message);
            throw new Error("Erro na criação do Token");
        }
}

    static VerificaToken(token: string) {
        try {
            const payload: string | JwtPayload = jasonwebtoken.verify(token, process.env.SECRET as string);
            return payload;
        }
        catch (e) {
            RegistrarErro(path + "VerificaToken]: " + (e as Error).message);
            throw new Error("Token Inválido");
        }
    }

    static AdquirirTokenRequest(tokenUnhandled: string): string {
        try {
            return tokenUnhandled.replace("Bearer ", "");
        }
        catch (e) {
            RegistrarErro(path + "AdquirirTokenRequest]: " + (e as Error).message);
            throw new Error("Token Inválido!");
        }
    }
} 