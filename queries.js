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
    getUserByName(name) {
        return database('users')
            .select()
            .where('name', name)
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
    listCollections(uid) {
        return database('collections')
            .select()
            .where('user_id', uid);
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
    updateCurrency(id, values) {
        return database('currencies')
            .where('id', id)
            .update('currency', values)
            .returning('*')
            .then(record => record[0]);
    }
}