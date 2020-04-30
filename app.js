const express = require('express');
const cors = require('cors');

const animalsRoutes = require('./routes/api/v1/animals');
const artistsRoutes = require('./routes/api/v1/artists');
const inventorysRoutes = require('./routes/api/v1/inventorys');
const performancesRoutes = require('./routes/api/v1/performances');
const showsRoutes = require('./routes/api/v1/shows');
const ticketsRoutes = require('./routes/api/v1/tickets');
const venuesRoutes = require('./routes/api/v1/venues');
const visitorsRoutes = require('./routes/api/v1/visitors');

const app = express();

app.use(cors());

const sequelize = require('./sequelize');

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        data: 'Homepage'
    });
});

app.use('/api/v1/animals', animalsRoutes)
app.use('/api/v1/artists', artistsRoutes)
app.use('/api/v1/inventorys', inventorysRoutes)
app.use('/api/v1/performances', performancesRoutes)
app.use('/api/v1/shows', showsRoutes)
app.use('/api/v1/tickets', ticketsRoutes)
app.use('/api/v1/venues', venuesRoutes)
app.use('/api/v1/visitors', visitorsRoutes)


app.use((error, req, res, next) => {
    res.send({
        error: error.message
    });
});

module.exports = app;