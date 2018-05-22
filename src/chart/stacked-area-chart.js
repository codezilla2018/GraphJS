import Chart from './chart'
import InsufficientDataError from '../error/insufficient-data-error'
import InvalidGrammarError from '../error/invalid-grammar-error'

export default class StackedAreaChart extends Chart {

	constructor(data) {
		super()

		this._data = data
		this._areaDataLabel = ''
		this._areaSplineDataLabel = ''

		// Define output JSON
		this._outputJson = {
			'data': {
				'columns': [],
				'types': [],
				'groups': []
			}
		}

		// Add _data
		let dataJson = JSON.parse(this._data)
		for (let i in dataJson) {
			this._outputJson.data.columns.push([i, ...dataJson[i]])
		}
	}

	do(grammar){
		if (grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area and [0-9a-zA-Z\\-]+ as area-spline'))){
			this._areaDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area'))[0].split(' ')[1]
			this._areaSplineDataLabel = grammar.match(new RegExp('and [0-9a-zA-Z\\-]+ as area-spline'))[0].split(' ')[1]
			this._outputJson.data.types[this._areaDataLabel] = 'area'
			this._outputJson.data.types[this._areaSplineDataLabel] = 'area-spline'
		}else if(grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area'))){
			this._areaDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as spline'))[0].split(' ')[1]
			this._outputJson.data.types[this._areaDataLabel] = 'area'
		}else if (grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area-spline'))){
			this._areaSplineDataLabel = grammar.match(new RegExp('where [0-9a-zA-Z\\-]+ as area-spline'))[0].split(' ')[1]
			this._outputJson.data.types[this._areaSplineDataLabel] = 'area-spline'
		}else if(grammar.match(new RegExp('group [0-9a-zA-Z\\-]+[\\s]*(,[\\s]*)+[0-9a-zA-Z\\-]+'))){
			let labelList = grammar.match(new RegExp(' [0-9a-zA-Z\\-]+[\\s]*(,[\\s]*)+[0-9a-zA-Z\\-]+'))[0].split(',')
			labelList = labelList.map(e => e.trim())
			this._outputJson.data.groups.push(labelList)
		}else{
			throw new InvalidGrammarError()
		}
	}

	generateJson() {
		if(this._areaDataLabel === '' || this._areaSplineDataLabel === ''){
			throw new InsufficientDataError()
		}else{
			return this._outputJson
		}
	}
}