const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Artist extends Model {}

Artist.init({
    artistInitials: {
        type: DataTypes.STRING,
        field: 'artist_initials',
        allowNull: false
    },
    artistSex:{
        type: DataTypes.STRING,
        field: 'artist_sex',
        allowNull: false
    },
    artistBirth: {
        type: DataTypes.DATE,
        field: 'artist_birth',
        allowNull: false
    },
    pseudonym:{
        type: DataTypes.STRING,
        allowNull: false
    },
    skills:{
        type: DataTypes.STRING,
        allowNull: false
    },
     experience:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
      position:{
        type: DataTypes.STRING,
        allowNull: false
    },
     maritalStatus :{
        type: DataTypes.STRING,
        field: 'marital_status',
        allowNull: false
    }

},{
    sequelize,
    modelName: 'artists',
    underscored: true,
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

Artist.associate = ( models ) => {
    Artist.hasMany(models.Animal);
    Artist.hasMany(models.Inventory);
    Artist.belongsTo(models.Performance);
};

module.exports = Artist;
