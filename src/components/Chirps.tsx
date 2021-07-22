const express = require('express');
const router = express.Router();
const chirpStore = require('../../chirpStore');

router.get('/:id?', (req, res) => {
    let id = req.params.id
    if(id) { 
        res.json(chirpStore.GetChirp(id));
    } else {  
        res.send(chirpStore.GetChirps())
    }
});

router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
}); 

router.delete('/:id', (req, res) => {
    chirpStore.DeleteChirp(req.params.id)
});


module.exports = router;