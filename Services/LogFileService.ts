import fs from 'fs';


export function RegistrarErro(texto: string) {
    var now = new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Fortaleza'
    });
    const nowDay = now.replace
    fs.appendFile('Logs/Erro.log', '\r\n ' + now + ' - '
        + texto, (err: any): void => {
            if (err) throw new Error(err.message);
        });

    //console.log(dateFormat(new Date(), "dd-mm-yyyy") + '.txt', '\r\n ' + now + ' - ' + texto);
}

