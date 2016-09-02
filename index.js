var
    classworker = require('classworker'),
    Cat = require('./lib/cat');
    Mouse = require('./lib/mouse');

Cat = classworker(Cat);

var
    tom = new Cat(),
    jerry = new Mouse();

tom.areYouHungry(function (answer) {
    if (answer === true) {
        tom.feed(jerry, function () {
            console.log('thanks');
        });
    }
});
