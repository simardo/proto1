/// <reference path="../vendors/angular/angular.d.ts" />

/// <amd-dependency path="vendors/angular/angular" />
/// <amd-dependency path="vendors/angular/angular-route" />
/// <amd-dependency path="vendors/openlayers/ol" />

import { TitleService } from "modules/titleservice";
import { TitleDirective } from "modules/titledirective";
import { CalendarDirective } from "modules/timeline/calendardirective";
import { Routes } from "modules/routes";

export const MAIN_MODULE_NAME: string = "myMainModule";

var myModule: ng.IModule = angular.module(MAIN_MODULE_NAME, [
    "ngRoute"
]);

myModule.service(TitleService.NAME, TitleService.FACTORY);
myModule.directive(TitleDirective.NAME, TitleDirective.FACTORY);
myModule.directive(CalendarDirective.NAME, CalendarDirective.FACTORY);
myModule.config(Routes.config);

myModule.run(["$http", ($http) => {
}]);