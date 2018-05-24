import chai from 'chai'
import * as line_chart_data from './line-chart.data'
import LineChart from '../../../src/charts/types/line-chart'

var assert = chai.assert

/**
 * Tests for LineChart class
 * @test {LineChart}
 */
describe('LineChart', function () {

	/**
	 * Test to check the constructor behaviour with invalid data
	 * @test {LineChart#constructor}
	 */
	describe('constructor', function () {
		it('should throw an InvalidGrammarError', function () {
			assert.throw(function () {
				new LineChart('')
			})
		})
	})

	/**
	 * Test to check the constructor behaviour with valid data
	 * @test {LineChart#constructor}
	 */
	describe('constructor', function () {
		it('should do nothing', function () {
			delete line_chart_data['default']
			new LineChart(JSON.stringify(line_chart_data))
		})
	})
})