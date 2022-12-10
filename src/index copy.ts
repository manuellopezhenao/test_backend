
import * as express from 'express';
import { sequelize } from "./db/connection";
import https = require('https');



const app = express();

//Routes
app.use(require('./routes/courses'));
app.use(require('./routes/students'));
app.use(require('./routes/coursestudents'));


app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({extended: true})); 
app.use(express.json());   



//Connection DATABASE
dbConnection();
async function dbConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

//Listen Server
app.listen(app.get("port"), () => {
    console.log('Example app listening on port 3000!');
});

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
};


