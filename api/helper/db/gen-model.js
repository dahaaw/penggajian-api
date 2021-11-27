require('dotenv').config();
'use strict';
const child_process = require('child_process');

console.log(process.env.DB_HOST);
const { exec } = child_process;
const modelName = process.argv[2];
const database = {
  // [required] * Database address
  host: process.env.DB_HOST,
     // [required] * Database name
  database: process.env.DB_NAME,
     // database username 
  user: process.env.DB_USER,
     // Database password
  pass: process.env.DB_PASSWORD,
     // Database port number
  port: process.env.DB_PORT,
     // Sequelize's constructor "options" marks the JSON file path of the object
  config: '',
     // Output file path
  output: './models',
     // Database type: postgres, mysql, sqlite
  dialect: process.env.DB_DIALECT,
     // The path to the JSON file defined by the model defined in the model's configuration parameters
  additional: '',
     // Table name, multiple table names are separated by commas
  tables: modelName || '',
     // Table names to be skipped, multiple table names are separated by commas
  'skip-tables': '',
     // Use camel case to name models and fields
  camel: true,
     // Whether to write to the file
  'no-write': false,
     // The database schema from which to retrieve the table
  schema: false,
     // Export the model as a typescript file
  typescript: false,
};
 
let connectShell = 'sequelize-auto';
for (const i in database) {
  const value = database[i];
  if (value) {
    if (value === true) {
      connectShell += ` --${i}`;
    } else {
      connectShell += ` --${i} ${value}`;
    }
  }
}
exec(connectShell, (err, stdout, stderr) => {
  console.log(`stderr: ${stderr}`);
  console.log(`stdout: ${stdout}`);
  if (err) {
    console.log(`exec error: ${err}`);
  }
});