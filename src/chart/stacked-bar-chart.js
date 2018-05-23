import Chart from './chart'
import InvalidGrammarError from '../error/invalid-grammar-error'

export default class StackedBarChart extends Chart {

	constructor(data) {
		super(data)

		// Set type as Bar Chart
		this._outputJson.data.type = 'bar'
	}

	do(grammar) {
		if (!super.do(grammar)) {
			if (grammar.match(new RegExp('group [0-9a-zA-Z\\-]+[\\s]*(,[\\s]*)+[0-9a-zA-Z\\-]+'))) {
				let labelList = grammar.match(new RegExp(' [0-9a-zA-Z\\-]+[\\s]*(,[\\s]*)+[0-9a-zA-Z\\-]+'))[0].split(',')
				labelList = labelList.map(e => e.trim())
				this._outputJson.data.groups.push(labelList)
			} else {
				throw new InvalidGrammarError()
			}
		}
	}
}