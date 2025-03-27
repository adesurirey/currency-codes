var cc = require('./index');
var assert = require('assert');

// With the default options
assert(cc.code('EUR').countries.length === 36);
assert(cc.code('IDR').digits === 2);
assert(cc.number('967').currency === 'Zambian Kwacha');
assert(cc.number(967).currency === 'Zambian Kwacha');
assert(cc.country('Colombia').length === 2);
assert(cc.country('colombia').length === 2);
assert(cc.codes().length === 179);
assert(cc.countries().length === 260);
assert(cc.numbers().length === 179);
assert(cc.numbers()[0] === '784');
assert(cc.data().length == 179);

// With the option includeDeprecated set to true
assert(cc.code('EUR', { includeDeprecated: true }).countries.length === 36);
assert(cc.code('IDR', { includeDeprecated: true }).digits === 2);
assert(
  cc.number('967', { includeDeprecated: true }).currency === 'Zambian Kwacha'
);
assert(
  cc.number(967, { includeDeprecated: true }).currency === 'Zambian Kwacha'
);
assert(cc.country('Colombia', { includeDeprecated: true }).length === 2);
assert(cc.country('colombia', { includeDeprecated: true }).length === 2);
assert(cc.codes({ includeDeprecated: true }).length === 189);
assert(cc.countries({ includeDeprecated: true }).length === 266);
assert(cc.numbers({ includeDeprecated: true }).length === 189);
assert(cc.numbers({ includeDeprecated: true })[0] === '784');
assert(cc.data({ includeDeprecated: true }).length == 189);
