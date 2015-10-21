var dialogs = require('ui/dialogs'),
    router = require('../../router'),
    User = require('../../model/user').User;

var page;

function onPageLoaded(args){
    page = args.object;
    page.bindingContext = new User();
}

function goToSignUp(){
	router.goTo("signup", "sign_up");
}

exports.onPageLoaded = onPageLoaded;
exports.goToSignUp = goToSignUp;