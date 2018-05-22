import Chart from './chart'
import InvalidGrammarError from '../error/invalid-grammar-error'

export default class AreaChart extends Chart {

	constructor(data) {
		super()

		this._data = data
		this._areaDataLabel = ''
		this._areaSplineDataLabel = ''

		// Define output JSON
		this._outputJson = {
			'data': {
				'columns': [],
				'types': {}
			}
		}

		// Add _data
		let dataJson = JSON.parse(this._data)
		for (let i in dataJson) {
			this._outputJson.data.columns.push([i, ...dataJson[i]])
		}
	}

	do(grammar){
		if (grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area-spline'))){
			this._areaSplineDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area-spline'))[0].split(' ')[1]
			this._outputJson.data.types[this._areaSplineDataLabel] = 'area-spline'
		}else if(grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area'))){
			this._areaDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area'))[0].split(' ')[1]
			this._outputJson.data.types[this._areaDataLabel] = 'area'
		}else{
			throw new InvalidGrammarError()
		}
	}

	generateJson() {
		return this._outputJson
	}
}