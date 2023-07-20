//Definimos un objeto vacío
const controller = {};

//Definimos una propiedad para listar clientes
controller.list = (req, res) => {
    //Pedimos una conexión a mysql
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM customer', (err, customers) => {
            //En caso de obtener un error
            if (err) {
                //Enviamos un estado 400 con el error
                res.status(400).send({ error: "Error al listar los clientes.", err });
            }

            //Renderizamos la vista customers.ejs
            res.render('customers', { customers });
        });
    });
};

//Definimos una propiedad para crear nuevo cliente
controller.add = (req, res) => {
    //Obtenemos los datos del formulario
    const data = req.body;

    //Pedimos una conexión a mysql
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customer set ?', [data], (err, customer) => {
            //En caso de obtener un error
            if (err) {
                //Enviamos un estado 400 con el error
                res.status(400).send({ error: "Error al crear el cliente.", err });
            }

            //Redireccionamos a la ruta principal
            res.redirect('/');
        });
    });
}


//Exportamos el objeto
module.exports = controller;