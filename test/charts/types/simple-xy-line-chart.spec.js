import chai from 'chai'
import * as simple_xy_line_chart_data from './simple-xy-line-chart.data'
import SimpleXYLineChart from '../../../src/charts/types/simple-xy-line-chart'

var assert = chai.assert

/**
 * Tests for SimpleXYLineChart class
 * @test {SimpleXYLineChart}
 */
describe('SimpleXYLineChart', function () {

	/**
	 * Test to check the constructor behaviour with invalid data
	 * @test {SimpleXYLineChart#constructor}
	 */
	describe('constructor', function () {
		it('should throw an InvalidGrammarError', function () {
			assert.throw(function () {
				new SimpleXYLineChart('')
			})
		})
	})

	/**
	 * Test to check the constructor behaviour with valid data
	 * @test {SimpleXYLineChart#constructor}
	 */
	describe('constructor', function () {
		it('should do nothing', function () {
			delete simple_xy_line_chart_data['default']
			new SimpleXYLineChart(JSON.stringify(simple_xy_line_chart_data))
		})
	})

	/**
	 * Test to check the do function behaviour with invalid data
	 * @test {AreaChart#do}
	 */
	describe('do', function () {
		it('should throw an InvalidGrammarError', function () {
			delete simple_xy_line_chart_data['default']
			let chart = new SimpleXYLineChart(JSON.stringify(simple_xy_line_chart_data))

			assert.throw(function () {
				chart.do('')
			})
		})
	})

	/**
	 * Test to check the do "X axis data label" function behaviour with valid data
	 * @test {SimpleXYLineChart#do}
	 */
	describe('do', function () {
		it('should generate the expected JSON string', function () {
			delete simple_xy_line_chart_data['default']
			let chart = new SimpleXYLineChart(JSON.stringify(simple_xy_line_chart_data))
			chart.do('where myX as x')

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': undefined,
					'width': undefined
				},
				'data': {
					'x': 'myX',
					'xs': {},
					'columns': [['myX', ...simple_xy_line_chart_data.myX],
						['data1', ...simple_xy_line_chart_data.data1],
						['data2', ...simple_xy_line_chart_data.data2]],
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