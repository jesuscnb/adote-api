const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require('compression');
const mongoose = require('mongoose');
const config = require('./config/config');

const app = express();
app.use(compression());
app.use(cors());

mongoose.connect(config.MONGODB_URL, config.mongoOptions).then(data => {
    console.log('Connected to ' + config.MONGODB_URL)
}).catch(err => {
    console.log('Failed to Connect ' + config.MONGODB_URL)
})

// parse requests of content-type - application/json
app.use(bodyParser.json({limit: '50mb'}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

require('./routes/raca.routes')(app);
require('./routes/responsavel.routes')(app);
require('./routes/pet.routes')(app);

const PORT = process.env.APP_HOST || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
