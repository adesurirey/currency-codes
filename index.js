const first = require("first-match");
const nub = require("nub");
const allCurrencies = require("./data");
const publishDate = require("./iso-4217-publish-date");

const DEFAULT_OPTIONS = {
  includeDeprecated: false,
};

const activeCurrencies = allCurrencies.filter((currency) => currency.active);

const data = function (includeDeprecated = false) {
  if (includeDeprecated) {
    return allCurrencies;
  }
  return activeCurrencies;
};
const code = function (code, options = DEFAULT_OPTIONS) {
  code = code.toUpperCase();
  const currencies = data(options.includeDeprecated);

  return first(currencies, function (c) {
    return c.code === code;
  });
};
const country = function (country, options = DEFAULT_OPTIONS) {
  country = country.toLowerCase();
  const currencies = data(options.includeDeprecated);

  return currencies.filter(function (c) {
    return (
      (
        c.countries.map(function (c) {
          return c.toLowerCase();
        }) || []
      ).indexOf(country) > -1
    );
  });
};
const number = function (number, options = DEFAULT_OPTIONS) {
  const currencies = data(options.includeDeprecated);

  return first(currencies, function (c) {
    return c.number === String(number);
  });
};
const codes = function (options = DEFAULT_OPTIONS) {
  const currencies = data(options.includeDeprecated);

  return currencies.map(function (c) {
    return c.code;
  });
};
const numbers = function (options = DEFAULT_OPTIONS) {
  const currencies = data(options.includeDeprecated);
  const items = currencies.map(function (c) {
    return c.number;
  });

  // handle cases where number is undefined (e.g. XFU and XBT)
  return items.filter(function (n) {
    if (n) {
      return n;
    }
  });
};
const countries = function (options = DEFAULT_OPTIONS) {
  const currencies = data(options.includeDeprecated);
  const m = currencies
    .filter(function (c) {
      return c.countries;
    })
    .map(function (c) {
      return c.countries;
    });

  return nub(Array.prototype.concat.apply([], m));
};

exports.code = code;
exports.country = country;
exports.number = number;
exports.codes = codes;
exports.numbers = numbers;
exports.countries = countries;
exports.data = data;
exports.publishDate = publishDate;
