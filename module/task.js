var Repo = require('./taskRepository');
var Task = function (data) {
    'use strict';
    this.name = data.name;
    this.completed = false;
};

Task.prototype.complete = function () {
    'use strict';
    console.log('completing Task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
    Repo.save(this);
};

module.exports = Task;