import Chart from './chart'
import InvalidGrammarError from '../error/invalid-grammar-error'

export default class StackedBarChart extends Chart {

	constructor(data) {
		super()

		this._data = data

		// Define output JSON
		this._outputJson = {
			'data': {
				'columns': [],
				'type': 'bar',
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
		if(grammar.match(new RegExp('group [0-9a-zA-Z\\-]+[\\s]*(,[\\s]*)+[0-9a-zA-Z\\-]+'))){
			let labelList = grammar.match(new RegExp(' [0-9a-zA-Z\\-]+[\\s]*(,[\\s]*)+[0-9a-zA-Z\\-]+'))[0].split(',')
			labelList = labelList.map(e => e.trim())
			this._outputJson.data.groups.push(labelList)
		}else{
			throw new InvalidGrammarError()
		}
	}

	generateJson() {
		// TODO : Validate the label list
		return this._outputJson
	}
}