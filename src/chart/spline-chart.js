import Chart from './chart'

export default class SplineChart extends Chart {

	constructor(data) {
		super(data)

		// Set type as Spline Chart
		this._outputJson.data.type = 'spline'
	}
}