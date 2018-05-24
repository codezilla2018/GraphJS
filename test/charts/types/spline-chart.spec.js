import chai from 'chai'
import * as spline_chart_data from './spline-chart.data'
import SplineChart from '../../../src/charts/types/spline-chart'

var assert = chai.assert

/**
 * Tests for SplineChart class
 * @test {SplineChart}
 */
describe('SplineChart', function () {

	/**
	 * Test to check the constructor behaviour with invalid data
	 * @test {SplineChart#constructor}
	 */
	describe('constructor', function () {
		it('should throw an InvalidGrammarError', function () {
			assert.throw(function () {
				new SplineChart('')
			})
		})
	})

	/**
	 * Test to check the constructor behaviour with valid data
	 * @test {SplineChart#constructor}
	 */
	describe('constructor', function () {
		it('should do nothing', function () {
			delete spline_chart_data['default']
			new SplineChart(JSON.stringify(spline_chart_data))
		})
	})
})