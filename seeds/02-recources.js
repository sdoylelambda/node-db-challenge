
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { actionsName: 'action rowValue1'},
        { actionsName: 'rowValue2'},
        { actionsName: 'rowValue3'}
      ]);
    });
};
