/// <reference path="vendors/requirejs/require.d.ts" />

var config: RequireConfig = {
    baseUrl: "/impl",
    waitSeconds: 15,
    shim: {
        "vendors/angular/angular-route": {
            deps: ["vendors/angular/angular"]
        }
    }
}

require.config(config);