/**
 * AppView
 *
 * @return {object}
 */

define(['backbone', 'templates/kicks', 'css!styles/unsemantic-grid-responsive.css', 'css!styles/app.css'], function(Backbone, Templates) {
    var AppView = Backbone.View.extend({
        template: Templates.kicks,
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });
    return AppView;
});
