/* global Promise */
/* global global */
function OrderViewModel() {
    'use strict';

    var observableModule = require('data/observable'),
        http = require('http'),
        createPizzaListViewModel = require('./pizzas'),
        orderViewModel;

    orderViewModel = new observableModule.Observable({
        products: createPizzaListViewModel([]),
        total: 0.00
    });

    orderViewModel.add = function (orderedProduct) {
        var product,
            productIndex;

        if (orderedProduct === null || orderedProduct === undefined) {
            return;
        }

        product = {
            _id: orderedProduct._id,
            name: orderedProduct.name,
            picUrl: orderedProduct.picUrl,
            price: orderedProduct.price,
            quantity: orderedProduct.quantity,
            subtotal: orderedProduct.price * orderedProduct.quantity
        };

        productIndex = indexOf(product);
        if (productIndex === -1) {
            orderViewModel.products.push(product);
        } else {
            updateProductQuantityAndPrice(productIndex, product.quantity);
            orderViewModel.products.push();
        }

        orderViewModel.total += product.subtotal;
    };

    orderViewModel.remove = function (index) {
        if (index < 0 || index >= orderViewModel.products.length) {
            throw new Error('Index outside of boundaries.');
        }

        if (orderViewModel.isEmpty()) {
            throw new Error('The list is already empty!');
        }

        var product = orderViewModel.products.getItem(index);
        orderViewModel.total -= product.subtotal;
        orderViewModel.products.splice(index, 1);
    };

    orderViewModel.send = function () {
        var orderedProducts = [];

        orderViewModel.products.forEach(function (p) {
            orderedProducts.push({
                _id: p.id,
                name: p.name,
                qty: p.quantity
            });
        }, this);
        console.log(global.userToken);
        return new Promise(function (resolve, reject) {
            http.request({
                url: 'https://pizzafest.herokuapp.com/Ordenar',
                method: 'POST',
                content: JSON.stringify({
                    orderedProducts: orderedProducts
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': global.userToken
                }
            }).then(function () {
                resolve();
            }).catch(function () {
                reject('Connection problems.');
            });
        });
    };

    orderViewModel.isEmpty = function () {
        return orderViewModel.products.length === 0;
    };

    orderViewModel.empty = function () {
        orderViewModel.products.empty();
        orderViewModel.set('total', 0.00);
    };

    var indexOf = function (product) {
        var i = 0,
            len = orderViewModel.products.length;

        for (; i < len; i += 1) {
            console.log(JSON.stringify(orderViewModel.products.getItem(i)));
            if (product._id === orderViewModel.products.getItem(i)._id) {
                return i;
            }
        }

        return -1;
    };

    var updateProductQuantityAndPrice = function (index, addedQuantity) {
        var product = orderViewModel.products.getItem(index);

        product.quantity += addedQuantity;
        product.subtotal = product.price * product.quantity;
    };

    return orderViewModel;
}

module.exports = OrderViewModel;