const express = require('express')
const app = express()
const port = 80

app.use(express.static('./frontend/build'))

app.listen(port, () => console.log('Server has been started by port on 80'))