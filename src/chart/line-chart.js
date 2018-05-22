import Chart from './chart'

export default class LineChart extends Chart {

	constructor(data) {
		super()

		this._data = data

		// Define output JSON
		this._outputJson = {
			'data': {
				'columns': []
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