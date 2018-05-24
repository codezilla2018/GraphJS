import Chart from '../chart'
import InvalidGrammarError from '../../errors/invalid-grammar-error'

/**
 * Represents a Stacked Area Chart.
 */
export default class StackedAreaChart extends Chart {

	/**
	 * Creates an instance of the StackedAreaChart class
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
			if (grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area-spline'))) {
				let areaSplineDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area-spline'))[0].split(' ')[1]
				this._outputJson.data.types[areaSplineDataLabel] = 'area-spline'
				return true
			} else if (grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area'))) {
				let areaDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area'))[0].split(' ')[1]
				this._outputJson.data.types[areaDataLabel] = 'area'
				return true
			} else if (grammar.match(new RegExp('group [0-9a-zA-Z\\-]+[\\s]*(,[\\s]*)+[0-9a-zA-Z\\-]+'))) {
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