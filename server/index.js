const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const { argv: [, , port], env: { PORT = port || 8080 } } = process
app.set('json spaces', 2)


//json middleware
app.use(express.json())

//routes
app.use(require('./routes/index'));


//start server
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})