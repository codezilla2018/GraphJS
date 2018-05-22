import chai from 'chai'
import Chart from '../../src/chart/chart'
import InvalidOperationError from '../../src/error/invalid-operation-error'

var assert = chai.assert

describe('Chart', function() {

	describe('constructor', function () {
		it('should generate do nothing', function() {
			new Chart()
		})
	})

	describe('do', function () {
		it('should generate throw an error', function() {
			let chart = new Chart()
			assert.throw(function () {
				chart.do('xxx')
			}, InvalidOperationError)
		})
	})

	describe('do', function () {
		it('should generate throw an error', function() {
			let chart = new Chart()
			assert.throw(function () {
				chart.generateJson('xxx')
			}, InvalidOperationError)
		})
	})
})