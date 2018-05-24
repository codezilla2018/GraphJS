import chai from 'chai'
import * as pie_chart_data from './pie-chart.data'
import PieChart from '../../../src/charts/types/pie-chart'

var assert = chai.assert

/**
 * Tests for PieChart class
 * @test {PieChart}
 */
describe('PieChart', function () {

	/**
	 * Test to check the constructor behaviour with invalid data
	 * @test {LineChart#constructor}
	 */
	describe('constructor', function () {
		it('should throw an InvalidGrammarError', function () {
			assert.throw(function () {
				new PieChart('')
			})
		})
	})

	/**
	 * Test to check the constructor behaviour with valid data
	 * @test {LineChart#constructor}
	 */
	describe('constructor', function () {
		it('should do nothing', function () {
			delete pie_chart_data['default']
			new PieChart(JSON.stringify(pie_chart_data))
		})
	})
})