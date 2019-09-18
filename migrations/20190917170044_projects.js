
exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('projectsName', 256)
            .notNullable()
            // .onUpdate('CASCADE');
  })

//       .createTable('actions', tbl => {
//         tbl.increments();
//         tbl.text('actionsName', 256)
//             .notNullable()
//   })
      .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('tasksName', 256)
            .notNullable()
          
  })
      .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('resourcesName', 256)
            .notNullable()

  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    // .dropTableIfExists('actions')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources');
};
