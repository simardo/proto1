/// <reference path="./typings/express/express.d.ts" />

import * as express from "express";

class Main {
    public static main() {
        var app: express.Application = express();

        app.use("/", express.static("web"));

        var server = app.listen(3000, () => {
            var host: string = server.address().address;
            var port: number = server.address().port;

            console.log('proto1-server listening at http://%s:%s', host, port);
        });
    }
}

Main.main();