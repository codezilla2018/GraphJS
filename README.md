![GraphJS logo](https://raw.githubusercontent.com/codezilla2018/GraphJS/master/Resources/Original/analytics_64.png) 
## GraphJS 

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4eba90e2fb9c434d81180ea077e09b03)](https://www.codacy.com/app/OshanIvantha/GraphJS?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=OshanIvantha/GraphJS&amp;utm_campaign=Badge_Grade) [![Build Status](https://travis-ci.org/OshanIvantha/GraphJS.svg?branch=master)](https://travis-ci.org/OshanIvantha/GraphJS) [![Coverage Status](https://coveralls.io/repos/github/OshanIvantha/GraphJS/badge.svg?branch=master)](https://coveralls.io/github/OshanIvantha/GraphJS?branch=master)

A javascript library written in ES6 for parsing a simple grammar which is fully complient with [C3.js](http://c3js.org/). 

[Demo](http://ivantha.me/graphjs-demo/) |
[API Documentation](http://ivantha.me/GraphJS/) |
[Developer documentation](http://ivantha.me/graphjs-dev-docs/) |
[Contributing](https://raw.githubusercontent.com/codezilla2018/GraphJS/master/CONTRIBUTING.md) |
[Code of Conduct](https://raw.githubusercontent.com/codezilla2018/GraphJS/master/CODE_OF_CONDUCT.md) |

The [GraphJS](xxx) library is exported as a [UMD](https://github.com/umdjs/umd) module.

GraphJS is released under the [MIT license](https://raw.githubusercontent.com/codezilla2018/GraphJS/master/LICENSE) & supports modern environments.<br>

## Gettings Started

### Installation

In a browser:
```html
<script src="graphjs.min.js"></script>
```

Using npm:
```shell
$ npm i --save @ivantha/graphjs
```

### Usage

1) Initialize a chart using the Graph class
```
let chart = new Graph("generate <CHART_TYPE> from <JSON_DATASOURCE>")
```

Chart type can be any one of,
- LINE_CHART
- SIMPLE_XY_LINE_CHART
- STEP_CHART
- BAR_CHART
- PIE_CHART
- COMBINATION_CHART
- MULTIPLE_XY_LINE_CHART
- AREA_CHART
- STACKED_BAR_CHART
- DONUT_CHART
- SPLINE_CHART
- LINE_CHART_WITH_REGIONS
- STACKED_AREA_CHART
- SCATTER_PLOT
- GUAGE_CHART

2) Modify your chart using the suitable grammar
```
chart.do("hide tooltip")
chart.do('set gridline x at 20 as another-x')
```

3) Export the JSON string of the chart using,
```
let jsonOut = chart.generateJson()
```

4) Generated JSON output is fully complient with the C3.js library
```
let chart = c3.generate(jsonOut)
```

## Development

#### NPM scripts

 - `npm run esdoc`: Generate documentation
 - `npm run webpack`: Generate minified graphjs.min.js
 - `npm run babel`: Generate the compiled ES6 source files
 - `npm run build`: Build everything
 - `npm run clean`: Clean the build files
 - `npm run test`: Run all tests

### Built With

* [ES6]()
* [Babel](https://babeljs.io/) 
* [Webpack](https://webpack.js.org/) 
* [ESLint](https://eslint.org/) 
* [ESDoc](https://esdoc.org/) 
* [Istanbul](https://istanbul.js.org/) 
* [Mocha](https://mochajs.org/) 
* [Chai](http://www.chaijs.com/) 
* [TravisCI](https://travis-ci.org/) 
* [Coveralls.io](https://coveralls.io/)


### Authors

* **Oshan Mudannayake** - *Initial work* - [OshanIvantha](https://github.com/OshanIvantha)

### Acknowledgments

* <div>Logo Icon made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>