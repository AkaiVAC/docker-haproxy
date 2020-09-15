const express = require('express');

const app = express();
const appID = process.env.APP_ID || 'root';

app.get('/', (req, res) => {
  res.send(`${appID}: Home page says hello!`);
});
app.get('/app1', (req, res) => {
  res.send(`${appID}: app1 says hello!`);
});
app.get('/app2', (req, res) => {
  res.send(`${appID}: app2 says hello!`);
});
app.get('/admin', (req, res) => {
  res.send(`${appID}: admin says hello! Few should be able to get here`);
});

app.listen(appID, () => {
  console.log(`${appID} is listening on port ${appID}`);
});
