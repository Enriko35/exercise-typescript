"use strict";
/**
 * START: Follow the instructions below.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.countries = exports.countryLanguages = void 0;
// The objects in the `countries` array use strings as the values of the
// `currency` properties.
// Complete this numeric enum so that it can be used instead of strings.
// Hint: Use the string values in the `currency` properties as the enum members.
var Currency;
(function (Currency) {
    Currency[Currency["euro"] = 0] = "euro";
    Currency[Currency["dollar"] = 1] = "dollar";
})(Currency || (Currency = {}));
// Replace the string values for the `currency` properties below with
const countries = [
    {
        name: "France",
        currency: Currency.euro,
    },
    {
        name: "United States of America",
        currency: Currency.dollar,
    },
    {
        name: "Italy",
        currency: Currency.euro,
    },
    {
        name: "New Zealand",
        currency: Currency.dollar,
    },
];
exports.countries = countries;
var LanguageStatus;
(function (LanguageStatus) {
    LanguageStatus["primary"] = "primary";
    LanguageStatus["secondary"] = "secondary";
})(LanguageStatus || (LanguageStatus = {}));
const countryLanguages = [
    { language: "Spanish", status: LanguageStatus.primary },
    { language: "English", status: LanguageStatus.secondary },
];
exports.countryLanguages = countryLanguages;
