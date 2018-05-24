import chai from 'chai'
import * as donut_chart_data from './donut-chart.data'
import DonutChart from '../../../src/charts/types/donut-chart'

var assert = chai.assert

/**
 * Tests for DonutChart class
 * @test {DonutChart}
 */
describe('DonutChart', function () {

	/**
	 * Test to check the constructor behaviour with invalid data
	 * @test {DonutChart#constructor}
	 */
	describe('constructor', function () {
		it('should throw an InvalidGrammarError', function () {
			assert.throw(function () {
				new DonutChart('')
			})
		})
	})

	/**
	 * Test to check the constructor behaviour with valid data
	 * @test {DonutChart#constructor}
	 */
	describe('constructor', function () {
		it('should do nothing', function () {
			delete donut_chart_data['default']
			new DonutChart(JSON.stringify(donut_chart_data))
		})
	})

	/**
	 * Test to check the do function behaviour with invalid data
	 * @test {DonutChart#do}
	 */
	describe('do', function () {
		it('should throw an InvalidGrammarError', function () {
			delete donut_chart_data['default']
			let chart = new DonutChart(JSON.stringify(donut_chart_data))

			assert.throw(function () {
				chart.do('')
			})
		})
	})

	/**
	 * Test to check the do "Set title" function behaviour with valid data
	 * @test {DonutChart#do}
	 */
	describe('do', function () {
		it('should generate the expected JSON string', function () {
			delete donut_chart_data['default']
			let chart = new DonutChart(JSON.stringify(donut_chart_data))
			chart.do('set title as my-donut')

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': undefined,
					'width': undefined
				},
				'data': {
					'x': undefined,
					'xs': {},
					'columns': [['setosa', ...donut_chart_data.setosa],
						['versicolor', ...donut_chart_data.versicolor],
						['virginica', ...donut_chart_data.virginica]],
					'names': {},
					'types': {},
					'groups': [],
					'type': 'donut',
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
					'title': 'my-donut'
				}
			}))
		})
	})
})