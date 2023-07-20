const express = require('express');                                 //Cargamos el módulo express
const path = require('path');                                       //Cargamos el módulo path
const morgan = require('morgan');                                   //Cargamos el módulo morgan
const mysql = require('mysql');                                     //Cargamos el módulo mysql
const myConnection = require('express-myconnection');               //Cargamos el módulo express-myconnection
const customerRoutes = require('./routes/customer.routes');         //Cargamos las rutas
const {
    HOST,
    USER,
    PASSWORD,
    PORT,
    DATABASE
} = require('./config/config')                                      //Cargamos las variables de entorno
const app = express();               //Inicializamos express

//Configuración de express
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Configuración de middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(myConnection(mysql, {
    host: HOST,
    user: USER,
    password: PASSWORD,
    port: PORT,
    database: DATABASE
}, 'single'));

//Configuración de rutas
app.use('/', customerRoutes);

//Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//Inicializamos el servidor en el puerto 3000
app.listen(app.get('port'), () => {
    console.log("Servidor inicializado en el puerto 3000")
});