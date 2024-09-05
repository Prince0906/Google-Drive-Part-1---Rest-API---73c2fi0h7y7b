import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const getAFile = (req, res) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const {fileName}= req.params;
    try{
        const p = path.join(__dirname, "..", "root", fileName)
        const k =fs.readFileSync(p, 'utf-8');
        res.status(200).send({fileContent: k, message: "success"});
    }
    catch(e){
        res.status(400).send({message: "File does not exist"});
    }
}

export default getAFile;