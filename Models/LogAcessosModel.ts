export class LogAcessosModel {
    Nome: string;
    Grupo: number;
    QtdAcesso: number;
    UltimoAcesso: Date;


    constructor(obj: any) {
        this.Nome = obj.name;
        this.Grupo = obj.GRUPO;
        var q : number = Number(obj.QTD_ACESSO)
        //console.log(typeof(q));
        this.QtdAcesso = q;
        this.UltimoAcesso = obj.ULTIMO_ACESSO;
    }
}