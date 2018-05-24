import chai from 'chai'
import * as stacked_area_chart_data from './stacked-area-chart.data'
import StackedAreaChart from '../../../src/charts/types/stacked-area-chart'

var assert = chai.assert

/**
 * Tests for StackedAreaChart class
 * @test {StackedAreaChart}
 */
describe('StackedAreaChart', function () {

	/**
	 * Test to check the constructor behaviour with invalid data
	 * @test {StackedAreaChart#constructor}
	 */
	describe('constructor', function () {
		it('should throw an InvalidGrammarError', function () {
			assert.throw(function () {
				new StackedAreaChart('')
			})
		})
	})

	/**
	 * Test to check the constructor behaviour with valid data
	 * @test {StackedAreaChart#constructor}
	 */
	describe('constructor', function () {
		it('should do nothing', function () {
			delete stacked_area_chart_data['default']
			new StackedAreaChart(JSON.stringify(stacked_area_chart_data))
		})
	})

	/**
	 * Test to check the do function behaviour with invalid data
	 * @test {StackedAreaChart#do}
	 */
	describe('do', function () {
		it('should throw an InvalidGrammarError', function () {
			delete stacked_area_chart_data['default']
			let chart = new StackedAreaChart(JSON.stringify(stacked_area_chart_data))

			assert.throw(function () {
				chart.do('')
			})
		})
	})

	/**
	 * Test to check the do "" function behaviour with valid data
	 * @test {StackedAreaChart#do}
	 */
	describe('do', function () {
		it('should generate the expected JSON string', function () {
			delete stacked_area_chart_data['default']
			let chart = new StackedAreaChart(JSON.stringify(stacked_area_chart_data))
			chart.do('where data1 as area-spline')
			chart.do('where data2 as area')
			chart.do('group data1, data2')

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': undefined,
					'width': undefined
				},
				'data': {
					'x': undefined,
					'xs': {},
					'columns': [['data1', ...stacked_area_chart_data.data1], ['data2', ...stacked_area_chart_data.data2]],
					'names': {},
					'types': {
						'data1': 'area-spline',
						'data2': 'area'
					},
					'groups': [['data1', 'data2']],
					'type': undefined,
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