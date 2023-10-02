// require express
const express = require('express');
const app = express();
const cors = require('cors');
const colors = require('colors');
const ErrorHandeler = require('./helper/global.Error');
const PORT = process.env.PORT || 5000;
const event = require('./routes/event.route');
// ------------DB Connection----------------
const dbConnection = require('./server')
// ------------DB Connection----------------
// ------------>>>CORS<<<----------------
const allowOrigin = 'http://localhost:5173'
const corsOptions = {
    origin: allowOrigin,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
// ------------>>>CORS<<<----------------
// Middlewares
app.use(express.json());
app.use(cors(corsOptions));
// ------------>>>Create Routes<<<----------------
app.use('/api/v1/event', event)
// ------------>>>Create Routes<<<----------------
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.yellow.bold);
});
dbConnection();
// ------------>>>Golabal<<<----------------
app.all('*', (req, res) => {
    res.status(404).send({
        success: false,
        message: 'Page not found',
        error: {
            statusCode: 404,
            message: 'You reached a route that is not defined on this server',
        },
    });
});
// ------------>>>Golabal<<<----------------

// -----------Global Error Handler-----------
app.use(ErrorHandeler)