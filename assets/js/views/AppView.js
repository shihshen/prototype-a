/**
 * AppView
 *
 * @return {object}
 */

define(['backbone', 'templates/kicks'], function(Backbone, Templates) {
    var AppView = Backbone.View.extend({
        template: Templates.kicks,
        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        }
    });
    return AppView;
});
