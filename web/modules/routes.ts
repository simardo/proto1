/// <reference path="../vendors/angular/angular-route.d.ts" />

export class Routes {
    public static config: any = ["$routeProvider", "$locationProvider", ($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                templateUrl: "modules/main.html"
            })
            .when("/timeline", {
                templateUrl: "modules/timeline/timeline.html"
            });
    }];
}