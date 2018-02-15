var tutorial = tutorial || {};

tutorial.Testable = function () {

    var foo = "bar";

    this.bar = function bar() {
        var foo = "baz";
    }

    this.baz = function baz(foo) {
        foo = 'test';
        bam = "yay";
    }

    this.getFoo = function () {
        console.log(foo);
        return foo;
    }
}

var newObject = {
    name: 'Albi',
    surname: 'Hasani',
    test: function() {
        console.log("test");
    },
    testSelf: function () {
        var self = this;

        // IIFE pattern
        (function () {
            console.log(self.name);
        })();
    }
};

newObject.testSelf();

/**
 * static
 */

tutorial.Testable.doSomething = function () {
    console.log('Called static fuction');
};

var instance = new tutorial.Testable();

instance.getFoo() // "bar"
instance.bar()
instance.getFoo() // "bar"
instance.baz()
instance.getFoo() // "bar"