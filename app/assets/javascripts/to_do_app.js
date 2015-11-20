window.ToDoApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var collection = new ToDoApp.Collections.ToDos();
    var $rootEl = $('#content');
    new ToDoApp.Routers.Router({
      collection: collection,
      $rootEl: $rootEl
    });
    Backbone.history.start();
  }
};
