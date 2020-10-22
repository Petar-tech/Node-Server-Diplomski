"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var mongoose_1 = require("mongoose");
var router_1 = __importDefault(require("./routes/router"));
var port = process.env.PORT || 8000;
var server = express_1.default();
mongoose_1.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function () { return console.log("Connected to database."); });
server.get('/', function (req, resp) { return resp.send("<h1>Nothing.</h1>"); });
server.use('/data', router_1.default);
server.listen(port, function () { return console.log("Listening on PORT: " + port); });
