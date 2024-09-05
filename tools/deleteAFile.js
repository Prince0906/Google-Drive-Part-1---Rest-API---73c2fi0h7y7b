import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const deleteAFile = (fileName) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const p = path.join(__dirname, "..", "root", fileName)
    try{
        fs.unlinkSync(p)
        return true;
    }
    catch(e) {
        return false;
    }


};

export default deleteAFile;
