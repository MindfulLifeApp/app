/*****************************************************************************/
/* Sitlist: Event Handlers */
/*****************************************************************************/
Template.Sitlist.events({
    "click .sits-item": function(event) {
        /* Grab the file url from the div and set it to the player's source */
        target = event.currentTarget;
        var sit_name = $(target).attr('data-name');
        Session.set('sit_name', sit_name);
        Router.go("/sit");
    }
});

/*****************************************************************************/
/* Sitlist: Helpers */
/*****************************************************************************/
Template.Sitlist.helpers({
    sitList: function() {
        var content = English.findOne({page: "all_sits"}); 
        var sit_list = content.list;
        return sit_list;
    }
});

/*****************************************************************************/
/* Sitlist: Lifecycle Hooks */
/*****************************************************************************/
Template.Sitlist.onCreated(function () {
});

Template.Sitlist.onRendered(function () {
    $('#header').css('background-color', '#2ECC71');
});

Template.Sitlist.onDestroyed(function () {
});
