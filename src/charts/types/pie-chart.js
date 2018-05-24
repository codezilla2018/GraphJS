import Chart from '../chart'

/**
 * Represents a Pie Chart.
 */
export default class PieChart extends Chart {

	/**
	 * Creates an instance of the PieChart class
	 * @param {string} data - JSON string containing the data columns.
	 */
	constructor(data) {
		super(data)

		// Set charts types as Pie
		this._outputJson.data.type = 'pie'
	}

}