"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var typeorm_1 = require("typeorm");
var app_1 = __importDefault(require("./app"));
var ormConfig_1 = __importDefault(require("./ormConfig"));
var PORT = process.env.PORT || 4000;
var PLAYGROUND_ENDPOINT = "/playground";
var GRAPHQL_ENDPOINT = "/graphql";
var appOptions = {
    port: PORT,
    playground: PLAYGROUND_ENDPOINT,
    endpoint: GRAPHQL_ENDPOINT
};
typeorm_1.createConnection(ormConfig_1.default).then(function () {
    app_1.default.start(appOptions, function (_a) {
        var port = _a.port;
        return console.log("Server is running on port " + port);
    });
});
//# sourceMappingURL=index.js.map