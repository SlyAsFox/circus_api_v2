const models = {
    Animal: require('./Animal'),
    Artist: require('./Artist'),
    Inventory: require('./Inventory'),
    Performance: require('./Performance'),
    Show: require('./Show'),
    Ticket: require('./Ticket'),
    Venue: require('./Venue'),
    Visitor: require('./Visitor')
};

const modelNames = Object.keys(models);

modelNames.forEach( (modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

module.exports = models;