ToDoApp.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl
    this.collection = options.collection
  },

  routes: {
    '': 'index'
  },

  index: function () {
    var view = new ToDoApp.Views.Index({ collection: this.collection })
    this.collection.fetch()
    this.$rootEl.html(view.$el)
    view.render()
  }
})
