const {Sequelize} = require('sequelize');
const {
    DB_DIALECT,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USER,
    DB_PASSWORD
} = process.env;


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT
});

sequelize.authenticate()
.then(d => console.log("db connected"))
.catch(e => console.log(`db error while connecting ${e}`))

module.exports = sequelize;