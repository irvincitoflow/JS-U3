// configuracon de nuestro servidor

//importamos las librerias
import express from "express";
import cors from "cors"

// crear una instancia de express
const app = express();

//configuracion de cors
app.use(cors())
// configuracion para que lea archivos de formato JSON
app.use(express.json())

app.get("/", (req,res) =>{

    res.send("Holaa Mundo desde mi servidor epress")

})

// exportar para poder usarla en el index.js
export default app;