/// <reference path="../vendors/angular/angular.d.ts" />

export class TitleService {
    public static NAME: string = "titleService";
    public static FACTORY: ng.Injectable<Function> = ["$rootScope", TitleService];
    
    constructor (private $rootScope: ng.IRootScopeService) {
        this.$rootScope.$on("$locationChangeSuccess", () => {
            this.onLocationChange();
        })
    }

    private onLocationChange(): void {
    }
}