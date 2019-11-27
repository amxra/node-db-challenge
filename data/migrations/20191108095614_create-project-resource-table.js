
exports.up = function (knex) {
    return knex.schema
        .createTable('project', table => {
            table.increments()
            table.string('project_name', 128)
                .notNullable()
                .unique();
            table.string('project_description', 128)
            table.boolean('completed')
                .notNullable()
                .defaultTo(false)
        })

        .createTable('resource', table => {
            table.increments()
            table.string('resource_name', 128)
                .notNullable()
                .unique();
            table.string('resource_description', 128)
        })

        .createTable('task', table => {
            table.increments()
            table.string('task_description', 128)
            table.string('task_note', 255)
            table.boolean('completed')
                .notNullable()
                .defaultTo(false)
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
        })

        .createTable('project_resource', table => {
            table.increments()
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            table.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resource')
                .onDelete("CASCADE")
                .onUpdate("CASCADE");

        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('project_resource')
        .dropTableIfExists('task')
        .dropTableIfExists('resource')
        .dropTableIfExists('project')
};
