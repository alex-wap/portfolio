////////////////////////////////////////////////////////////
//                        Angular                         //
////////////////////////////////////////////////////////////
var app = angular.module('app', ['ngRoute']);

////////////////////////////////////////////////////////////
//                        Routes                          //
////////////////////////////////////////////////////////////
app.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'partials/index.html',
        controller: 'MainController'     
    })
    .when('/contact',{
        templateUrl: 'partials/contact.html',
        controller: 'MainController'     
    })
    .when('/portfolio',{
        templateUrl: 'partials/portfolio.html',
        controller: 'MainController'     
    })  
    .otherwise({
        redirectTo: '/'
    });
});
////////////////////////////////////////////////////////////
//                        Factories                       //
////////////////////////////////////////////////////////////
app.factory('MainFactory', function() {
    var factory = {};

    factory.languages = ["JavaScript","Python","Swift", "HTML5","CSS3"]; // ,"JSX"
    factory.frontend = ["AngularJS","jQuery","AJAX","Bootstrap","Materialize"]; // ,"React.js","Webpack"
    factory.backend = ["Node.js","Django","Flask","Express.js","Socket.IO","AWS EC2","Nginx","RESTful"];
    factory.database = ["MySQL", "MongoDB", "SQL", "NoSQL", "Mongoose", "MAMP"];
    factory.software = ["Git","Xcode","Unix","Linux","Photoshop","Illustrator"];
    factory.misc = ["Scrum","AutoCAD","PTC Creo","SolidWorks","3D Studio Max","Ping Pong"]; 

    return factory;
})
////////////////////////////////////////////////////////////
//                        Controllers                     //
////////////////////////////////////////////////////////////
app.controller('MainController', function($scope, MainFactory) {
    console.log('Main Controller loaded');

    $scope.languages = MainFactory.languages;
    $scope.frontend = MainFactory.frontend;
    $scope.backend = MainFactory.backend;
    $scope.database = MainFactory.database;
    $scope.software = MainFactory.software;
    $scope.misc = MainFactory.misc;

})




