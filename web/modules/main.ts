/// <reference path="../vendors/angular/angular.d.ts" />

/// <amd-dependency path="vendors/angular/angular" />

export const MAIN_MODULE_NAME: string = "myMainModule";

var myModule: ng.IModule = angular.module(MAIN_MODULE_NAME, []);

myModule.run(["$http", ($http) => {
    alert("module loaded!");
}]);