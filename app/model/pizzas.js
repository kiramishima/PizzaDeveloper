var observableArrayModule = require("data/observable-array"),
	Pizza = require("./pizza").Pizza,
	Api = require("../shared/api");

function Pizzas(pizzas){

	var pizzas = pizzas || [],
		pizzaList = new observableArrayModule.ObservableArray(pizzas);

	/**
	* Carga la lista de pizzas desde el Servicio de Pizzas.
	*/
	pizzaList.load = function(){
		return new Promise(function(resolve, reject){
			Api.GetPizzas().then(function(res){
				res.forEach(function(itemPizza){
					var pizza = new Pizza(itemPizza);
					pizzaList.push(pizza);
					resolve(pizzaList);
				})
			}, function(rej){
				reject(err);
			});
		});
		
	};
	/**
	* Elimina todo los items del observable pizzaList
	*/
	pizzaList.empty = function(){
		while(pizzaList.length){
			pizzaList.pop();
		}
	}

	return pizzaList;

};

module.exports = Pizzas;