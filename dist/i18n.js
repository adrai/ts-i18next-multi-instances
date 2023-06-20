"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultNS = void 0;
const i18next_1 = __importDefault(require("i18next"));
const ns1_json_1 = __importDefault(require("./locales/en/ns1.json"));
const ns2_json_1 = __importDefault(require("./locales/en/ns2.json"));
const ns1_json_2 = __importDefault(require("./locales/de/ns1.json"));
const ns2_json_2 = __importDefault(require("./locales/de/ns2.json"));
exports.defaultNS = 'ns1';
i18next_1.default.init({
    debug: true,
    fallbackLng: 'en',
    defaultNS: exports.defaultNS,
    resources: {
        en: {
            ns1: ns1_json_1.default,
            ns2: ns2_json_1.default,
        },
        de: {
            ns1: ns1_json_2.default,
            ns2: ns2_json_2.default,
        },
    },
});
exports.default = i18next_1.default;
//# sourceMappingURL=i18n.js.map