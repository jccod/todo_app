const express = require("express");
const cors = require("cors")
const db = require('./src/utils/database')
const Todo = require('./src/models/todo.models')
const todoRoutes = require('./src/routes/todo.routes')

Todo;

const PORT = 8001;

db.authenticate()
    .then(() => {
        console.log('Successful database connection')
    })
    .catch((error) => {
        console.log(error)
    })

db.sync()
    .then(() => {
        console.log('Database synchronized')
    })
    .catch((error) => {
        console.log(error)
    })

const app = express();


app.use(cors());
app.use(express.json());
app.use(todoRoutes);

app.get('/user', (req, res) => {
    res.send('Bienvenido a mi servidor')
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

