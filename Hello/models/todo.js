var app = app || {};
//Todo model
//Our basic *Todo *model has "title","order","completed" attributes
app.Todo = Backbone.Model.extend({
    //default attributes ensure that each toto create has "title" and "completed"
    defaults: {
        title: "",
        completed: false
    },
    //触发改变todo的item“completed”状态
    toggle: function() {
        this.save({
            completed: !this.get('completed')
        });
    }
});