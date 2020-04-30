const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Show extends Model {}

Show.init({
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'shows',
    underscored: true,
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

Show.associate = ( models ) => {
    Show.hasOne(models.Venue);
    Show.hasMany(models.Performance);
    Show.hasMany(models.Ticket);
};

module.exports = Show;
