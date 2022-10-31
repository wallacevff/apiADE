import { database } from "../Repository/Database";
import stream from "stream";
const ps = new stream.PassThrough();

export class ResultadoService {
    static List = async () => {
        const list : any = await database.$queryRaw`SELECT count(*) AS \`rows\` FROM resultado;`;
       console.log(list);
        list[0].rows = Number(list[0].rows);
        
        return "/";
    }
}