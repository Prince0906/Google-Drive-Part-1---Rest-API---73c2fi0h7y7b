import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const getAllFiles = (req,res) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const getpath = path.join(__dirname, "..", "root");
    res.status(200).send({files: fs.readdirSync(getpath)})
};

export default getAllFiles;
