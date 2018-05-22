import Chart from './chart'
import InvalidGrammarError from '../error/invalid-grammar-error'

export default class BarChart extends Chart {

	constructor(data) {
		super()

		this._data = data
		this._barWidthRatio = undefined
		this._barWidthPixels = undefined

		// Define output JSON
		this._outputJson = {
			'data': {
				'columns': [],
				'type': 'bar'
			}
		}

		// Add _data
		let dataJson = JSON.parse(this._data)
		for (let i in dataJson) {
			this._outputJson.data.columns.push([i, ...dataJson[i]])
		}
	}

	do(grammar){
		if(grammar.match(new RegExp('set bar width as \\d+(\\.\\d+)*( pixels)?'))){
			let widthValue = grammar.match(new RegExp('set bar width as \\d+(\\.\\d+)*'))[0].split(' ')[4]
			if(grammar.match(new RegExp('pixels'))){
				this._barWidthPixels = Number(widthValue)
				this._outputJson['bar'] = {
					'width' : this._barWidthPixels
				}
			}else{
				this._barWidthRatio = Number(widthValue)
				this._outputJson['bar'] = {
					'width' : {
						'ratio': this._barWidthRatio
					}
				}
			}
		}else{
			throw new InvalidGrammarError()
		}
	}

	generateJson() {
		return this._outputJson
	}
}