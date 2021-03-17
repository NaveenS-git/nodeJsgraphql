const express = require('express');
const sequelize = require('./config/database');

// set up express app
const app = express();

app.use(express.json());

// initialize routes
app.use('/', require('./routes/api'));

// port
//app.listen(4000);
sequelize
//.sync({ force: true })
  .sync()
  .then(result => {
    app.listen(4000);
  })
  .catch(err => {
    console.log(err);
  });