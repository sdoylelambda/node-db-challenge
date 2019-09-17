
exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex('projects').del()
  //   .then(function () {
  //     // Inserts seed entries
      return knex('projects').insert([
        { projectsName: 'rowValue1'},
        { projectsName: 'rowValue2'},
        { projectsName: 'rowValue3'}
      ]);
    // });
};
