"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bittrex = require("node-bittrex-api");
const config_1 = require("../config/config");
class Cotizacion {
    constructor() { }
    getCurrency(base, target) {
        bittrex.options(config_1.Config);
        bittrex.getmarketsummaries(function (data, err) {
            if (err) {
                return console.error(err);
            }
            console.log(data);
            return data;
        });
    }
}
exports.default = Cotizacion;
