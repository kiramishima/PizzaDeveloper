/* global __extends */
var observable = require("data/observable");

var Pizza = (function(_super){
	__extends(Pizza, _super);
	
	function Pizza(options){
		_super.call(this);
		
		this._id = options._id || '';
        this._name = options.name || 'Pizza';
        this._description = options.description || 'No description.';
        this._price = options.price || 0.00;
        this._nett = options.nett || '0 g';
        this._ingredients = options.ingredients || [];
        this._picUrl = options.picUrl || 'res://default_pizza';
	}
	
	
	Object.defineProperty(Pizza.prototype, "id", {
		get: function(){
			return this._id;
		},
		set: function(value){
			this._id = value;
		},
		enumerable:true,
		configurable: true
	});
	
	Object.defineProperty(Pizza.prototype, "name", {
		get: function(){
			return this._name;
		},
		set: function(value){
			this._name = value;
		},
		enumerable:true,
		configurable: true
	});
	
	Object.defineProperty(Pizza.prototype, "description", {
		get: function(){
			return this._description;
		},
		set: function(value){
			this._description = value;
		},
		enumerable:true,
		configurable: true
	});
	
	Object.defineProperty(Pizza.prototype, "price", {
		get: function(){
			return this._price;
		},
		set: function(value){
			this._price = value;
		},
		enumerable:true,
		configurable: true
	});
	
	Object.defineProperty(Pizza.prototype, "nett", {
		get: function(){
			return this._nett;
		},
		set: function(value){
			this._nett = value;
		},
		enumerable:true,
		configurable: true
	});
	
	Object.defineProperty(Pizza.prototype, "ingredients", {
		get: function(){
			return this._ingredients;
		},
		set: function(value){
			this._ingredients = value;
		},
		enumerable:true,
		configurable: true
	});
	
	Object.defineProperty(Pizza.prototype, "picUrl", {
		get: function(){
			return this._picUrl;
		},
		set: function(value){
			this._picUrl = value;
		},
		enumerable:true,
		configurable: true
	});
	
	
	
	return Pizza;
	
})(observable.Observable);

exports.Pizza = Pizza;