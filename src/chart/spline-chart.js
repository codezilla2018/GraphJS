import Chart from './chart'

export default class SplineChart extends Chart {

	constructor(data) {
		super()

		this.data = data

		// Define output JSON
		this.outputJson = {
			'data': {
				'columns': [],
				'type': 'spline'
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