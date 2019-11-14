var app = angular.module('spaApp',['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider.when('/',
    {
      controller:'HomeController',
      templateUrl: 'app/views/home.html'
    })
  .when('/works',
    {
      controller: 'WorksController',
      templateUrl: 'app/views/works.html'
    })
    .when('/news',
      {
        controller: 'NewsController',
        templateUrl: 'app/views/news.html'
      })
   .when('/contact',
      {
        controller: 'ContactController',
        templateUrl: 'app/views/contact.html'
      })
   .when('/about',
      {
        controller: 'StoryController',
        templateUrl: 'app/views/about.html'
      })
  .when('/services',
     {
       controller: 'AdamController',
       templateUrl: 'app/views/services.html'
     })
   .when('/test',
      {
        controller: 'AdamController',
        templateUrl: 'app/views/test.html'
      })
});
