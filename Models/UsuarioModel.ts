import { PrismaClient } from "@prisma/client";
export class UsuarioModel {
    Id: number;
    Nome: string;
    Email: string;
    Senha: string;
    Id_Grupo : Number;

    constructor(obj: any) {
        this.Id = obj.id;
        this.Nome = obj.name;
        this.Email = obj.email;
        this.Senha = obj.password;
        this.Id_Grupo = obj.ID_GRUPO;
    }
}