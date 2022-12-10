
import { Sequelize } from "sequelize";
import { config } from "../../configs/config";

console.log(config);

const sequelize = new Sequelize(config.DATA_BASE_NAME, config.USER, config.PASSWORD, {
    host: config.DATA_BASE_URL,
    dialect: 'mysql',
    logging: false,
    define: {
        freezeTableName: true
    }
});

import "./relations";



export {sequelize};