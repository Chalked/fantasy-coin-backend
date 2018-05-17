
exports.seed = function(knex, Promise) {
  return knex('collections').del()
    .then(function () {
      return knex('collections').insert([
        {cid: 1, user_id: 1, title: 'My First Collection'},
        {cid: 2, user_id: 2, title: 'My First Collection'},
        {cid: 3, user_id: 3, title: 'My First Collection'}
      ]);
    }).then(() => {
      return knex.raw('ALTER SEQUENCE collections_cid_seq RESTART WITH 4;');
    });
};
