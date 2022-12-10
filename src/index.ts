
import * as express from 'express';

const app = express();

import { sequelize } from "./db/connection";
import {config} from "../configs/config";
import * as morgan from "morgan";

//importsequelize related models
import "./db/relations";


// Settings
app.set("port", config.PORT);


//morgan
app.use(morgan("dev"));


// Middlewares
app.use(express.json({ limit: "50mb" }));

var cors=require('cors');
app.use(cors({origin:true,credentials: true}));


// Routes
app.use(require("./routes/courseStudents"));
app.use(require("./routes/courses"));
app.use(require("./routes/students"));

// Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")} `);
});

dbConnection();

async function dbConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

