const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Performance extends Model {}

Performance.init({
    pName: {
        type: DataTypes.STRING,
        field: 'p_name',
        allowNull: false
    },
    pDuration:{
        type: DataTypes.INTEGER,
        field: 'p_duration',
        allowNull: false
    },
    startTime: {
        type: DataTypes.TIME,
        field: 'start_time',
        allowNull: false
    },
    endTime: {
        type: DataTypes.TIME,
        field: 'end_time',
        allowNull: false
    }

},{
    sequelize,
    modelName: 'performances',
    underscored: true,
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

Performance.associate = ( models ) => {
    Performance.belongsTo(models.Show);
    Performance.hasMany(models.Artist);
};

module.exports = Performance;
