var tutorial = tutorial || {};

tutorial.Foo = {
    init: function(who) {
        this.me = who;
    },
    identity: function() {
        return "I am " + this.me;
    }
};

var Bar = Object.create(tutorial.Foo);

Bar.speak = function() {
    alert("Hello, I am " + this.identity());
};

var b1 = Object.create(Bar);
b1.init("b1");
var b2 = Object.create(Bar);
b2.init("b2");

b1.speak();
b2.speak();