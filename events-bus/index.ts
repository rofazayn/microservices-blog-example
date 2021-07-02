import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/events', async (req: Request, res: Response) => {
  const event = req.body;

  await axios.post('http://localhost:4000/events', event);
  await axios.post('http://localhost:4001/events', event);
  await axios.post('http://localhost:4002/events', event);

  res.status(200).send({ status: 'OK' });
});

app.listen(4010, () => {
  console.log('Event-bus service listening on 4010');
});
