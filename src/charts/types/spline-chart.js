import Chart from '../chart'

/**
 * Represents a Spline Chart.
 */
export default class SplineChart extends Chart {

	/**
	 * Creates an instance of the SplineChart class
	 * @param {string} data - JSON string containing the data columns.
	 */
	constructor(data) {
		super(data)

		// Set types as Spline Chart
		this._outputJson.data.type = 'spline'
	}
}