
exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('projectsName', 256)
            .unique()
            .notNullable()
            // .onUpdate('CASCADE');
  })

      .createTable('actions', tbl => {
        tbl.increments();
        tbl.text('actionsName', 256)
            .unique()
            .notNullable()
            // .onUpdate('CASCADE');
  })
      .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('tasksName', 256)
            .unique()
            .notNullable()
            // .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('actions')
    .dropTableIfExists('tasks');
};
