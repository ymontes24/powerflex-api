import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';
import { Factory } from '../../models/index.model.js';

const SprocketProduction = sequelize.define('sprocket_production', {
    actual_production: {
        type: DataTypes.INTEGER
    },
    goal_production: {
        type: DataTypes.INTEGER
    },
    timestamp: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false,
    tableName: 'sprocket_production'
});

SprocketProduction.belongsTo(Factory, { foreignKey: 'factory_id' });
Factory.hasMany(SprocketProduction, {
    foreignKey: 'factory_id',
    as: 'sprocketProduction'
});

export { SprocketProduction }
