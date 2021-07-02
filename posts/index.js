const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

const posts = {};

app.use(bodyParser.json());
app.use(cors());

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', async (req, res) => {
  let id = randomBytes(4).toString('hex');
  let { title } = req.body;

  posts[id] = {
    id,
    title,
  };
  // Broadcast event
  await axios.post('http://localhost:4010/events', {
    type: 'POST_CREATED',
    data: {
      id,
      title,
    },
  });
  res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
  console.log('Event received: ', req.body.type);
  res.send({});
});

app.listen(4000, () => {
  console.log('Posts service listening on port 4000');
});
