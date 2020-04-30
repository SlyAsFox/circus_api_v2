const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Visitor extends Model {}

Visitor.init({
    // fullName: {
    //     type: DataTypes.STRING,
    //     field: 'full_name',
    //     allowNull: false
    // }
    initials: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sex:{
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false
    },
    phoneNumber:{
        type: DataTypes.INTEGER,
        field: 'phone_number',
        allowNull: false
    },
    mail:{
        type: DataTypes.STRING,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'visitors',
    underscored: true,
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

Visitor.associate = ( models ) => {
    Visitor.hasMany(models.Ticket);
};

module.exports = Visitor;
