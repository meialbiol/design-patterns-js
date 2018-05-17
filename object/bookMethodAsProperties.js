var Book = function (name, price) {
	var princeChanging = [];
	var princeChanged = [];

    this.name = function (val) {
    	return name;
    };

    this.price = function (val) {
    	if(val !== undefined && val !== price){
    		for (var i = 0; i < princeChanging.length; i++){
    			if(!princeChanging[i](this, val)){
    				return price;
				}
			}
    		price = val;
            for (var i = 0; i < princeChanged.length; i++){
                if(!princeChanged[i](this, val)){
                    return price;
                }
            }
		}
		return price;
    };

    this.onPriceChanging = function (callback) {
		princeChanging.push(callback);
    };

    this.onPriceChanged = function (callback) {
		princeChanged.push(callback);
    };
};

var book = new Book('JavaScript: The Good Parts', 23.99);

console.log('The name is: '+ book.name());

console.log('The price is: $' + book.price());

book.onPriceChanging(function (b, price) {
    if (price > 100) {
        console.log('System error, price has gone unexpectedly high');
        return false;
    }
    return true;
});

book.onPriceChanged(function (b) {
    console.log('The book price has changed to: $' + b.price());
});

book.price(19.99);

book.price(200);