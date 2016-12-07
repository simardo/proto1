/// <reference path="../vendors/angular/angular-route.d.ts" />

export class Routes {
    public static config: any = ["$routeProvider", ($routeProvider: ng.route.IRouteProvider) => {
        $routeProvider.when("/", {
            template: "<span>Allo Chou</span>"
        });
    }];
}