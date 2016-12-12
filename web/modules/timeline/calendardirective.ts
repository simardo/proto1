/// <reference path="../../vendors/openlayers/ol.d.ts" />

class CalendarController {
    public static FACTORY: ng.Injectable<ng.IControllerConstructor> = [CalendarController];

    constructor() {
        var options: olx.MapOptions = {
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([37.41, 8.82]),
                zoom: 4
            })
        };
        var map: ol.Map = new ol.Map(options);
    }
}

export class CalendarDirective implements ng.IDirective {
    public static NAME: string = "msCalendar";
    public static FACTORY: ng.Injectable<ng.IDirectiveFactory> = () => new CalendarDirective();

    restrict: string = "E";
    controller: ng.Injectable<ng.IControllerConstructor> = CalendarController.FACTORY;
    templateUrl: string = "modules/timeline/calendar.html";

    scope: any = {};
}