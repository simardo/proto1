/// <reference path="vendors/requirejs/require.d.ts" />
import {Config} from "config";

var textPlugin: string = "https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min.js";
var configJson: string = textPlugin + "!config.json"; 

require(["configrequire", configJson], (configRequire, configValue) => {
    var config: Config = Config.loadFromJson(configValue);

    var messagePaths: Array<string> = config.messages.map(message => textPlugin + "!" + message.path);
    require (messagePaths, () => {
        alert("done!");
    });
});