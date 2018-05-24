import Chart from '../chart'
import InvalidGrammarError from '../../errors/invalid-grammar-error'

/**
 * Represents a Step Chart.
 */
export default class StepChart extends Chart {

	/**
	 * Creates an instance of the StepChart class
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
			if (grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area-step'))) {
				this._areaStepDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area-step'))[0].split(' ')[1]
				this._outputJson.data.types[this._areaStepDataLabel] = 'area-step'
				return true
			} else if (grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as step'))) {
				this._stepDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as step'))[0].split(' ')[1]
				this._outputJson.data.types[this._stepDataLabel] = 'step'
				return true
			} else {
				throw new InvalidGrammarError()
			}
		}
	}
}