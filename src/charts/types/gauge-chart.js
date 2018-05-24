import Chart from '../chart'

/**
 * Represents a Gauge Chart.
 */
export default class GaugeChart extends Chart {

	/**
	 * Creates an instance of the GaugeChart class
	 * @param {string} data - JSON string containing the data columns.
	 */
	constructor(data) {
		super(data)
	}
}