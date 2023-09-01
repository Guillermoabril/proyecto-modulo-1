// llamar la librerias
const express = require('express')

//rutas importadas


// definir los funciones a utilizar
const app = express()

app.use(express.json())

//


// definir el puerto
const port = 4000

// importamos rutas de usuario



// iniciar el servidor
app.listen(port, () => console.log(`Server is running in port ${port}`))