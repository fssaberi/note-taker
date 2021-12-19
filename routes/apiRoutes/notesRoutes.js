const router = require('express').Router();
const { notes } = require('../../db/db.json');

router.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!validate)
})

module.exports = router;