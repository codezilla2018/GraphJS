import Chart from './chart'
import InsufficientDataError from '../error/insufficient-data-error'
import InvalidGrammarError from '../error/invalid-grammar-error'

export default class SimpleXYLineChart extends Chart {

	constructor(data) {
		super()

		this.data = data
		this.xAxisColumnLabel = ''

		// Define output JSON
		this.outputJson = {
			'data': {
				'columns': []
			}
		}

		// Add data
		let dataJson = JSON.parse(this.data)
		for (let i in dataJson) {
			this.outputJson.data.columns.push([i, ...dataJson[i]])
		}
	}

	do(grammar){
		// Add x axis column label
		if(grammar.match(new RegExp('where [a-zA-Z]+ as [xX]'))){
			this.xAxisColumnLabel = grammar.match(new RegExp('where [a-zA-Z]+ as'))[1]
		}else{
			throw new InvalidGrammarError()
		}
	}

	generateJson() {
		if(this.xAxisColumnLabel === ''){
			throw new InsufficientDataError()
		}else{
			return this.outputJson
		}
	}

	setXAxisColumnLabel(label) {
		this.xAxisColumnLabel = label

		// this.outputJson.data.
	}
}