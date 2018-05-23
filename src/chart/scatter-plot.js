import Chart from './chart'

export default class ScatterPlot extends Chart {

	constructor(data) {
		super(data)

		// Set chart type as Scatter Plot
		this._outputJson.data.type = 'scatter'
	}

}