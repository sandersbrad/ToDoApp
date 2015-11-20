ToDoApp.Views.ToDo = Backbone.CompositeView.extend({

  className: 'todo-item',

  tagName: 'li',

  template: JST['todos/todolistitem'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
    this.listenTo(this.model, 'change', this.render)
  },

  events: {
    'click #edit': 'editToDo',
    'click #complete': 'removeToDo'
  },

  render: function () {
    var content = this.template({ todo: this.model })
    this.$el.html(content)
  },

  editToDo: function () {
    var content = new ToDoApp.Views.ToDoForm({ model: this.model })
    this.$el.html(content.render().$el)
  },

  removeToDo: function () {
    this.model.destroy();
  }

});
