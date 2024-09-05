import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const updateAfile = (req, res) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const {fileName}= req.params;
    const {updatedFileName, newFileData} = req.body;
    try{
        const p = path.join(__dirname, "..", "root", fileName);

        fs.writeFileSync(p, newFileData);
        const p1 = path.join(__dirname, "..", "root", updatedFileName)
        fs.renameSync(p, p1);
        res.status(200).send({
            "message": "File updated successfully"
        })
    }
    catch(e) {
        console.log(e)
        res.status(500).send({
            message: "Internal Server Error"
        })
    }

};

export default updateAfile