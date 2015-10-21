/* global global */
/* global __extends */
var observable = require("data/observable");
var frameModule = require("ui/frame");
var Api = require("../shared/api");

var User = (function(_super){
	__extends(User, _super);
	
	function User(){
		_super.call(this);
		this._isLoading = false;
		this._email = "kiramishima@outlook.com";
		this._firstName = "";
		this._lastName = "";
		this._phone = "";
		this._address = "";
		this._password = "123456";
	}
	
	Object.defineProperty(User.prototype, "isLoading", {
		get: function(){
			return this._isLoading;
		},
		set: function(value){
			this._isLoading = value;
		},
		enumerable: true,
		configurable: true
	});
	
	Object.defineProperty(User.prototype, "email", {
		get: function(){
			return this._email;
		},
		set: function(value){
			this._email = value;
		},
		enumerable: true,
		configurable: true
	});
	
	Object.defineProperty(User.prototype, "firstName", {
		get: function(){
			return this._firstName;
		},
		set: function(value){
			this._firstName = value;
		},
		enumerable: true,
		configurable: true
	});
	
	Object.defineProperty(User.prototype, "lastName", {
		get: function(){
			return this._lastName;
		},
		set: function(value){
			this._lastName = value;
		},
		enumerable: true,
		configurable: true
	});
	
	Object.defineProperty(User.prototype, "phone", {
		get: function(){
			return this._phone;
		},
		set: function(value){
			this._phone = value;
		},
		enumerable: true,
		configurable: true
	});

	Object.defineProperty(User.prototype, "address", {
		get: function(){
			return this._address;
		},
		set: function(value){
			this._address = value;
		},
		enumerable: true,
		configurable: true
	});
	
	Object.defineProperty(User.prototype, "password", {
		get: function(){
			return this._password;
		},
		set: function(value){
			this._password = value;
		},
		enumerable: true,
		configurable: true
	});
	
	User.prototype.SignIn = function(){
		var vm = this;
		vm.set("isLoading", true);
		var login = {
			"email": vm.get("email"),
			"password": vm.get("password")
		};
		
		Api.SignIn(login).then(function(r){
			var result = r.content.toJSON();
    		console.log("Resultado" + JSON.stringify(result));
			global.userToken = result.token;
			frameModule.topmost().navigate({
				moduleName: global.baseViewDirectory + "main/main",
				animated: true
			});
		}).catch(function(err){
			console.log("Error" + JSON.stringify(err));
		});
	}
	
	User.prototype.SignUp = function(user){
		var vm = this;
		vm.set("isLoading", true);

		var customer = {
			firstName: vm.get("firstName"),
			lastName: vm.get("lastName"),
			email: vm.get("email"),
			phone: vm.get("phone"),
			address: vm.get("address"),
			password: vm.get("password")
		};

		Api.SignUp(customer).then(function(r){
			var login = {
				"email": vm.get("email"),
				"password": vm.get("password")
			};
			Api.SignIn(login).then(function(r){
				var result = r.content.toJSON();
				console.log("Resultado" + JSON.stringify(result));
				global.userToken = result.token;
				frameModule.topmost().navigate({
					moduleName: global.baseViewDirectory + "main/main",
					animated: true
				});
			}).catch(function(err){
				console.log("Error" + JSON.stringify(err));
			});
    		
		}).catch(function(err){
			console.log(JSON.stringify(err));
		});
	}
	return User;
})(observable.Observable);

exports.User = User;