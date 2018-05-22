import chai from 'chai'
import AreaChart from '../../src/chart/area-chart'
import * as area_chart_data from './area_chart_data'
import InvalidGrammarError from '../../src/error/invalid-grammar-error'

var assert = chai.assert

describe('AreaChart', function() {

	describe('constructor', function () {
		it('should generate a valid JSON from the data', function() {
			delete area_chart_data['default']
			let expectedOutput = {
				'data': {
					'columns': [
						['data1', ...area_chart_data.data1],
						['data2', ...area_chart_data.data2]
					],
					'types': {}
				}
			}

			let areaChart = new AreaChart(JSON.stringify(area_chart_data))
			assert.equal(JSON.stringify(areaChart.generateJson()), JSON.stringify(expectedOutput))
		})
	})

	describe('do', function () {
		it('should generate a valid JSON from the data', function() {
			delete area_chart_data['default']
			let expectedOutput = {
				'data': {
					'columns': [
						['data1', ...area_chart_data.data1],
						['data2', ...area_chart_data.data2]
					],
					'types': {
						'data1': 'area'
					}
				}
			}

			let areaChart = new AreaChart(JSON.stringify(area_chart_data))
			areaChart.do('where data1 as area')
			assert.equal(JSON.stringify(areaChart.generateJson()), JSON.stringify(expectedOutput))
		})
	})

	describe('do', function () {
		it('should generate a valid JSON from the data', function() {
			delete area_chart_data['default']
			let expectedOutput = {
				'data': {
					'columns': [
						['data1', ...area_chart_data.data1],
						['data2', ...area_chart_data.data2]
					],
					'types': {
						'data2': 'area-spline'
					}
				}
			}

			let areaChart = new AreaChart(JSON.stringify(area_chart_data))
			areaChart.do('where data2 as area-spline')
			assert.equal(JSON.stringify(areaChart.generateJson()), JSON.stringify(expectedOutput))
		})
	})

	describe('do', function () {
		it('should generate a valid JSON from the data', function() {
			delete area_chart_data['default']

			let areaChart = new AreaChart(JSON.stringify(area_chart_data))
			assert.throw(function () {
				areaChart.do('xxx')
			}, InvalidGrammarError)
		})
	})
})