const express = require('express')
const app = express()
const user = require('./routes/users')
const prod = require('./routes/product')
const public = require('./routes/publication')


app.use(express.json())
app.use('/app', user)
app.use('/app', prod)
app.use('/app', public)

require('./db')

const port = 4000


app.listen(port, () => console.log(`Server is running in port ${port}`))