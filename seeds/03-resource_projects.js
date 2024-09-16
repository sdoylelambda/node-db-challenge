
exports.seed = function(knex) {
      return knex('tasks').insert([
        { tasksName: 'task rowValue1'},
        { tasksName: 'rowValue2'},
        { tasksName: 'rowValue3'}
      ]);
};
