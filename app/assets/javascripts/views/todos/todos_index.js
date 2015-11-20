ToDoApp.Views.Index = Backbone.View.extend({

  className: 'index-parent',

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render)
  },

  template: JST['todos/index'],

  render: function () {
    var content = this.template({ todos: this.collection });
    this.$el.html(content);
  }
})
