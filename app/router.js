/* global global */
var frameModule = require("ui/frame");
var isHome;

module.exports = {
	goHome: function () {
		isHome = true;
		frameModule.topmost().navigate({
			moduleName: global.baseViewDirectory + "main/main",
			animated: true
		});
	},
	goTo: function(component, view){
		isHome = false;
		frameModule.topmost().navigate({
			moduleName: global.baseViewDirectory + component + "/" + view,
			animated: true
		});
	},
	goToWithData: function(module, data){
		isHome = false;
		frameModule.topmost().navigate({
			moduleName: global.baseViewDirectory + module + "/" + module,
			context: data || {},
			animated: true
		});
	},
	goBack: function () {
		if(isHome === false)
			frameModule.topmost().goBack();
	}
}