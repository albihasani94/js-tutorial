var tutorial = tutorial || {};

tutorial.Foo = function (who) {
    this.me = who;
}

tutorial.Foo.prototype.identity = function() {
    return "I am " + this.me;
};

tutorial.Bar = function (who) {
    tutorial.Foo.call(this, who);
}

tutorial.Bar.prototype = Object.create(tutorial.Foo.prototype);

tutorial.Bar.prototype.speak = function() {
    alert("Hello, " + this.identity());
};

var b1 = new tutorial.Bar("b1");
var b2 = new tutorial.Bar("b2");

b1.speak();
b2.speak();