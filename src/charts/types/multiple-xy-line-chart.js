import Chart from '../chart'
import InvalidGrammarError from '../../errors/invalid-grammar-error'

/**
 * Represents a Multiple XY line Chart.
 */
export default class MultipleXYLineChart extends Chart {

	/**
	 * Creates an instance of the MultipleXYLineChart class
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
			if (grammar.match(new RegExp('set [0-9a-zA-Z\\-]+ for [0-9a-zA-Z\\-]+'))) {
				let p1 = grammar.match(new RegExp('set [0-9a-zA-Z\\-]+ for'))[0].split(' ')[1]
				let p2 = grammar.match(new RegExp('for [0-9a-zA-Z\\-]+'))[0].split(' ')[1]
				this._outputJson.data.xs[p1] = p2
				return true
			} else {
				throw new InvalidGrammarError()
			}
		}
	}
}