
// npm init -y(iniciar el proyecto)
// npm install express (instalar el  framework)

// creamos nuestro comando de dev(iniciar nuestro proyecto)
// type : commonJs a  module (para modificar el tipo de importacion)
// src/index.js
// npm install cors dotenv
import app from "./app.js";
import "dotenv/config"

app.listen(process.env.PORT,()=>{
    console.log("Servidor corriendo en el puerto 3000 ")
})