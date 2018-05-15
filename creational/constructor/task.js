var Task = function (name) {
    'use strict';
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function () {
    'use strict';
    console.log('completing Task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
};

// module.exports = Task;