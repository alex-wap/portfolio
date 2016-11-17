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

    factory.languages = ["JavaScript","Python","Swift"];
    factory.frameworks = ["Node.js","AngularJS","Express.js","jQuery","Flask"]; // ,"React.js"
    factory.databases = ["MySQL", "MongoDB", "SQL", "NoSQL"];  
    factory.tools = ["Git", "AWS EC2","AJAX","Unix/Linux","Socket.io","Xcode"];
    factory.design = ["HTML5","CSS3","Bootstrap","Materialize","Photoshop","Illustrator"];
    factory.misc = ["PTC Creo","AutoCAD","SolidWorks","SketchUp","3D Studio Max","Microsoft Office Suite","Ping Pong"]; 

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
    $scope.frameworks = MainFactory.frameworks;
    $scope.databases = MainFactory.databases;
    $scope.tools = MainFactory.tools;
    $scope.design = MainFactory.design;
    $scope.misc = MainFactory.misc;

})
////////////////////////////////////////////////////////////
//                   Game Controller                      //
////////////////////////////////////////////////////////////

app.controller('GameController', function($scope, MainFactory) {
    console.log('Game Controller loaded');
    MainFactory.index(function(data) {
        console.log(data);
        $scope.scores = data;
    });
    console.log($scope.scores);
    // $scope.username = prompt("please enter a username");

    $scope.inputStyle = {'background-color':'none'}
    $scope.resetOn = false;
    $scope.editMode = false;
    $scope.isDisabled = false;
    $scope.resetDisabled = true;
    $scope.new_paragraph = Math.floor(Math.random()*$scope.paragraphs.length);
    $scope.text = $scope.paragraphs[$scope.new_paragraph];
    $scope.total_length = $scope.text.length;
    $scope.words = $scope.text.split(" ");
    $scope.finished = "";
    var editAttr = {};
    for (var i = 0; i < $scope.words.length-1; i++){
        $scope.words[i] = $scope.words[i]+" ";
    }
    $scope.totaltype = '';
    $scope.progress = 0;
    $scope.wpm = 0;

    $scope.index = 0;
    $scope.text_disable = true;

})




