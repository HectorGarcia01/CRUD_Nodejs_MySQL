const express = require('express');                                         //Cargamos el módulo express
const router = express.Router();                                            //Definimos una instancia de express
const customerController = require('../controllers/customer.controller');   //Cargqamos el controlador customer

//Configuramos una ruta get
router.get('/', customerController.list);

//Configuramos una ruta post
router.post('/add/customer', customerController.add);

//Configuramos una ruta get
router.get('/update/customer/:id', customerController.read);

//Configuramos una ruta post
router.post('/update/customer/:id', customerController.update);

//Configuramos una ruta get
router.get('/delete/customer/:id', customerController.delete);

module.exports = router;