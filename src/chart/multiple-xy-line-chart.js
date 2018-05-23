import Chart from './chart'
import InvalidGrammarError from '../error/invalid-grammar-error'

export default class MultipleXYLineChart extends Chart {

	constructor(data) {
		super(data)
	}

	do(grammar) {
		if (!super.do(grammar)) {
			if (grammar.match(new RegExp('set [0-9a-zA-Z\\-]+ for [0-9a-zA-Z\\-]+'))) {
				let p1 = grammar.match(new RegExp('set [0-9a-zA-Z\\-]+ for'))[0].split(' ')[1]
				let p2 = grammar.match(new RegExp('for [0-9a-zA-Z\\-]+'))[0].split(' ')[1]
				this._outputJson.data.xs[p1] = p2
			} else {
				throw new InvalidGrammarError()
			}
		}
	}
}