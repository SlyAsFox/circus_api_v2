const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Inventory extends Model {}

Inventory.init({
    // fullName: {
    //     type: DataTypes.STRING,
    //     field: 'full_name',
    //     allowNull: false
    // }
    itemName: {
        type: DataTypes.STRING,
        field: 'item_name',
        allowNull: false
    },
    itemType: {
        type: DataTypes.STRING,
        field: 'item_type',
        allowNull: false
    },
    itemSize: {
        type: DataTypes.INTEGER,
        field: 'item_size',
        allowNull: false
    },
    specialization:{
        type: DataTypes.STRING,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'inventorys',
    underscored: true,
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

Inventory.associate = ( models ) => {
    Inventory.belongsTo(models.Artist);
};

module.exports = Inventory;
