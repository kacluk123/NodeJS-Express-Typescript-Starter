import express from 'express';
import { x } from './xd'
import { elo } from './elo/elo'

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send(elo);
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  
  return console.log(`server is listening on ${port}`);
});
