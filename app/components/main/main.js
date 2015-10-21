var router = require('../../router'),
    PizzaList = require('../../model/pizzas'),
    Observable = require("data/observable").Observable,
    viewModel;

    viewModel = new Observable({
    	pizzaList: PizzaList([]),
    	isLoading: false
    });

var page;
function onLoaded(args){
	page = args.object;
	page.bindingContext = viewModel;

	viewModel.isLoading = true;
	viewModel.pizzaList.empty();
	viewModel.pizzaList.load().then(function(){
		viewModel.isLoading = false;
	});
}

function onNavigatedTo(args){
	page = args.object;
	page.bindingContext = viewModel;
}

function viewDetails(args){
	router.goToWithData('details', viewModel.pizzaList.getItem(args.index));
}

function goToCart(){
	router.goToWithData("order", {});
}

exports.onNavigatedTo = onNavigatedTo;
exports.onLoaded = onLoaded;
exports.onItemTap = viewDetails;
exports.goToCart = goToCart;