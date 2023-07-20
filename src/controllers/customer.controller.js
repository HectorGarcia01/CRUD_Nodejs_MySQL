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

//Definimos una propiedad para obtener los datos de un cliente
controller.read = (req, res) => {
    //Obtenemos el id del cliente
    const { id } = req.params;

    //Pedimos una conexión a mysql
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM customer WHERE id = ?', [id], (err, customer) => {
            //En caso de obtener un error
            if (err) {
                //Enviamos un estado 400 con el error
                res.status(400).send({ error: "Error al borrar el cliente.", err });
            }

            //Renderizamos la vista customer_edit.ejs
            res.render('customer_edit', {
                customer: customer[0]
            });
        });
    });
}

//Definimos una propiedad para actualizar los datos de un cliente
controller.update = (req, res) => {
    //Obtenemos el id del cliente
    const { id } = req.params;

    //Obtenemos los datos a actualizar
    const data = req.body;

    //Pedimos una conexión a mysql
    req.getConnection((err, conn) => {
        conn.query('UPDATE customer set ? WHERE id = ?', [data, id], (err, rows) => {
            //En caso de obtener un error
            if (err) {
                //Enviamos un estado 400 con el error
                res.status(400).send({ error: "Error al borrar el cliente.", err });
            }

            //Redireccionamos a la ruta principal
            res.redirect('/');
        });
    });
}

//Definimos una propiedad para eliminar un cliente
controller.delete = (req, res) => {
    //Obtenemos el id del cliente
    const { id } = req.params;

    //Pedimos una conexión a mysql
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
            //En caso de obtener un error
            if (err) {
                //Enviamos un estado 400 con el error
                res.status(400).send({ error: "Error al borrar el cliente.", err });
            }

            //Redireccionamos a la ruta principal
            res.redirect('/');
        });
    });
}

//Exportamos el objeto
module.exports = controller;