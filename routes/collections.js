const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.post('/', (req, res, next) => {
    queries.addCollection(req.body).then(collection => {
        res.status(201).json({ collection: collection });
    }).catch(next);
});

router.delete('/:cid', (req, res, next) => {
    queries.removeCollection(req.params.cid).then(() => {
        res.status(204).json({ deleted: true });
    }).catch(next);
});

router.get('/:uid', (req, res, next) => {
    queries.listCollections(req.params.uid).then(collections => {
        res.json({ collections });
    }).catch(next);
});

router.put('/invest/:cid', (req, res, next) => {
    queries.updateInvestment(req.params.cid, req.body).then(collection => {
        res.json({ collection: collection[0] });
    }).catch(next);
});

module.exports = router;

