const Contenedor = require('./classes/Contenedor');
const contenedor = new Contenedor();
const express = require('express');

const app = express();
const archivoRutas = require('./rutas/index.js')
const PORT = process.env.PORT||8080;

const server = app.listen(PORT, ()=>{
    console.log("Servidor escuchando en: " +PORT)
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.send('Bienvenido al PokeShop');
})

app.use('/api/productos', archivoRutas);


