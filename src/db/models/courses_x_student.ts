import { DataTypes } from 'sequelize';
import { sequelize } from '../connection';

const TestCoursesXStudent = sequelize.define('test_courses_x_student', {
    cxs_id: {
        type: DataTypes.INTEGER("10"),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    c_id: {
        type: DataTypes.INTEGER("10"),
        allowNull: false,
        references: {
            model: 'test_courses',
            key: 'c_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    s_id: {
        type: DataTypes.INTEGER("10"),
        allowNull: false,
        references: {
            model: 'test_students',
            key: 's_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },

},{
    timestamps: false,
});

TestCoursesXStudent.sync({force: false}).then(() => {
    console.log('TestCoursesXStudent table created');
});

export {TestCoursesXStudent};