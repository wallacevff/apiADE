import { Request, Response } from "express";
import { UsuarioModel } from "../Models/UsuarioModel";
import { Token } from "../Services/TokenService";
import { UsuarioService } from "../Services/UsuarioService";
import { LogUsersService } from "../Services/LogUsersService";
const path : string = "[/Controllers/UsuarioController/";


export class UsuarioController {
    static Listar = async (req: Request, res: Response) => {
        const users: Array<UsuarioModel> = await UsuarioService.ListAllUsers();
        res.json(users);
    }
    static Login = async (req: Request, res: Response) => {
        const usu = req.body.email;
        const foundUser: Array<UsuarioModel> = await UsuarioService.GetUserByEmail(usu);
        if (foundUser.length < 1) {
            return res.send("Usuário não encontrado!");
        }
        return res.send(Token.CeateToken(usu));
    }
    static GetUsuByEmail = async (req: Request, res: Response) => {
        try {
            //console.log(req.body);
            const usu = req.body.email;
            const foundUser: Array<UsuarioModel> = await UsuarioService.GetUserByEmail(usu);
            if (!foundUser[0]) {
                res.json({ erro: "Usuário não encontrado!" });
            }
            return res.send(foundUser[0]);
        }
        catch(e){
            return res.json({ erro: "Formatação incorreta da requisição." });
        }
    }

    static GetUsuById = async (req: Request, res: Response) => {

        const usu: number = (req.body.id as unknown) as number;
        const foundUser: UsuarioModel | null = await UsuarioService.GetUserById(usu);
        if (!foundUser) {
            res.json({ erro: "Usuário não encontrado!" });
        }
        res.send(foundUser);
    }

    static Auth = async (req: Request, res: Response) => {

        const usu: string = (req.body.email as unknown) as string;
        if (!usu) {
            return res.json({ erro: "Usuário não encontrado!" });
        }
        const foundUser: Array<UsuarioModel | null> = await UsuarioService.GetUserByEmail(usu);
        if (foundUser.length < 1) {
            return res.json({ erro: "Usuário não encontrado!" });
        }
        res.setHeader("Authorization", Token.CeateToken(foundUser[0] as UsuarioModel));
        return res.send(foundUser[0]);
    }

    static Log = async (req: Request, res: Response) => {
       // console.log("Log Request");
        await LogUsersService.CreateLogUser(req.body);
        return res.status(201).send();
    }
}