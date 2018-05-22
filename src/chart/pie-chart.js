import Chart from './chart'

export default class PieChart extends Chart {

	constructor(data) {
		super()

		this._data = data

		// Define output JSON
		this._outputJson = {
			'data': {
				'columns': [],
				'type': 'pie'
			}
		}

		// Add _data
		let dataJson = JSON.parse(this._data)
		for (let i in dataJson) {
			this._outputJson.data.columns.push([i, ...dataJson[i]])
		}
	}

	generateJson() {
		return this._outputJson
	}
}