var fetch = require("fetch").fetch;
var http = require("http");

module.exports = {
	GetPizzas: function(){
		var url = "https://pizzafest.herokuapp.com/catalogoPizzas";	
		
		return fetch(url).then(function (response) { 
			return response.json(); 
		});
	},
	SignIn: function(user){
		var url = "https://pizzafest.herokuapp.com/SignIn";
		
		console.log("SignIn: " + JSON.stringify(user));
		return http.request({
			url: url,
			method: "POST",
			headers: { "Content-Type": "application/json" },
			content: JSON.stringify(user),
			body: JSON.stringify(user)
		});
	},
	SignUp: function(customer){
		var url = "https://pizzafest.herokuapp.com/SignUp";
		
		return fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(customer)
		}).then(function(r){
			return r.json();
		})
	}
};