import Chart from './chart'
import InvalidGrammarError from '../error/invalid-grammar-error'

export default class BarChart extends Chart {

	constructor(data) {
		super(data)

		// Set to bar chart
		this._outputJson.data.type = 'bar'
	}

	do(grammar) {
		if (!super.do(grammar)) {
			if (grammar.match(new RegExp('set bar width as \\d+(\\.\\d+)*( pixels)?'))) {
				let widthValue = grammar.match(new RegExp('set bar width as \\d+(\\.\\d+)*'))[0].split(' ')[4]
				if (grammar.match(new RegExp('pixels'))) {
					let barWidthPixels = Number(widthValue)
					this._outputJson['bar'] = {
						'width': barWidthPixels
					}
				} else {
					let barWidthRatio = Number(widthValue)
					this._outputJson['bar'] = {
						'width': {
							'ratio': barWidthRatio
						}
					}
				}
			} else {
				throw new InvalidGrammarError()
			}
		}
	}
}