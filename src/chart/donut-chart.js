import Chart from './chart'
import InvalidGrammarError from '../error/invalid-grammar-error'

export default class DonutChart extends Chart {

	constructor(data) {
		super()

		this._data = data
		this._chartTitle = ''

		// Define output JSON
		this._outputJson = {
			'data': {
				'columns': [],
				'type': 'donut'
			},
			'donut': {
				'title' : ''
			}
		}

		// Add _data
		let dataJson = JSON.parse(this._data)
		for (let i in dataJson) {
			this._outputJson.data.columns.push([i, ...dataJson[i]])
		}
	}

	do(grammar){
		if(grammar.match(new RegExp('set title as [0-9a-zA-Z\\-]+'))){
			this._chartTitle = grammar.match(new RegExp('as [0-9a-zA-Z\\-]+'))[0].split(' ')[1]
			this._outputJson.donut.title = this._chartTitle
		}else{
			throw new InvalidGrammarError()
		}
	}

	generateJson() {
		return this._outputJson
	}
}