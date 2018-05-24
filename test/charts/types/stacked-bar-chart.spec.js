import chai from 'chai'
import * as stacked_bar_chart_data from './stacked-bar-chart.data'
import StackedBarChart from '../../../src/charts/types/stacked-bar-chart'

var assert = chai.assert

/**
 * Tests for StackedBarChart class
 * @test {StackedBarChart}
 */
describe('StackedBarChart', function () {

	/**
	 * Test to check the constructor behaviour with invalid data
	 * @test {StackedBarChart#constructor}
	 */
	describe('constructor', function () {
		it('should throw an InvalidGrammarError', function () {
			assert.throw(function () {
				new StackedBarChart('')
			})
		})
	})

	/**
	 * Test to check the constructor behaviour with valid data
	 * @test {StackedBarChart#constructor}
	 */
	describe('constructor', function () {
		it('should do nothing', function () {
			delete stacked_bar_chart_data['default']
			new StackedBarChart(JSON.stringify(stacked_bar_chart_data))
		})
	})

	/**
	 * Test to check the do function behaviour with invalid data
	 * @test {StackedBarChart#do}
	 */
	describe('do', function () {
		it('should throw an InvalidGrammarError', function () {
			delete stacked_bar_chart_data['default']
			let chart = new StackedBarChart(JSON.stringify(stacked_bar_chart_data))

			assert.throw(function () {
				chart.do('')
			})
		})
	})

	/**
	 * Test to check the do "" function behaviour with valid data
	 * @test {StackedBarChart#do}
	 */
	describe('do', function () {
		it('should generate the expected JSON string', function () {
			delete stacked_bar_chart_data['default']
			let chart = new StackedBarChart(JSON.stringify(stacked_bar_chart_data))
			chart.do('group data1, data2')

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': undefined,
					'width': undefined
				},
				'data': {
					'x': undefined,
					'xs': {},
					'columns': [['data1', ...stacked_bar_chart_data.data1],
						['data2', ...stacked_bar_chart_data.data2],
						['data3', ...stacked_bar_chart_data.data3]],
					'names': {},
					'types': {},
					'groups': [['data1', 'data2']],
					'type': 'bar',
					'labels': false
				},
				'point': {
					'show': true
				},
				'axis': {
					'rotated': false,
					'x': {
						'label': undefined,
						'max': undefined,
						'min': undefined
					},
					'y': {
						'label': undefined,
						'max': undefined,
						'min': undefined
					}
				},
				'grid': {
					'x': {
						'show': false,
						'lines': []
					},
					'y': {
						'show': false,
						'lines': []
					}
				},
				'legend': {
					'show': true,
					'position': 'bottom'
				},
				'tooltip': {
					'show': true,
					'grouped': true
				},
				'subchart': {
					'show': false
				},
				'zoom': {
					'enabled': false
				},
				'bar': {
					'width': {
						'ratio': undefined
					}
				},
				'donut': {
					'title': undefined
				}
			}))
		})
	})
})