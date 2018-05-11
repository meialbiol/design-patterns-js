
//Ways of creating an object
// 1rst
var obj = {};
//add atribute by dot nonation
obj.param = 'new value';
//adding by brackets. Useful for adding variables inside
obj["param2"] = 'new value';

// 2nd
var nextObject = Object.create(Object.prototype);

//3rd
var lastObject = new Object();