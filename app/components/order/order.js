var router = require('../../router'),
	dialogs = require('ui/dialogs'),
	createOrderViewModel = require('../../model/order'),
	orderViewModel,
	detailsViewModel;

orderViewModel = createOrderViewModel();
detailsViewModel = {};

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

exports.navigatedTo = function (args) {
	var page = args.object;
	page.bindingContext = orderViewModel;
	detailsViewModel = page.navigationContext;

	if (Object.size(detailsViewModel) > 0) {
		orderViewModel.add({
			_id: detailsViewModel.product.id,
			picUrl: detailsViewModel.product.picUrl,
			name: detailsViewModel.product.name,
			price: detailsViewModel.product.price,
			quantity: detailsViewModel.quantity
		});
	}
};

exports.removeProduct = function (args) {
	var product = args.view.bindingContext,
		index = orderViewModel.products.indexOf(product);

	orderViewModel.remove(index);
};

exports.sendOrder = function () {
	if (orderViewModel.isEmpty()) {
		dialogs.alert({
			message: 'You cannot submit an empty order.',
			okButtonText: 'Okay'
		}).then(navigateToList);
	} else {
		dialogs.confirm({
			title: 'Confirmar compra',
			message: 'Quiere enviar su pedido?',
			okButtonText: 'Yeah!',
			cancelButtonText: 'No',
		}).then(function (confirmed) {
			if (confirmed) {
				orderViewModel.send().then(function() {
					orderViewModel.empty();
					navigateToList(); 
				});
			}
		});
	}
};

exports.backToList = function () {
	navigateToList();
};

var navigateToList = function () {
	router.goToWithData("main", {});
};