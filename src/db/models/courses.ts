import { DataTypes } from 'sequelize';
import { sequelize } from '../connection';


const TestCourses = sequelize.define('test_courses', {
    c_id: {
        type: DataTypes.INTEGER("10"),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name : {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    credits : {
        type: DataTypes.SMALLINT("6"),
        allowNull: false,
    }
},{
    timestamps: false,
});

TestCourses.sync({force: false}).then(() => {
    console.log('TestCourses table created');
});

export {TestCourses};
