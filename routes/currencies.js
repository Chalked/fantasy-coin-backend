const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get('/:cid', (req, res, next) => {
    queries.getCollectionInfo(req.params.cid).then(collection => {
        collection
            ? res.json({ collection })
            : res.status(404).json({ message: 'Collection not found.' });
    }).catch(next);
});

router.post('/', (req, res, next) => {
    queries.addCurrency(req.body).then(currency => {
        res.status(201).json({ currency: currency });
    }).catch(next);
});

router.delete('/:id', (req, res, next) => {
    queries.removeCurrency(req.params.id).then(() => {
        res.status(204).json({ deleted: true });
    }).catch(next);
});

router.put('/:id', (req, res, next) => {
    queries.updateCurrency(req.params.id, req.body.buy_rate, req.body.coin_amount).then(currency => {
        res.json({ currency: currency[0] });
    }).catch(next);
});

module.exports = router;
