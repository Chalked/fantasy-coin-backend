const database = require('./database-connection');

module.exports = {
    createUser(user) {
        return database('users')
            .insert(user)
            .returning('*')
            .then(record => record[0]);
    },
    getUser(id) {
        return database('users')
            .select()
            .where('id', id)
            .first();
    },
    deleteUser(id) {
        return database('users')
            .delete()
            .where('id', id);
    },
    addCollection(uid) {
        return database('collections')
            .insert(uid)
            .returning('*')
            .then(record => record[0]);
    },
    removeCollection(cid) {
        return database('collections')
            .delete()
            .where('cid', cid);
    },
    getCollection(cid) {
        return database('collections')
            .select()
            .where('cid', cid)
            .first();
    },
    listCollections(uid) {
        return database('collections')
            .select()
            .where('user_id', uid);
    },
    updateInvestment(cid, value) {
        return database('collections')
            .where('cid', cid)
            .update({ initial_investment: value, current_USD: value })
            .returning('*')
            .then(record => record[0]);
    },
    updateUSD(cid, value) {
        return database('collections')
            .where('cid', cid)
            .update('current_USD', value)
            .returning('*')
            .then(record => record[0]);
    },  
    getCollectionInfo(cid) {
        return database('currencies')
            .select()
            .where('collection_id', cid);
    },
    addCurrency(currency) {
        return database('currencies')
            .insert(currency)
            .returning('*')
            .then(record => record[0]);
    },
    removeCurrency(id) {
        return database('currencies')
            .delete()
            .where('currency_id', id);
    },
    buyCurrency(id, rate, coin) {
        return database('currencies')
            .where('currency_id', id)
            .update({ buy_rate: rate, coin_amount: coin })
            .returning('*')
            .then(record => record[0]);
    },
    sellCurrency(id, coin) {
        return database('currencies')
            .where('currency_id', id)
            .update('coin_amount', coin)
            .returning('*')
            .then(record => record[0]);
    }
}