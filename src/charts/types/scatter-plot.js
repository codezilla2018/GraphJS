import Chart from '../chart'

/**
 * Represents a Scatter Plot.
 */
export default class ScatterPlot extends Chart {

	/**
	 * Creates an instance of the ScatterPlot class
	 * @param {string} data - JSON string containing the data columns.
	 */
	constructor(data) {
		super(data)

		// Set charts types as Scatter Plot
		this._outputJson.data.type = 'scatter'
	}

}