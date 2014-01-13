require(['./require.config'], function() {
    require(['backbone', 'backbone-mvc', 'css!styles/unsemantic-grid-responsive.css', 'js/controllers/AppCtrl'], function(Backbone, BackboneMVC, _grid, AppCtrl) {
        $(document).ready(function() {
            // Start the new automatic router and Backbone.history.
            var router = new BackboneMVC.Router();
            Backbone.history.start();
            // Just create controllers to create whole app.
            new AppCtrl();
        });
    });
});
