var tutorial = tutorial || {};

tutorial.Testable = function () {

    var _foo = "bar";
    var _test = "testing";

    this.bar = function () {
        var foo = "baz";
    }

    this.baz = function (foo) {
        foo = 'test';
        bam = "yay";
    }

    this.getFoo = function () {
        console.log(_foo);
        return _foo;
    }

    this.getTest = function () {
        return _test;
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

newObject.testSelf(); // "Albi"
newObject.testArrow(); // "Albi"

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
instance.testSelf(); // "testing"
instance.testArrow(); // "testing"

tutorial.Testable.prototype.testRuntimeAddedMethod = () => console.log('Created at runtime method');

instance.testRuntimeAddedMethod(); // "Created at runtime method"

for (var i = 1; i < 5; i++) {
    setTimeout(function () {
        console.log("i: " + i);
    }, i * 1000);
};

for (let i = 1; i < 5; i++) {
    setTimeout(function () {
        console.log("i: " + i);
    }, i * 1000);
};

tutorial.Testable.prototype.modulePattern = function () {

    return {
        bar: function () {
            this.baz()
        },
        baz: function () {
            console.log("baz");
        }
    }

};

instance.modulePattern().bar();