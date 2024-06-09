import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

export const Factory = sequelize.define('factory', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});
