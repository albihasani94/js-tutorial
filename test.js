var tutorial = tutorial || {};

tutorial.Testable = function () {

    var foo = "bar";
    var test = "testing";

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

    this.getTest = function () {
        return test;
    }
}

// Add function via prototype
tutorial.Testable.prototype.testSelf = function () {
    var self = this;
    (function () {
        console.log(self.getTest());
    })();
}

tutorial.Testable.prototype.testArrow = function () {
    (() => console.log(this.getTest()))();
}

var newObject = {
    name: 'Albi',
    surname: 'Hasani',
    testSelf: function () {
        var self = this;

        // IIFE pattern
        (function () {
            console.log(self.name);
        })();
    },
    testArrow: function () {
        // Arrow function replaces the need for self assignment
        (() => console.log(this.name))();
    }
};

newObject.testSelf();
newObject.testArrow();

/**
 * static
 */

tutorial.Testable.doSomething = function () {
    console.log('Called static function');
};

tutorial.Testable.doSomething();

var instance = new tutorial.Testable();

instance.getFoo() // "bar"
instance.bar()
instance.getFoo() // "bar"
instance.baz()
instance.getFoo() // "bar"
instance.testSelf();
instance.testArrow();