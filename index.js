const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();
const cors = require('cors');


mongoose.connect(process.env.MONGO_URL,{
});

app.use(cors())
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen (process.env.PORT || 5000)
app.listen('5000',() =>{
    console.log('rodando na porta 5000');



});

