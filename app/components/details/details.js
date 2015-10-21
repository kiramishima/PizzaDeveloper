var router = require('../../router'),
    Observable = require("data/observable").Observable,
    detailsViewModel;
	
detailsViewModel = new Observable({
	quantity: 1,
	product: {}
});

exports.navigatedTo = function (args) {
	var page = args.object;
	detailsViewModel.set('product', page.navigationContext || {});
	detailsViewModel.set('quantity', 1);
	page.bindingContext = detailsViewModel;
};

exports.removeOne = function () {
	if (detailsViewModel.quantity > 1) {
		detailsViewModel.set('quantity', detailsViewModel.quantity - 1);
	}
};

exports.addOne = function () {
	if (detailsViewModel.quantity < 10) {
		detailsViewModel.set('quantity', detailsViewModel.quantity + 1);
	}
};

exports.addToOrder = function () {
	router.goToWithData("order", detailsViewModel);
};

exports.backToListView = function () {
	router.goToWithData("main", {});
};

exports.goToCart = function () {
	router.goToWithData("order", {});
};