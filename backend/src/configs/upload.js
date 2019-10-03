//Importando o multer
const multer = require('multer');

//Importando o modulo path para indicar o caminho de pastas e arquivos
const path = require('path');

//Exportando o método para realizar o upload do arquivo dentro da pasta uploads
module.exports = {
    storage: multer.diskStorage({
       destination: path.resolve(__dirname, '..', '..', 'uploads'),
       filename: (req, file, cb) => {

            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

           cb(null, `${name}-${Date.now()}${ext}`);
       } 
    }),
}