var Cat = function () {
    this.hungry = true;
    this.stomach = [];
};

Cat.prototype.areYouHungry = function (callback) {
    callback(this.hungry);
};

Cat.prototype.feed = function (food, callback) {
    this.stomach.push(food);
    this.hungry = false;
    callback();
};

module.exports = Cat;
