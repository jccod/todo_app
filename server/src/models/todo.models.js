const { DataTypes} = require('sequelize');
const db = require('../utils/database');

const Todos = db.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING(12),
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = Todos;

