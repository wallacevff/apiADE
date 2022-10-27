import { Express, Request, Response } from "express";
import { UsuarioController } from "../Controller/UsuarioController"
import { AuthMiddlware } from "../Middlwares/AuthMiddlware";
//import * as AuthStrategy from "../Strategy/AuthStrategy";

export class UsuarioRota {
    static Rotear(app: Express) {
        app.route("/usuario")
            .get(UsuarioController.Listar);

        app.route("/usuario/getUsu")
            .post(UsuarioController.GetUsuByEmail);

        app.route("/usuario/getbyid")
            .post(AuthMiddlware.Bearer, UsuarioController.GetUsuById);

        app.route("/usuario/auth")
            .post(AuthMiddlware.Bearer, UsuarioController.Auth);

        app.route("/usuario/log")
            .post(AuthMiddlware.Bearer, UsuarioController.Log);

    }
}