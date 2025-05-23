# currency-codes

A node.js module to list and work on currency codes based on the [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) standard.

	npm install currency-codes

## code('EUR')

``` js
var cc = require('currency-codes');
console.log(cc.code('EUR'));

/*
{
	code: 'EUR',
	number: 978,
	digits: 2,
	currency: 'Euro',
	countries: [
		'andorra', 'austria', 'belgium', 'cyprus', 'estonia', 'finland',
		'france', 'germany', 'greece', 'ireland', 'italy', 'kosovo',
		'luxembourg', 'malta', 'monaco', 'montenegro', 'netherlands',
		'portugal', 'san marino', 'slovakia', 'slovenia', 'spain',
		'vatican city' ],
	active: true
}
*/
```

## number(967)

``` js
var cc = require('currency-codes');
console.log(cc.number(967));

/*
{
	code: 'ZMW',
	number: 967,
	digits: 2,
	currency: 'Zambian kwacha',
	countries: [ 'zambia' ] },
	active: true
*/
```

## country('colombia')

``` js
var cc = require('currency-codes');
console.log(cc.country('colombia'));

/*
[
	{
		code: 'COP',
		number: 170,
		digits: 2,
		currency: 'Colombian peso',
		countries: [ 'colombia' ],
		active: true
	}, {
		code: 'COU',
		number: 970,
		digits: 2,
		currency: 'Unidad de Valor Real',
		countries: [ 'colombia' ],
		active: true
	}
]
*/
```

## codes()

``` js
var cc = require('currency-codes');
console.log(cc.codes());

/*
[
	'AED',
	'AFN',
	...
	'ZAR',
	'ZMW'
]
*/
```

## numbers()

``` js
var cc = require('currency-codes');
console.log(cc.numbers());

/*
[
	'784',
	'971',
	...
	'710',
	'967'
]
*/
```

## countries()

``` js
var cc = require('currency-codes');
console.log(cc.countries());

/*
[
	'united arab emirates',
	'afghanistan',
	...
]
*/
```

## data()

``` js
var cc = require('currency-codes');
console.log(cc.data());

/*
[{
	code: 'AED',
	number: '784',
	digits: 2,
	currency: 'United Arab Emirates dirham',
	countries: ['united arab emirates'],
	active: true
}, {
	code: 'AFN',
	number: '971',
	digits: 2,
	currency: 'Afghan afghani',
	countries: ['afghanistan'],
	active: true
}, {
	...
*/
```

## publishDate

```js
var cc = require('currency-codes');

console.log(cc.publishDate);

/*
2024-06-25
*/
```

## Using deprecated currencies

By default, the library only returns active currencies. To include deprecated currencies, set the `includeDeprecated` option to `true`.

``` js
var cc = require('currency-codes');
console.log(cc.code('ZWL', { includeDeprecated: true }));

/*
{
	code: 'ZWL',
	number: 932,
	digits: 2,
	currency: 'Zimbabwean dollar',
	countries: [ 'zimbabwe' ],
	active: false
}
*/
```

## Updating the data

Fetch the latest copy of ISO-4217 from the [maintainer](https://www.iso.org/iso-4217-currency-codes.html) and update this library's currency data file.

```bash
$ npm run iso

> currency-codes@2.1.0 iso
> npm run iso:fetch-xml && npm run iso:ingest-xml


> currency-codes@2.1.0 iso:fetch-xml
> node scripts/fetch-iso-4217-xml.js

Downloaded https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml to iso-4217-list-one.xml

> currency-codes@2.1.0 iso:ingest-xml
> node scripts/ingest-iso-4217-xml.js

Ingested iso-4217-list-one.xml into data.js
Wrote publish date to iso-4217-publish-date.js
```

Note: You may have to manually tweak the capitalization of some country's names.

# License

MIT
