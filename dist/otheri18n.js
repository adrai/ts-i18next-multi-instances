"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = require("i18next");
const nsA_json_1 = __importDefault(require("./otherlocales/en/nsA.json"));
const nsA_json_2 = __importDefault(require("./otherlocales/de/nsA.json"));
const i18n = (0, i18next_1.createInstance)();
i18n.init({
    debug: true,
    fallbackLng: 'en',
    defaultNS: 'nsA',
    resources: {
        en: {
            nsA: nsA_json_1.default,
        },
        de: {
            nsA: nsA_json_2.default,
        },
    },
});
exports.default = i18n;
//# sourceMappingURL=otheri18n.js.map