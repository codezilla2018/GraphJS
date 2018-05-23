import Chart from './chart'
import InvalidGrammarError from '../error/invalid-grammar-error'

export default class StepChart extends Chart {

	constructor(data) {
		super(data)
	}

	do(grammar) {
		if (!super.do(grammar)) {
			if (grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area-step'))) {
				this._areaStepDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area-step'))[0].split(' ')[1]
				this._outputJson.data.types[this._areaStepDataLabel] = 'area-step'
			} else if (grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as step'))) {
				this._stepDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as step'))[0].split(' ')[1]
				this._outputJson.data.types[this._stepDataLabel] = 'step'
			} else {
				throw new InvalidGrammarError()
			}
		}
	}
}