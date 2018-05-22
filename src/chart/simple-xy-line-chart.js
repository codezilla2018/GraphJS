import Chart from './chart'
import InsufficientDataError from '../error/insufficient-data-error'
import InvalidGrammarError from '../error/invalid-grammar-error'

export default class SimpleXYLineChart extends Chart {

	constructor(data) {
		super()

		this._data = data
		this._xAxisDataLabel = ''

		// Define output JSON
		this._outputJson = {
			'data': {
				'x': '',
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
		if(grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as [xX]'))){
			this._xAxisDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as'))[0].split(' ')[1]
			this._outputJson.data.x = this._xAxisDataLabel
		}else{
			throw new InvalidGrammarError()
		}
	}

	generateJson() {
		if(this._xAxisDataLabel === ''){
			throw new InsufficientDataError()
		}else{
			return this._outputJson
		}
	}
}