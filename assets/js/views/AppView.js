/**
 * AppView
 *
 * @return {object}
 */

define(['backbone', 'handlebars', 'templates/kicks', 'css!styles/unsemantic-grid-responsive.css', 'css!styles/app.css'], function(Backbone, Handlebars) {
    var AppView = Backbone.View.extend({
        template: Handlebars.templates.kicks,
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });
    return AppView;
});
