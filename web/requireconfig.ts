/// <reference path="vendors/requirejs/require.d.ts" />

var config: RequireConfig = {
    waitSeconds: 15,
    shim: {
        "vendors/angular/angular-route": {
            deps: ["vendors/angular/angular"]
        },
        "vendors/openlayers/ol": {
            init: () => {
                alert("layers");
            }
        }
    }
}

require.config(config);