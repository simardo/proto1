/// <reference path="../../vendors/openlayers/ol.d.ts" />

var inscription = {
    'type': 'FeatureCollection',
    'crs': {
        'type': 'name',
        'properties': {
            'name': 'EPSG:3857'
        }
    },
    'features': [{
        'type': 'Feature',
        'properties': {
            'name': "Période d'inscription H17"
        },
        'geometry': {
            'type': 'LineString',
            'coordinates': [[0, 0], [10e6, 0]]
        }
    }, {
        'type': 'Feature',
        'properties': {
            'name': "Modification choix de cours H17"
        },
        'geometry': {
            'type': 'LineString',
            'coordinates': [[10e6, 0], [15e6, 0]]
        }
    }, {
        'type': 'Feature',
        'properties': {
            'name': "Période d'abandon H17"
        },
        'geometry': {
            'type': 'LineString',
            'coordinates': [[15e6, 0], [20e6, 0]]
        }
    }]
};

var schedule = {
    'type': 'FeatureCollection',
    'crs': {
        'type': 'name',
        'properties': {
            'name': 'EPSG:3857'
        }
    },
    'features': [{
        'type': 'Feature',
        'properties': {
            'name': "IFT-12343"
        },
        'geometry': {
            'type': 'LineString',
            'coordinates': [[500e3, -5e5], [800e3, -5e5]]
        }
    }, {
        'type': 'Feature',
        'properties': {
            'name': "MNG-43543"
        },
        'geometry': {
            'type': 'LineString',
            'coordinates': [[1000e3, -5e5], [1300e3, -5e5]]
        }
    }, {
        'type': 'Feature',
        'properties': {
            'name': "MAT-38765"
        },
        'geometry': {
            'type': 'LineString',
            'coordinates': [[2000e3, -5e5], [2300e3, -5e5]]
        }
    }]
};

class CalendarController {
    public static FACTORY: ng.Injectable<ng.IControllerConstructor> = [CalendarController];

    constructor() {
        var sourceInscription = new ol.source.Vector({
            features: (new ol.format.GeoJSON()).readFeatures(inscription)
        });

        var sourceSchedule = new ol.source.Vector({
            features: (new ol.format.GeoJSON()).readFeatures(schedule)
        });

        var layerInscription = new ol.layer.Vector({
            source: sourceInscription,
            style: this.getStylesInscription
        });

        var layerSchedule = new ol.layer.Vector({
            source: sourceSchedule,
            style: this.getStylesSchedule
        });

        var map = new ol.Map({
            layers: [layerInscription, layerSchedule],
            target: 'map',
            view: new ol.View({
                center: [0, 3000000],
                zoom: 2
            })
        });
    }

    private getStylesInscription(feature, resolution): ol.style.Style[] {
        var fontSize: string = "10px sans-serif";
        if (resolution < 10000) {
            fontSize = "20px sans-serif";
        } else if (resolution < 20000) {
            fontSize = "15px sans-serif";
        }
        return [
            new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'blue',
                    width: 3
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(0, 0, 255, 0.1)'
                }),
                text: new ol.style.Text({
                    font: fontSize,
                    text: feature.get("name"),
                    offsetY: -15
                })
            }),
            new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 5,
                    fill: new ol.style.Fill({
                        color: 'orange'
                    })
                }),
                geometry: function (feature) {
                    // return the coordinates of the first ring of the polygon
                    var coordinates = (<any>feature.getGeometry()).getCoordinates()[0];
                    return new ol.geom.Point(coordinates);
                }
            })
        ];
    }

    private getStylesSchedule(feature, resolution): ol.style.Style[] {
        console.debug(resolution);
        return [
            new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'green',
                    width: 3
                }),
                fill: new ol.style.Fill({
                    color: 'green'
                }),
                text: new ol.style.Text({
                    font: '10px sans-serif',
                    text: resolution < 10000 ? feature.get("name"): "",
                    offsetY: -15
                })
            }),
            new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 5,
                    fill: new ol.style.Fill({
                        color: 'navy'
                    })
                }),
                geometry: function (feature) {
                    // return the coordinates of the first ring of the polygon
                    var coordinates = (<any>feature.getGeometry()).getCoordinates()[0];
                    return new ol.geom.Point(coordinates);
                }
            })
        ];
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