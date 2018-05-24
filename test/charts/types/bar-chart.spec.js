import chai from 'chai'
import * as bar_chart_data from './bar-chart.data'
import BarChart from '../../../src/charts/types/bar-chart'

var assert = chai.assert

/**
 * Tests for BarChart class
 * @test {BarChart}
 */
describe('BarChart', function () {

	/**
	 * Test to check the constructor behaviour with invalid data
	 * @test {BarChart#constructor}
	 */
	describe('constructor', function () {
		it('should throw an InvalidGrammarError', function () {
			assert.throw(function () {
				new BarChart('')
			})
		})
	})

	/**
	 * Test to check the constructor behaviour with valid data
	 * @test {BarChart#constructor}
	 */
	describe('constructor', function () {
		it('should do nothing', function () {
			delete bar_chart_data['default']
			new BarChart(JSON.stringify(bar_chart_data))
		})
	})

	/**
	 * Test to check the do function behaviour with invalid data
	 * @test {BarChart#do}
	 */
	describe('do', function () {
		it('should throw an InvalidGrammarError', function () {
			delete bar_chart_data['default']
			let chart = new BarChart(JSON.stringify(bar_chart_data))

			assert.throw(function () {
				chart.do('')
			})
		})
	})

	/**
	 * Test to check the do "" function behaviour with valid data
	 * @test {BarChart#do}
	 */
	describe('do', function () {
		it('should generate the expected JSON string', function () {
			delete bar_chart_data['default']
			let chart = new BarChart(JSON.stringify(bar_chart_data))
			chart.do('set bar width as 0.5')
			chart.do('set bar width as 100 pixels')

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': undefined,
					'width': undefined
				},
				'data': {
					'x': undefined,
					'xs': {},
					'columns': [['data1', ...bar_chart_data.data1], ['data2', ...bar_chart_data.data2]],
					'names': {},
					'types': {},
					'groups': [],
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
					'width': 100
				},
				'donut': {
					'title': undefined
				}
			}))
		})
	})
})