import { Express, Request, Response } from "express";
import { UsuarioRota } from "./Routes/UsuarioRouter";
import * as AuthStrategy from "./Strategy/AuthStrategy";
import path from 'path';
const rootDir = path.resolve("./");

export class Router {
    app: Express;

    constructor(app: Express) {
        this.app = app;

        this.app.listen(process.env.PORT, () => console.log(`Api listening on port: ${process.env.PORT}`));

        this.app.get("/", (req: Request, res: Response) => res.send(`Hello World! ${rootDir}`));
        UsuarioRota.Rotear(this.app);
    }
}