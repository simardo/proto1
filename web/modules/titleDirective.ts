/// <reference path="../vendors/angular/angular.d.ts" />

import { TitleService } from "modules/titleService";

class TitleController {
    public static FACTORY: ng.Injectable<ng.IControllerConstructor> = [TitleService.NAME, TitleController];

    constructor(private titleService: TitleService) {
    }
}

export class TitleDirective implements ng.IDirective {
    public static NAME: string = "msTitle";
    public static FACTORY: ng.Injectable<ng.IDirectiveFactory> = () => new TitleDirective();

    restrict: string = "A";
    controller: ng.Injectable<ng.IControllerConstructor> = TitleController.FACTORY;
}