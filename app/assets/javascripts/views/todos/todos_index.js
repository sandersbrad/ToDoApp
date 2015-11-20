ToDoApp.Views.Index = Backbone.CompositeView.extend({

  className: 'index-parent',

  initialize: function () {
    this._subviews = {};
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'remove', this.render);
    this.listenTo(this.collection, 'add', this.render);
  },

  events: {
    'click .complete': 'removeToDo',
    'click .edit': 'editToDo',
    'click .new': 'newToDo',
  },

  template: JST['todos/index'],

  addToDo: function (todo) {
    var subview = new ToDoApp.Views.ToDo({ model: todo });
    this.addSubview('#todos', subview);
    this._subviews[todo.id] = subview;
  },

  render: function () {
    var content = this.template({ todos: this.collection });
    this.$el.html(content);
    this.collection.each(this.addToDo.bind(this))
    this.attachSubviews();
  },

  removeToDo: function (event) {
    alert('click')
    var todoID = $(event.currentTarget).attr('id');
    var model = this.collection.get(todoID);
    model.destroy();
  },

  newToDo: function () {
    var model = new ToDoApp.Models.ToDo();
    var form = new ToDoApp.Views.ToDoForm({ model: model, collection: this.collection });
    this.addSubview('#new', form)
  }
})
