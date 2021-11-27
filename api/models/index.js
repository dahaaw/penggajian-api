const initModel = require('./init-models');
const dbConnect = require('../helper/db/connect');

// dbConnect.sync().catch((err) => console.log(err));

const runModel = initModel(dbConnect);

module.exports = runModel;