"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const default_1 = __importDefault(require("../config/default"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = default_1.default.PORT || '8080';
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server run in port ! ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map