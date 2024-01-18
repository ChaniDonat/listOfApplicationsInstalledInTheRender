const express = require('express');
const api = require('api');

const app = express();

app.get('/', async (req, res) => {
  const services = await api.listServices({
    bearer: `Bearer rnd_BdvDklBymovzEJhB6KXTFIg6jd3B`,
  });
  res.send(services);
});

app.listen(3000);