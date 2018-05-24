import Chart from '../chart'
import InvalidGrammarError from '../../errors/invalid-grammar-error'

/**
 * Represents a Stacked Bar Chart.
 */
export default class StackedBarChart extends Chart {

	/**
	 * Creates an instance of the StackedBarChart class
	 * @param {string} data - JSON string containing the data columns.
	 */
	constructor(data) {
		super(data)

		// Set types as Bar Chart
		this._outputJson.data.type = 'bar'
	}

	/**
	 * Alter the parameters of the chart using the provided grammar.
	 * @param {string} grammar - Simple grammar string describing the chart.
	 * @returns {boolean} - Returns true if the grammar is parsed.
	 */
	do(grammar) {
		if (!super.do(grammar)) {
			if (grammar.match(new RegExp('group [0-9a-zA-Z\\-]+[\\s]*(,[\\s]*)+[0-9a-zA-Z\\-]+'))) {
				let labelList = grammar.match(new RegExp(' [0-9a-zA-Z\\-]+[\\s]*(,[\\s]*)+[0-9a-zA-Z\\-]+'))[0].split(',')
				labelList = labelList.map(e => e.trim())
				this._outputJson.data.groups.push(labelList)
				return true
			} else {
				throw new InvalidGrammarError()
			}
		}
	}
}