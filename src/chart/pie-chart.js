import Chart from './chart'

export default class PieChart extends Chart {

	constructor(data) {
		super(data)

		// Set chart type as Pie
		this._outputJson.data.type = 'pie'
	}

}