
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, name: 'Zackary Moore'},
        {id: 2, name: 'John Smith'},
        {id: 3, name: 'Gizmo Thules'},
      ]);
    }).then(() => {
      return knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 4;');
    });
};
