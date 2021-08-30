const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();
const cors = require('cors');

app.use(express.static(__dirname + '/front'));


mongoose.connect(process.env.MONGO_URL,{
});

app.use(cors())
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
    console.log(`Servidor rodando na url http://localhost:8081`);
});



