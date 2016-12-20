/// <reference path="vendors/requirejs/require.d.ts" />
/// <reference path="vendors/angular/angular.d.ts" />

import * as Config from "config";

var language: string = window.navigator.language.substr(0, 2);

var textPlugin: string = "https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min.js";
var jsonConfig: string = textPlugin + "!config.json";

require(["requireconfig", jsonConfig], (requireConfig, configValue) => {
    var config: Config.Config = Config.Config.loadFromJson(configValue);

//    var messagePath: string = textPlugin + "!" + config.getLanguagePath(language);
//    require([messagePath], () => {
//        var mainModule: Config.MainModule = config.main;
//        require([mainModule.path], (main) => {
            //angular.bootstrap(document, [mainModule.name]);
            alert("coucou"!);
//        });
//    });
});