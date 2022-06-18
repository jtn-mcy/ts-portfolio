const express = require('express');
const path = require('path');
const sequelize = require('./config')
const routes = require('./controllers')
const cron = require('node-cron') //keep heroku server up at 10 and 40 minutes
const app = express();
const PORT = process.env.PORT || 3001;
const fetch = require('node-fetch');

cron.schedule('0,2,10,20,30,40,50 * * * *', () => {
  if (process.env.NODE_ENV === 'production') {
    return fetch('https://johnny-nguyen.herokuapp.com/api/projects').then(res => res.json())
  }
  console.log('Keep server from sleeping every ten minutes.')
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});