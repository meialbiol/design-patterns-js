var Task = require('./task');

function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.add = function (obj) {
    return this.observerList.push(obj);
};

ObserverList.prototype.get = function (index) {
    if(index > -1 && index < this.observerList.length ){
        return this.observerList['index'];
    }
};

var notificationService = function () {
    var message = 'Notifying ';
    this.update = function (task) {
        console.log(message+task.user+ ' for task '+ task.name);
    }
};

var logginService = function () {
    var message = 'Logging ';
    this.update = function (task) {
        console.log(message+task.user+ ' for task '+ task.name);
    }
};

var auditingService = function () {
    var message = 'Auditing ';
    this.update = function (task) {
        console.log(message+task.user+ ' for task '+ task.name);
    }
};

var task1 = new Task({name: 'Create demo for constructors', user: 'John'});

var not = new notificationService();
var ls = new logginService();
var au = new auditingService();

task1.save();