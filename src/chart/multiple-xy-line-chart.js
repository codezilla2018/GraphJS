import Chart from './chart'
import InvalidGrammarError from '../error/invalid-grammar-error'

export default class MultipleXYLineChart extends Chart {

	constructor(data) {
		super()

		this._data = data
		this._xyMap = {}

		// Define output JSON
		this._outputJson = {
			'data': {
				'xs': {},
				'columns': []
			}
		}

		// Add _data
		let dataJson = JSON.parse(this._data)
		for (let i in dataJson) {
			this._outputJson.data.columns.push([i, ...dataJson[i]])
		}
	}

	do(grammar){
		if(grammar.match(new RegExp('set [0-9a-zA-Z\\-]+ for [0-9a-zA-Z\\-]+'))){
			let p1 = grammar.match(new RegExp('set [0-9a-zA-Z\\-]+ for'))[0].split(' ')[1]
			let p2 = grammar.match(new RegExp('for [0-9a-zA-Z\\-]+'))[0].split(' ')[1]
			this._xyMap[p1] = p2
			this._outputJson.data.xs[p1] = p2
		}else{
			throw new InvalidGrammarError()
		}
	}

	generateJson() {
		// TODO : Verify that the xs parameters are correct
		return this._outputJson
	}
}