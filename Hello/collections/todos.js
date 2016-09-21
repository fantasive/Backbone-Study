var app = app || {};
//使用*localStorage*替代远程服务器
var TodoList = Backbone.Collection.extend({
    //引用到这个collection的模型中
    model: app.Todo,
    //保存所以的todo元素到"todos-Backbone"空间中
    localStorage: new Backbone.LocalStorage("todos-backbone"),

    //筛选todo的元素都完成的
    completed: function() {
        return this.filter(function( todo ) {
            return todo.get("completed");
        });
    },
    //筛选还没完成的todo items
    remaining: function() {
        return this.without.apply(this, this.completed());
    },
    //保持todos一定的顺序
    nextOrder: function() {
        if( !this.length ) {
            return 1;
        }
        return this.last().get('order') + 1;
    },
    //Todos被排序通过他们的原始的插入顺序
    comparator: function(todo) {
        return todo.get("order");
    }
});

//创造全局的collection “Todos”
app.Todos = new TodoList();