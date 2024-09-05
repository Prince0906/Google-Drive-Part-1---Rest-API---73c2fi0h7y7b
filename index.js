import express from 'express';
import  createAfile from './tools/createAfile.js';
import getAFile from './tools/getAFile.js';
import getAllFiles from './tools/getAllFilename.js';
import updateAfile from './tools/updateAfile.js';
import deleteAFile from './tools/deleteAFile.js';
const app = express();
const port = 8000;

app.use(express.json());
app.get("/file", getAllFiles);
app.get("/file/:fileName", getAFile);
app.post("/file/create", (req, res) => {
  const {fileName, fileData} = req.body;
  if (createAfile(fileName, fileData)) {
    res.status(200).send({"message": "File created successfully"});
  }
  else{
    res.status(500).send({message: "Internal Server Error"});
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

export default app;
