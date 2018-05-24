import chai from 'chai'
import * as multiple_xy_line_chart_data from './multiple-xy-line-chart.data'
import MultipleXYLineChart from '../../../src/charts/types/multiple-xy-line-chart'

var assert = chai.assert

/**
 * Tests for MultipleXYLineChart class
 * @test {MultipleXYLineChart}
 */
describe('MultipleXYLineChart', function () {

	/**
	 * Test to check the constructor behaviour with invalid data
	 * @test {MultipleXYLineChart#constructor}
	 */
	describe('constructor', function () {
		it('should throw an InvalidGrammarError', function () {
			assert.throw(function () {
				new MultipleXYLineChart('')
			})
		})
	})

	/**
	 * Test to check the constructor behaviour with valid data
	 * @test {MultipleXYLineChart#constructor}
	 */
	describe('constructor', function () {
		it('should do nothing', function () {
			delete multiple_xy_line_chart_data['default']
			new MultipleXYLineChart(JSON.stringify(multiple_xy_line_chart_data))
		})
	})

	/**
	 * Test to check the do function behaviour with invalid data
	 * @test {MultipleXYLineChart#do}
	 */
	describe('do', function () {
		it('should throw an InvalidGrammarError', function () {
			delete multiple_xy_line_chart_data['default']
			let chart = new MultipleXYLineChart(JSON.stringify(multiple_xy_line_chart_data))

			assert.throw(function () {
				chart.do('')
			})
		})
	})

	/**
	 * Test to check the do "Axis data mapping" function behaviour with valid data
	 * @test {MultipleXYLineChart#do}
	 */
	describe('do', function () {
		it('should generate the expected JSON string', function () {
			delete multiple_xy_line_chart_data['default']
			let chart = new MultipleXYLineChart(JSON.stringify(multiple_xy_line_chart_data))
			chart.do('set data1 for x1')
			chart.do('set data2 for x2')

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': undefined,
					'width': undefined
				},
				'data': {
					'x': undefined,
					'xs': {
						'data1': 'x1',
						'data2': 'x2'
					},
					'columns': [['x1', ...multiple_xy_line_chart_data.x1],
						['x2', ...multiple_xy_line_chart_data.x2],
						['data1', ...multiple_xy_line_chart_data.data1],
						['data2', ...multiple_xy_line_chart_data.data2]],
					'names': {},
					'types': {},
					'groups': [],
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