var task = {
    title: 'My title',
    description: 'My description'
};
task.author = 'Me';
task.toString = function () {
    'use strict';
    return this.title + ' ' + this.description;
};

Object.defineProperty(task, 'toString', {
    value: function () {
        'use strict';
        return this.title + ' ' + this.description;
    },
    writable: false, // i don't want to reasign this
    enumerable: false, //hide for everyboody else
    configurable: false // is not configurable later with defineProperty
});

console.log(Object.keys(task));
console.log(task.toString());