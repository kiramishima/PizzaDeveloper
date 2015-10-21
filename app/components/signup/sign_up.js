var dialogs = require('ui/dialogs'),
    router = require('../../router'),
    User = require('../../model/user').User;

var page;
function onPageLoaded(args){
	page = args.object; // object es un objeto de tipo Page, en este caso la instancia de nuestra vista.

	page.bindingContext = new User();
}

function goBack(){
	router.goBack();
}

exports.onPageLoaded = onPageLoaded;
exports.goBack = goBack;