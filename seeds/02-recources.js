
exports.seed = function(knex) {
      return knex('resources').insert([
        { resourcesName: 'action rowValue1'},
        { resourcesName: 'rowValue2'},
        { resourcesName: 'rowValue3'}
      ]);
};
