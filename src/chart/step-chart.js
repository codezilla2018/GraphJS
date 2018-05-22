import Chart from './chart'
import InsufficientDataError from '../error/insufficient-data-error'
import InvalidGrammarError from '../error/invalid-grammar-error'

export default class StepChart extends Chart {

	constructor(data) {
		super()

		this._data = data
		this._stepDataLabel = ''
		this._areaStepDataLabel = ''

		// Define output JSON
		this._outputJson = {
			'data': {
				'columns': [],
				'types': []
			}
		}

		// Add _data
		let dataJson = JSON.parse(this._data)
		for (let i in dataJson) {
			this._outputJson.data.columns.push([i, ...dataJson[i]])
		}
	}

	do(grammar){
		if (grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as step and [0-9a-zA-Z\\-]+ as area-step'))){
			this._stepDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as step'))[0].split(' ')[1]
			this._areaStepDataLabel = grammar.match(new RegExp('and [0-9a-zA-Z\\-]+ as area-step'))[0].split(' ')[1]
			this._outputJson.data.types[this._stepDataLabel] = 'step'
			this._outputJson.data.types[this._areaStepDataLabel] = 'area-step'
		}else if(grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as step'))){
			this._stepDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as step'))[0].split(' ')[1]
			this._outputJson.data.types[this._stepDataLabel] = 'step'
		}else if (grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area-step'))){
			this._areaStepDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area-step'))[0].split(' ')[1]
			this._outputJson.data.types[this._areaStepDataLabel] = 'area-step'
		}else{
			throw new InvalidGrammarError()
		}
	}

	generateJson() {
		if(this._stepDataLabel === '' || this._areaStepDataLabel === ''){
			throw new InsufficientDataError()
		}else{
			return this._outputJson
		}
	}
}