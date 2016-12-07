/// <reference path="../vendors/angular/angular.d.ts" />

/// <amd-dependency path="vendors/angular/angular" />
/// <amd-dependency path="vendors/angular/angular-route" />

import {TitleService} from "modules/titleService";
import {TitleDirective} from "modules/titleDirective";
import {Routes} from "modules/routes";

export const MAIN_MODULE_NAME: string = "myMainModule";

var myModule: ng.IModule = angular.module(MAIN_MODULE_NAME, [
    "ngRoute"
]);

myModule.service(TitleService.NAME, TitleService.FACTORY);
myModule.directive(TitleDirective.NAME, TitleDirective.FACTORY);
myModule.config(Routes.config);

myModule.run(["$http", ($http) => {
    alert("module loaded!");
}]);