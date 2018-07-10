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

    factory.languages = ["C#","JavaScript","Python","Swift","PowerShell","HTML5","CSS3"];
    factory.webservices = ["Amazon Web Services EC2", "AWS S3","AWS Lambda","Azure VM","Azure App Service"]; 
    factory.backend = [".NET","Node.js","Django","Flask","Express.js","Socket.IO","Nginx"];
    factory.database = ["MySQL", "MongoDB", "SQL", "NoSQL", "Mongoose", "MAMP"];
    factory.software = ["Git","Visual Studio","Xcode","Unix","Linux","Windows","Photoshop","Illustrator"];
    factory.misc = ["Scrum","AutoCAD","PTC Creo","SolidWorks","3D Studio Max","Ping Pong"]; 

    return factory;
})
////////////////////////////////////////////////////////////
//                        Controllers                     //
////////////////////////////////////////////////////////////
app.controller('MainController', function($scope, MainFactory) {
    console.log('Main Controller loaded');

    $scope.languages = MainFactory.languages;
    $scope.webservices = MainFactory.webservices;
    $scope.backend = MainFactory.backend;
    $scope.database = MainFactory.database;
    $scope.software = MainFactory.software;
    $scope.misc = MainFactory.misc;

})




