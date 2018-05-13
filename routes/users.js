const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.post('/', (req, res, next) => {
    queries.createUser(req.body).then(user => {
        res.status(201).json({ user: user });
    }).catch(next);
});

router.get('/:id', (req, res, next) => {
    queries.getUser(req.params.id).then(user => {
        user
            ? res.json({ user })
            : res.status(404).json({ message: 'User not found.' });
    }).catch(next);
});

router.get('/name/:name', (req, res, next) => {
    queries.getUserByName(req.body.name).then(user => {
        user
            ? res.json({ user })
            : res.status(404).json({ message: 'User not found.' });
    }).catch(next);
});

router.delete('/:id', (req, res, next) => {
    queries.deleteUser(req.params.id).then(() => {
        res.status(204).json({ deleted: true });
    }).catch(next);
});

module.exports = router;