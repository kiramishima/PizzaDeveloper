/* global __extends */
var observable = require("data/observable");

var Customer = (function(_super){
	// Extendera siempre de la clase que venga de _super
	__extends(Customer, _super);
	
	//nuestro constructor
	function Customer(){
		// constructor padre
		_super.call(this);
		
		//variables privadas
		this._isLoading = false;
		
	}
	
	//Definimos las propiedades de Customer
	Object.defineProperty(Customer.prototype, "isLoading", {
        get: function () {
            return this._isLoading;
        },
        set: function(value) {
            this._isLoading = value;
        },
        enumerable: true,
        configurable: true
    });
	
	
	//Podemos Definir metodos 
	Customer.prototype.getName = function(){
		
	};
	return Customer;
})(observable.Observable);

exports.Customer = Customer;