// this file is the config file for requirejs, responsible for loading libraries of the project

require.config({
    baseUrl: "app",
    
    // alias libraries paths.  Must set 'angular'
    paths: {
        'angular': '../lib/angular/angular',
        'angular-route': '../lib/angular/angular-route',
        'angular-cookies': '../lib/angular/angular-cookies',
        'angularAMD': '../lib/angular/angularAMD.min',
    	'ui.bootstrap': '../lib/ui-bootstrap/ui-bootstrap-tpls-0.12.0'
    },

    wrapShim: true,
    waitSeconds: 0,    

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
    	'angular': {exports:'angular'},
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'angular-cookies': ['angular'],
    	'ui.bootstrap': ['angular']
    },

    // kick start application
    deps: ['app'],
    priority: [
               "angular"
               ]
});

require([
         "app/controller/viewclientinfocontroller.js",
         "app/controller/addclientinfocontroller.js",
         "app/controller/countrySelectionController.js" 
         
         ],function(){
 		console.log("loaded defines") ;
});