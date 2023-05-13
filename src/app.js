const express = require('express');

const loginRoute = require('./routes/loginRoute');
const userRoutes = require('./routes/userRouters');
const categoryRoutes = require('./routes/categoryRouters');
const postRoutes = require('./routes/postRoutes');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRoute);
app.use('/', userRoutes);
app.use('/', categoryRoutes);
app.use('/', postRoutes);

// ..

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
