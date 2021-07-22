import * as express from 'express';
import apiRouter from '.';
import { GetChirps, GetChirp, UpdateChirp, CreateChirp, DeleteChirp } from "./chirpstore";

const app = express();

app.use(express.static('public'));
app.use(apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
