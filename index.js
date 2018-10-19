"use strict"
console.log("loaded");
var contentApp = new Vue({
    el: '#content',
    data: {
        tab: "home",
        home: "home",
        skills: "skills",
        projects: "projects",
        links: "links"
    }
});
var tabApp = new Vue({
    el: '#link',
    methods: {
        setTab: function (input) {
            console.log("Tab: " + input);
            contentApp.tab = input;
        }
    }
});
function select(element) {
    console.log(element.style.color);
    element.style.color = "red";
    console.log(element.style.color);
}

/*function webit(name) {
    var out = `<p>` + name + `</p>`
    return out
}

var app9 = new Vue({
    el: '#abc',
    data: {
        a: webit("AAA"),
        b: webit("BBB"),
        c: webit("CCC"),
        d: webit("DDD")
    }
});

app9.a = app9.c;
var app = new Vue({
    el: '#app',
    data: {
        message: [12, 12, 1]
    }
});
var app2 = new Vue({
    el: '#app2',
    data: {
        seen: true
    }
});
app2.seen = false;

var app3 = new Vue({
    el: '#app3',
    data: {
        list: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
});

//app3.list.push({ text: 'New item' });

var app4 = new Vue({
    el: '#app4',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
            app3.list.push({ text: 'New item' });
        }
    }
});
var app = new Vue({
    el: '#app5',
    data: {
        message: 'Username'
    }
})
Vue.component('test-item', {
    template: '<li>This is a test</li>'
})
var app6 = new Vue({
    el: '#app6'
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})
var obj = ["A", "B", "C"];
for (var index in obj) {
    //console.log(obj[index]);
}
function fun(arg) {
    if (!arg) {
        arg = "world"
    }
    return "hello, " + arg + "!"
}
*/