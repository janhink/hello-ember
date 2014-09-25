window.Hello = Ember.Application.create();

Hello.ApplicationController = Ember.Controller.extend({
    firstName: "Honza",
    lastName: "Hink",
    fullName: function() {
        return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName')
});
