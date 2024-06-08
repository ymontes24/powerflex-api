import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

export const Sprocket = sequelize.define('sprockets', {
    teeth: {
        type: DataTypes.INTEGER
    },
    pitch_diameter: {
        type: DataTypes.DECIMAL(5, 2)
    },
    outside_diameter: {
        type: DataTypes.DECIMAL(5, 2)
    },
    pitch: {
        type: DataTypes.DECIMAL(5, 2)
    }
}, {
    timestamps: false
});
