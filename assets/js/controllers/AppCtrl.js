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

        initialize: function() {
            var appModel = new AppModel({html: 'Hello kicks'});
            var appView = new AppView({
                model: appModel,
                el: $('#kicks')
            });
            appView.render();
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
