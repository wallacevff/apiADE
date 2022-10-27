import jasonwebtoken, { JwtPayload, SignOptions } from "jsonwebtoken";
import { UsuarioModel } from "../Models/UsuarioModel";

export class Token {
    static CeateToken(user: UsuarioModel) {
        const payload: JwtPayload = {
            id: user.Id
        };
        const token: string = jasonwebtoken.sign(payload, process.env.SECRET as string);
        return token;
    }

    static VerificaToken(token : string){
        try{
            const payload : string | JwtPayload = jasonwebtoken.verify(token, process.env.SECRET as string);
            return payload;
        }
        catch(e){
            throw new Error("Token Inválido");
        }  
    }

    static AdquirirTokenRequest(tokenUnhandled : string): string {
        try{
            return tokenUnhandled.replace("Bearer ", "");
        }        
        catch(e){
            throw new Error("Token Inválido!");
        }
    }
} 