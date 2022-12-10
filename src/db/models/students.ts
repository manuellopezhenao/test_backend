import { DataTypes } from 'sequelize';
import { sequelize } from '../connection';

const TestStudents = sequelize.define('test_students', {
    s_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name : {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lv_id : {
        type: DataTypes.SMALLINT("6"),
        allowNull: true,
    },
    group : {
        type: DataTypes.STRING(5),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    phone_number: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    geolocation: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    status: {
        type: DataTypes.TINYINT("1"),
        allowNull: false,
        defaultValue: 1,
    }
},{
    timestamps: false,
});

TestStudents.sync({force: false}).then(() => {
    console.log('TestStudents table created');
});

export {TestStudents};

