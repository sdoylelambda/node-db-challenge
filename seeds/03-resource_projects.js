
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { tasksName: 'rowValue1'},
        { tasksName: 'rowValue2'},
        { tasksName: 'rowValue3'}
      ]);
    });
};
