var app=angular.module("routingapp",["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider
  .when(
    "/",
    {
        templateUrl: "home.html"
    }
    ).when(
        "/",
        {
            templateUrl: "About.html"
        }
        )
        .when(
            "/",
            {
                templateUrl: "Ourservice.html"
            }
    ).when(
        "/CSS",
        {
            templateUrl: "Ourcourse.html"
        }
    ).when(
        "/gallery",
        {
            templateUrl: "Contact.html"
        }
    ).otherwise(
        {
            template: "<h1>view not found</h1>"
        }
    )
});