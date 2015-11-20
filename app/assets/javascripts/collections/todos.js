ToDoApp.Collections.Properties = Backbone.Collection.extend({

  url: '/to_do_index',

  model: ToDoApp.Models.ToDo,

  getOrFetch: function (id) {
    var model = this.get(id);
    if (!model) {
      model = new Grounded.Models.Property({id: id});
      this.add(model);
    }
    model.fetch();
    return model;
  }

});
