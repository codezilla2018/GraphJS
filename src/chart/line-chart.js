import Chart from './chart'

export default class LineChart extends Chart {

	constructor(data) {
		super()

		this.data = data

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

	generateJson() {
		return this.outputJson
	}
}