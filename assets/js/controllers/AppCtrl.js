/**
 * AppCtrl
 *
 * Usage: var appCtrl = new AppCtrl();
 * @return {object}
 */

define(['backbone-mvc', 'js/models/AppModel', 'js/views/AppView'], function(BackboneMVC, AppModel, AppView) {
    var AppCtrl = BackboneMVC.Controller.extend({
        name: 'AppCtrl',
        /* the only mandatory field */

        // model and view below are M and V in MVC.
        model: null,
        view: null,

        initialize: function() {
            var self = this;
            self.model = new AppModel({html: 'Hello kicks'});
            self.view = new AppView({
                model: self.model,
                el: $('#kicks')
            });
            self.view.render();
        },

        /**
         * This is a standard action method, it is invoked
         * automatically if url matches
         */
        hello: function() {
           this._privateMethod();
        },

        /**
         * This function will remain untouched, the router cannot see
         * this method
         */
        _privateMethod: function() {
            alert('You just use view to shoot a target and trigger the action of controller.');
        }
    });
    return AppCtrl;
});
