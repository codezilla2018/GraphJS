import chai from 'chai'
import * as scatter_plot_data from './scatter-plot.data'
import ScatterPlot from '../../../src/charts/types/scatter-plot'

var assert = chai.assert

/**
 * Tests for ScatterPlot class
 * @test {ScatterPlot}
 */
describe('ScatterPlot', function () {

	/**
	 * Test to check the constructor behaviour with invalid data
	 * @test {ScatterPlot#constructor}
	 */
	describe('constructor', function () {
		it('should throw an InvalidGrammarError', function () {
			assert.throw(function () {
				new ScatterPlot('')
			})
		})
	})

	/**
	 * Test to check the constructor behaviour with valid data
	 * @test {ScatterPlot#constructor}
	 */
	describe('constructor', function () {
		it('should do nothing', function () {
			delete scatter_plot_data['default']
			new ScatterPlot(JSON.stringify(scatter_plot_data))
		})
	})
})