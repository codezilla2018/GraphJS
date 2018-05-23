import Chart from './chart'
import InvalidGrammarError from '../error/invalid-grammar-error'

export default class StackedAreaChart extends Chart {

	constructor(data) {
		super(data)
	}

	do(grammar) {
		if (grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area-spline'))) {
			let areaSplineDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area-spline'))[0].split(' ')[1]
			this._outputJson.data.types[areaSplineDataLabel] = 'area-spline'
		} else if (grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area'))) {
			let areaDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as spline'))[0].split(' ')[1]
			this._outputJson.data.types[areaDataLabel] = 'area'
		} else if (grammar.match(new RegExp('group [0-9a-zA-Z\\-]+[\\s]*(,[\\s]*)+[0-9a-zA-Z\\-]+'))) {
			let labelList = grammar.match(new RegExp(' [0-9a-zA-Z\\-]+[\\s]*(,[\\s]*)+[0-9a-zA-Z\\-]+'))[0].split(',')
			labelList = labelList.map(e => e.trim())
			this._outputJson.data.groups.push(labelList)
		} else {
			throw new InvalidGrammarError()
		}
	}
}