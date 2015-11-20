ToDoApp.Views.ToDoForm = Backbone.CompositeView.extend({

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
    this.listenTo(this.collection, 'sync', this.render)
  },

  tagName: 'form',
  className: 'edit-form',
  template: JST['todos/edit'],

  events: {
    'submit': 'editToDo'
  },

  render: function () {
    var content = this.template({ model: this.model });
    this.$el.html(content);
    return this
  },

  editToDo: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    console.log(formData)
    this.model.save(formData, {
      success: function (model, response) {
        if (this.collection) {
          this.collection.add(model);
        }
      }.bind(this),
      error: function (model, response) {
        console.log(response)
      }
    })
  }


});
