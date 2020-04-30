const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Animal extends Model {}

Animal.init({
    nickname: {
        type: DataTypes.STRING,
        allowNull: true
    },
    weight:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    age: {
        type: DataTypes.INTEGER,
        field: 'age',
        allowNull: true
    },
    nutrition:{
        type: DataTypes.STRING,
        allowNull: true
    },
    type:{
        type: DataTypes.STRING,
        allowNull: true
    },
    artistId:{
        type: DataTypes.STRING,
        field: 'artist_id',
        allowNull: true
    }
},{
    sequelize,
    modelName: 'animals',
    underscored: true,
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

Animal.associate = ( models ) => {
    Animal.belongsTo(models.Artist);
};

module.exports = Animal;
