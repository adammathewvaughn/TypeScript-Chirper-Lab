import * as express from 'express';
import { GetChirps, GetChirp, UpdateChirp, CreateChirp, DeleteChirp } from "./chirpstore";


const router = express.Router();

router.get('/chirps', (req, res, next) => {
    res.json('World');
});
router.delete('/:id', (req, res, next) => {
    chirpStore.DeleteChirp(req.params.id)
});
router.put('/:id', (req, res, next) => {
    res.json('World');
});
router.post('/', (req, res, next) => {
    chirpStore.CreateChirp(req.body);
});

export default router;