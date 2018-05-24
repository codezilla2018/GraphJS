import Chart from '../chart'
import InvalidGrammarError from '../../errors/invalid-grammar-error'

/**
 * Represents a Simple XY Line Chart.
 */
export default class SimpleXYLineChart extends Chart {

	/**
	 * Creates an instance of the SimpleXYLineChart class
	 * @param {string} data - JSON string containing the data columns.
	 */
	constructor(data) {
		super(data)
	}

	/**
	 * Alter the parameters of the chart using the provided grammar.
	 * @param {string} grammar - Simple grammar string describing the chart.
	 * @returns {boolean} - Returns true if the grammar is parsed.
	 */
	do(grammar) {
		if (!super.do(grammar)) {
			if (grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as [xX]'))) {
				let xAxisDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as'))[0].split(' ')[1]
				this._outputJson.data.x = xAxisDataLabel
				return true
			} else {
				throw new InvalidGrammarError()
			}
		}
	}
}