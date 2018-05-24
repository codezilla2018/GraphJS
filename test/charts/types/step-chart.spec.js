import chai from 'chai'
import * as step_chart_data from './step-chart.data'
import StepChart from '../../../src/charts/types/step-chart'

var assert = chai.assert

/**
 * Tests for StepChart class
 * @test {StepChart}
 */
describe('StepChart', function () {

	/**
	 * Test to check the constructor behaviour with invalid data
	 * @test {StepChart#constructor}
	 */
	describe('constructor', function () {
		it('should throw an InvalidGrammarError', function () {
			assert.throw(function () {
				new StepChart('')
			})
		})
	})

	/**
	 * Test to check the constructor behaviour with valid data
	 * @test {StepChart#constructor}
	 */
	describe('constructor', function () {
		it('should do nothing', function () {
			delete step_chart_data['default']
			new StepChart(JSON.stringify(step_chart_data))
		})
	})

	/**
	 * Test to check the do function behaviour with invalid data
	 * @test {StepChart#do}
	 */
	describe('do', function () {
		it('should throw an InvalidGrammarError', function () {
			delete step_chart_data['default']
			let chart = new StepChart(JSON.stringify(step_chart_data))

			assert.throw(function () {
				chart.do('')
			})
		})
	})

	/**
	 * Test to check the do "" function behaviour with valid data
	 * @test {StepChart#do}
	 */
	describe('do', function () {
		it('should generate the expected JSON string', function () {
			delete step_chart_data['default']
			let chart = new StepChart(JSON.stringify(step_chart_data))
			chart.do('where data1 as step')
			chart.do('where data2 as area-step')

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': undefined,
					'width': undefined
				},
				'data': {
					'x': undefined,
					'xs': {},
					'columns': [['data1', ...step_chart_data.data1], ['data2', ...step_chart_data.data2]],
					'names': {},
					'types': {
						'data1': 'step',
						'data2': 'area-step'
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