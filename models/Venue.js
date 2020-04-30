const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Venue extends Model {}

Venue.init({
    placeName: {
        type: DataTypes.STRING,
        field: 'place_name',
        allowNull: false
    },
    showId: {
        type: DataTypes.STRING,
        field: 'show_id',
        allowNull: false
    },
    city:{
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'venues',
    underscored: true,
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

Venue.associate = ( models ) => {
    Venue.hasOne(models.Show);
};

module.exports = Venue;
