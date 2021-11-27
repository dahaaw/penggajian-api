require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const {PORT} = process.env;
const routes = require('./routes');

app.use(cookieParser());
app.use(express.json());

routes(app);

app.listen(PORT, () => console.log(`server run in port ${PORT}`))