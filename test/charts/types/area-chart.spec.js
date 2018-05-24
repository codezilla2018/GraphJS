import chai from 'chai'
import * as area_chart_data from './area-chart.data'
import AreaChart from '../../../src/charts/types/area-chart'

var assert = chai.assert

/**
 * Tests for AreaChart class
 * @test {AreaChart}
 */
describe('AreaChart', function () {

	/**
	 * Test to check the constructor behaviour with invalid data
	 * @test {AreaChart#constructor}
	 */
	describe('constructor', function () {
		it('should throw an InvalidGrammarError', function () {
			assert.throw(function () {
				new AreaChart('')
			})
		})
	})

	/**
	 * Test to check the constructor behaviour with valid data
	 * @test {AreaChart#constructor}
	 */
	describe('constructor', function () {
		it('should do nothing', function () {
			delete area_chart_data['default']
			new AreaChart(JSON.stringify(area_chart_data))
		})
	})

	/**
	 * Test to check the do function behaviour with invalid data
	 * @test {AreaChart#do}
	 */
	describe('do', function () {
		it('should throw an InvalidGrammarError', function () {
			delete area_chart_data['default']
			let chart = new AreaChart(JSON.stringify(area_chart_data))

			assert.throw(function () {
				chart.do('')
			})
		})
	})

	/**
	 * Test to check the do "Area type" function behaviour with valid data
	 * @test {AreaChart#do}
	 */
	describe('do', function () {
		it('should generate the expected JSON string', function () {
			delete area_chart_data['default']
			let chart = new AreaChart(JSON.stringify(area_chart_data))
			chart.do('where data1 as area')
			chart.do('where data2 as area-spline')

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': undefined,
					'width': undefined
				},
				'data': {
					'x': undefined,
					'xs': {},
					'columns': [['data1', ...area_chart_data.data1], ['data2', ...area_chart_data.data2]],
					'names': {},
					'types': {
						'data1': 'area',
						'data2': 'area-spline'
					},
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