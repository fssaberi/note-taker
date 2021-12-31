const fs = require('fs');
const router = require('express').Router();
const db = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        console.log(data);
        res.json(JSON.parse(data));
      })
});

router.post('/notes', (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        let object = {
            ...req.body, 
            id: uuidv4()
        };
        result = JSON.parse(data);
        string = JSON.stringify([...result, object]);
        console.log(object);

        fs.writeFile("./db/db.json", string, (err, data) => {
            if (err) throw err;
            console.log(string);
            res.json(string)
        })
      })
})

// router.delete('/notes' + '/:id', (req, res) => {
    
// })

module.exports = router;