const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Ticket extends Model {}

Ticket.init({
    // fullName: {
    //     type: DataTypes.STRING,
    //     field: 'full_name',
    //     allowNull: false
    // }
    placeNumber: {
        type: DataTypes.INTEGER,
        field: 'place_number',
        allowNull: false
    },
    rowNumber:{
        type: DataTypes.INTEGER,
        field: 'row_number',
        allowNull: false
    },
    additionalServ: {
        type: DataTypes.STRING,
        field: 'additional_serv',
        allowNull: false
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    visitorId: {
        type: DataTypes.INTEGER,
        field: 'visitor_id',
        allowNull: false
    },
    showId: {
        type: DataTypes.INTEGER,
        field: 'show_id',
        allowNull: false
    },
},{
    sequelize,
    modelName: 'tickets',
    underscored: true,
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

Ticket.associate = ( models ) => {
    Ticket.belongsTo(models.Show);
    Ticket.hasOne(models.Visitor);
};

module.exports = Ticket;
