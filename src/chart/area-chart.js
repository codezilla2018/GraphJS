import Chart from './chart'
import InvalidGrammarError from '../error/invalid-grammar-error'

export default class AreaChart extends Chart {

	constructor(data) {
		super(data)
	}

	do(grammar) {
		if (grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area-spline'))) {
			let areaSplineDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area-spline'))[0].split(' ')[1]
			this._outputJson.data.types[areaSplineDataLabel] = 'area-spline'
		} else if (grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area'))) {
			let areaDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area'))[0].split(' ')[1]
			this._outputJson.data.types[areaDataLabel] = 'area'
		} else {
			throw new InvalidGrammarError()
		}
	}
}