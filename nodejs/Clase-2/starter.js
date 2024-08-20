const desiredPort = process.env.PORT ?? 3000;

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/starter-admin');

const shopRoutes = require('./routes/starter-shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
});

app.listen(desiredPort, () => console.log('server listening on port http://localhost:3000'));

