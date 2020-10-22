"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var SchemaFactory = function (name, collection) {
    var UnitSchema = new mongoose_1.Schema({
        value: {
            type: Number,
            required: true
        },
        createdAt: {
            type: String,
            required: true,
        }
    }, { collection: collection });
    return mongoose_1.model(name, UnitSchema);
};
var temp = SchemaFactory("Temperature", "temp");
var humid = SchemaFactory("Humidity", "humid");
var press = SchemaFactory("Pressure", "press");
exports.default = {
    temp: temp,
    humid: humid,
    press: press,
};
