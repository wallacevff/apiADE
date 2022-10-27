
import { Strategy as LocalStrategy, IStrategyOptions } from "passport-local";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import passport from "passport";
import { UsuarioService } from "../Services/UsuarioService";
import { UsuarioModel } from "../Models/UsuarioModel";
import jwt from "jsonwebtoken";



passport.use(
    new BearerStrategy(async (token: string, done: CallableFunction) => {
        try {
            const payload = jwt.verify(token, process.env.SECRET as string);
            const usuario: UsuarioModel | null = await UsuarioService.GetUserById((payload as UsuarioModel).Id as number);
            done(null, usuario);
        }
        catch (erro) {
            done(erro);
        }
    })
);