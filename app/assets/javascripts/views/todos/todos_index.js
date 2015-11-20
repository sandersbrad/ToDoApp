ToDoApp.Views.Index = Backbone.Views.extend({

  className: 'index-parent',

  initialize: function () {

  },

  template: JST['todos/index'],

  render: function () {
    this.addToDos();
  }

  addToDos: function () {
    var content = this.template({ properties: this.collection });
    this.$el.html(content);
  }
})
