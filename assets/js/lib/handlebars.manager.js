/**
 * Handlebars manager
 *
 * grunt-contrib-handlebars can help to precompile handlebars templates in server side.
 * But it's not convenient to manage handlebars templates precompiled by grunt for require.js.
 * Handlebars manager is here help.
 * Just remember to add 'handlebars.manager' into dependencies, and write Template['template name'] or Template.name to get your template.
 * For example:
 * define(['backbone', 'handlebars.manager'], function(Backbone, Templates) {
 *     var AppView = Backbone.View.extend({
 *         template: Templates.name,
 *         render: function() {
 *             this.$el.html(this.template(this.model.attributes));
 *             return this;
 *         }
 *     });
 *     return AppView;
 * });
 *
 * @return {object}
 */

define(['handlebars', 'templates/compiled.handlebars.js'], function(_Handlebars, CompiledHandlebars) {
    var template = Handlebars.template, Templates = Handlebars.templates = Handlebars.templates || {};
    var ADDRESS = '.tmp/public/templates/';
    for(var index in CompiledHandlebars.JST) {
        if(CompiledHandlebars.hasOwnProperty(index)) {
            var indexForTemplate = index.substring(index.indexOf(ADDRESS), index.lastIndexOf('.handlebars'));
            console.log('indexForTemplate: ' + indexForTemplate);
            Templates[indexForTemplate] = CompiledHandlebars.JST[index];
        }
    }
    return Templates;
});
