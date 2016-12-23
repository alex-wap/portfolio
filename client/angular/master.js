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
    factory.backend = ["Node.js","Flask","Express.js","Socket.IO","AWS EC2","Nginx","RESTful"];
    factory.database = ["MySQL", "MongoDB", "SQL", "NoSQL", "MAMP"];
    factory.software = ["Git","Xcode","Unix","Linux","Photoshop","Illustrator"];
    factory.misc = ["Scrum","AutoCAD","PTC Creo","SolidWorks","3D Studio Max","Microsoft Office Suite","Ping Pong"]; 
    // factory.index = function(callback) {
    //     $http.get('/scores').then(function(response) {
    //         callback(response.data);
    //     })
    // }
    // factory.create = function(score, callback) {
    //     $http.post('/scores', score).then(function(response) {
    //         // console.log('Create Method', response);
    //         callback(response.data);
    //     })
    // }
    // factory.getUser = function(){
    //     if (factory.user){
    //         return factory.user;
    //     }
    // }
    return factory;
})
////////////////////////////////////////////////////////////
//                        Controllers                     //
////////////////////////////////////////////////////////////
app.controller('MainController', function($scope, MainFactory) {
    console.log('Main Controller loaded');
    // $scope.scores = [{name:'Alex',speed:100,time:10},{name:'Elliot',speed:10,time:20},{name:'Phil',speed:600,time:5}]

    $scope.languages = MainFactory.languages;
    $scope.frontend = MainFactory.frontend;
    $scope.backend = MainFactory.backend;
    $scope.database = MainFactory.database;
    $scope.software = MainFactory.software;
    $scope.misc = MainFactory.misc;

})




