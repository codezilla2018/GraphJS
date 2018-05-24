import Chart from '../chart'
import InvalidGrammarError from '../../errors/invalid-grammar-error'

/**
 * Represents a Donut Chart.
 */
export default class DonutChart extends Chart {

	/**
	 * Creates an instance of the DonutChart class
	 * @param {string} data - JSON string containing the data columns.
	 */
	constructor(data) {
		super(data)

		// Set charts types as Donut Chart
		this._outputJson.data.type = 'donut'
	}

	/**
	 * Alter the parameters of the chart using the provided grammar.
	 * @param {string} grammar - Simple grammar string describing the chart.
	 * @returns {boolean} - Returns true if the grammar is parsed.
	 */
	do(grammar) {
		if (!super.do(grammar)) {
			if (grammar.match(new RegExp('set title as [0-9a-zA-Z\\-]+'))) {
				let chartTitle = grammar.match(new RegExp('as [0-9a-zA-Z\\-]+'))[0].split(' ')[1]
				this._outputJson.donut.title = chartTitle
				return true
			} else {
				throw new InvalidGrammarError()
			}
		}
	}
}