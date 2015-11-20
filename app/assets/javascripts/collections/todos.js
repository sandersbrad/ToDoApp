ToDoApp.Collections.ToDos = Backbone.Collection.extend({

  url: '/to_do',

  model: ToDoApp.Models.ToDo,

});
