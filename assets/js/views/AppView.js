/**
 * AppView
 *
 * @return {object}
 */

define(['backbone', 'templates/kicks'], function(Backbone, Templates) {
    var AppView = Backbone.View.extend({
        template: Templates.kicks,
        render: function() {
            debugger;
            this.$el.html(this.template({data: this.model.attributes}));
            return this;
        }
    });
    return AppView;
});
