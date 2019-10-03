//Importando o express
const express = require('express');

//Importando o multer
const multer = require('multer');

//Importando as configurações de upload do multer
const uploadConfig = require('./configs/upload');

//Importando controle de sessão
const SessionController = require('./controller/SessionController');

//Importando controle de spot
const SpotController = require('./controller/SpotController');

//Importando controle de dashboard
const DashBoardController = require('./controller/DashboardController');

//Importando controle de dashboard
const BookingController = require('./controller/BookingController');

//Criando o local para exportação de rotas
const routes = express.Router();

//Inicializando o multer com a configuração
const upload = multer(uploadConfig);

//Definindo a de registro
routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);

routes.get('/dashboards', DashBoardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;