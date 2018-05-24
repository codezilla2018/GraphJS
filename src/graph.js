import ChartType from './charts/chart-type'
import LineChart from './charts/types/line-chart'
import SimpleXYLineChart from './charts/types/simple-xy-line-chart'
import StepChart from './charts/types/step-chart'
import BarChart from './charts/types/bar-chart'
import PieChart from './charts/types/pie-chart'
import MultipleXYLineChart from './charts/types/multiple-xy-line-chart'
import AreaChart from './charts/types/area-chart'
import StackedBarChart from './charts/types/stacked-bar-chart'
import DonutChart from './charts/types/donut-chart'
import SplineChart from './charts/types/spline-chart'
import StackedAreaChart from './charts/types/stacked-area-chart'
import ScatterPlot from './charts/types/scatter-plot'
import InvalidGrammarError from './errors/invalid-grammar-error'
import InvalidOperationError from './errors/invalid-operation-error'

/**
 * Graph is the base class of all operations withing the GraphJS.
 * It acts as a factory-pattern for creating any types of charts.
 */
export default class Graph {

	/**
	 * Creates an instance of the class Graph
	 * @param {string} grammar - Initial grammar provided to initiate the class.
	 * This should be in the form of : generate <GRAPH_TYPE> for <DATASOURCE>
	 */
	constructor(grammar) {
		/**
		 * Holds the instance of the charts types that was created within the object with the initial grammar.
		 * @types {Chart}
		 * @private
		 */
		this._chart = undefined

		// Validate and parse the grammar
		let grammarParser = new GrammarParser(grammar)

		let chartType = grammarParser.chartType
		switch (ChartType.enumValueOf(chartType)) {
		case ChartType.LINE_CHART:
			this._chart = new LineChart(grammarParser.datasource)
			break
		case ChartType.SIMPLE_XY_LINE_CHART:
			this._chart = new SimpleXYLineChart(grammarParser.datasource)
			break
		case ChartType.STEP_CHART:
			this._chart = new StepChart(grammarParser.datasource)
			break
		case ChartType.BAR_CHART:
			this._chart = new BarChart(grammarParser.datasource)
			break
		case ChartType.PIE_CHART:
			this._chart = new PieChart(grammarParser.datasource)
			break
		case ChartType.COMBINATION_CHART:
			throw new InvalidOperationError()
			// this._chart = new CombinationChart(grammarParser.datasource)
			// break
		case ChartType.MULTIPLE_XY_LINE_CHART:
			this._chart = new MultipleXYLineChart(grammarParser.datasource)
			break
		case ChartType.AREA_CHART:
			this._chart = new AreaChart(grammarParser.datasource)
			break
		case ChartType.STACKED_BAR_CHART:
			this._chart = new StackedBarChart(grammarParser.datasource)
			break
		case ChartType.DONUT_CHART:
			this._chart = new DonutChart(grammarParser.datasource)
			break
		case ChartType.SPLINE_CHART:
			this._chart = new SplineChart(grammarParser.datasource)
			break
		case ChartType.LINE_CHART_WITH_REGIONS:
			throw new InvalidOperationError()
			// this._chart = new LineChartWithRegions(grammarParser.datasource)
			// break
		case ChartType.STACKED_AREA_CHART:
			this._chart = new StackedAreaChart(grammarParser.datasource)
			break
		case ChartType.SCATTER_PLOT:
			this._chart = new ScatterPlot(grammarParser.datasource)
			break
		case ChartType.GAUGE_CHART:
			throw new InvalidOperationError()
			// this._chart = new GaugeChart(grammarParser.datasource)
			// break
		}
	}

	/**
	 * Parse the grammar given by the user.
	 * @param grammar
	 * @returns {boolean}
	 */
	do(grammar) {
		return this._chart.do(grammar)
	}

	/**
	 * Return the JSON output string created by parsing the input grammar.
	 * @returns {string}
	 */
	generateJson() {
		return this._chart.generateJson()
	}
}

/**
 * Does the initial grammar parsing.
 */
class GrammarParser {

	/**
	 * Creates an instance of the class GrammarParser
	 * @param {string} grammar - Initial grammar provided to initiate the class.
	 * This should be in the form of : generate <GRAPH_TYPE> for <DATASOURCE>
	 */
	constructor(grammar) {
		this.grammar = grammar
		this.chartType = undefined
		this.datasource = undefined

		// Verify the basic structure of the grammar
		if (GrammarParser.verifyStructure(grammar)) {
			let chartTypeExtract = grammar.match(new RegExp('generate [A-Z_]+ for'))[0]
			this.chartType = chartTypeExtract.slice(9, chartTypeExtract.length - 4)
			this.datasource = grammar.match(new RegExp('for {.*}'))[0].slice(4)

			// Verify the charts types and the datasource
			if (!GrammarParser.verifyChartType(this.chartType) || !GrammarParser.verifyDatasource(this.datasource)) {
				throw new InvalidGrammarError()
			}
		} else {
			throw new InvalidGrammarError()
		}
	}

	/**
	 * Verify the syntactical and the symantic validity of the whole grammar sentence.
	 * @param grammar
	 * @returns {boolean}
	 */
	static verifyStructure(grammar) {
		return grammar.match(new RegExp('generate [A-Z_]+ for {.*}'))
	}

	/**
	 * Verify the vaidity of the charts types.
	 * @param chartType
	 * @returns {boolean}
	 */
	static verifyChartType(chartType) {
		return ChartType.enumValueOf(chartType) instanceof ChartType
	}

	/**
	 * Verify the validity of the datasource.
	 * @param grammar
	 * @returns {boolean}
	 */
	// eslint-disable-next-line no-unused-vars
	static verifyDatasource(grammar) {
		// TODO : Verify datasource
		return true
	}
}