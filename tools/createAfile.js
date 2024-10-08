import fs from "fs";
import { Server } from "http";
import path from "path"
import internal from "stream";
import { fileURLToPath } from "url";
const createAfile = (fileName, fileData) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const p = path.join(__dirname, "..", "root", fileName);
    try {
        fs.writeFileSync(p, fileData);
        return true;
    }
    catch(e) {
        return False;
    }

};

export default createAfile;
