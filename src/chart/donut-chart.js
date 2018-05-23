import Chart from './chart'
import InvalidGrammarError from '../error/invalid-grammar-error'

export default class DonutChart extends Chart {

	constructor(data) {
		super(data)

		// Set chart type as Donut Chart
		this._outputJson.data.type = 'donut'
	}

	do(grammar) {
		if (grammar.match(new RegExp('set title as [0-9a-zA-Z\\-]+'))) {
			let chartTitle = grammar.match(new RegExp('as [0-9a-zA-Z\\-]+'))[0].split(' ')[1]
			this._outputJson.donut.title = chartTitle
		} else {
			throw new InvalidGrammarError()
		}
	}
}