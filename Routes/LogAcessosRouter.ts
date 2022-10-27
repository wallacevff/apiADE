import { Express, Request, Response } from "express";
import { UsuarioController } from "../Controller/UsuarioController"
import { AuthMiddlware } from "../Middlwares/AuthMiddlware";
import { LogAcessosController } from "../Controller/LogAcessosController";
//import * as AuthStrategy from "../Strategy/AuthStrategy";

export class LogAcessosRouter {
    static Rotear(app: Express) {
        app.route("/LogAcessos")
            .get(AuthMiddlware.Bearer, LogAcessosController.Listar);
    }
}