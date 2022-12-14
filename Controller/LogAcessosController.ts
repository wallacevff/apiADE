import { Request, Response } from "express";
import { LogUsersService } from "../Services/LogUsersService";
import { LogAcessosModel } from "../Models/LogAcessosModel";
export class LogAcessosController {
    static Listar = async (req: Request, res: Response) => {
        //console.log("Rota acessada");
        const logs: Array<LogAcessosModel> = await LogUsersService.ListAll();
        res.json(logs);
    }
  
}