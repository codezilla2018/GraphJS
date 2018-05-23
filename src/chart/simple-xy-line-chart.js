import Chart from './chart'
import InvalidGrammarError from '../error/invalid-grammar-error'

export default class SimpleXYLineChart extends Chart {

	constructor(data) {
		super(data)
	}

	do(grammar) {
		if (!super.do(grammar)) {
			if (grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as [xX]'))) {
				let xAxisDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as'))[0].split(' ')[1]
				this._outputJson.data.x = xAxisDataLabel
			} else {
				throw new InvalidGrammarError()
			}
		}
	}
}