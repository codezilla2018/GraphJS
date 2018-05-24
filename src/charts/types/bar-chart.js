import Chart from '../chart'
import InvalidGrammarError from '../../errors/invalid-grammar-error'

/**
 * Represents a Bar Chart.
 */
export default class BarChart extends Chart {

	/**
	 * Creates an instance of the BarChart class
	 * @param {string} data - JSON string containing the data columns.
	 */
	constructor(data) {
		super(data)

		// Set to bar charts
		this._outputJson.data.type = 'bar'
	}

	/**
	 * Alter the parameters of the chart using the provided grammar.
	 * @param {string} grammar - Simple grammar string describing the chart.
	 * @returns {boolean} - Returns true if the grammar is parsed.
	 */
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
				return true
			} else {
				throw new InvalidGrammarError()
			}
		}
	}
}