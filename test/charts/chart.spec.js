import chai from 'chai'
import Chart from '../../src/charts/chart'
import * as line_chart_data from './types/line-chart.data'

var assert = chai.assert

/**
 * Tests for Chart class
 * @test {Chart}
 */
describe('Chart', function () {

	/**
	 * Test to check the constructor behaviour with invalid data
	 * @test {Chart#constructor}
	 */
	describe('constructor', function () {
		it('should throw an InvalidGrammarError', function () {
			assert.throw(function () {
				new Chart('')
			})
		})
	})

	/**
	 * Test to check the constructor behaviour with valid data
	 * @test {Chart#constructor}
	 */
	describe('constructor', function () {
		it('should do nothing', function () {
			delete line_chart_data['default']
			new Chart(JSON.stringify(line_chart_data))
		})
	})

	/**
	 * Test to check the do function behaviour with invalid data
	 * @test {Chart#do}
	 */
	describe('do', function () {
		it('should return false', function () {
			delete line_chart_data['default']
			let chart = new Chart(JSON.stringify(line_chart_data))

			assert.equal(chart.do(''), false)
		})
	})

	/**
	 * Test to check the do "Grid Lines" function behaviour with valid data
	 * @test {Chart#do}
	 */
	describe('do', function () {
		it('should generate the expected JSON string', function () {
			delete line_chart_data['default']
			let chart = new Chart(JSON.stringify(line_chart_data))
			chart.do('show grid x')
			chart.do('show grid Y')
			chart.do('hide grid x')

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': undefined,
					'width': undefined
				},
				'data': {
					'x': undefined,
					'xs': {},
					'columns': [['data1', ...line_chart_data.data1], ['data2', ...line_chart_data.data2]],
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
						'show': true,
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

	/**
	 * Test to check the do "Tooltip" function behaviour with valid data
	 * @test {Chart#do}
	 */
	describe('do', function () {
		it('should generate the expected JSON string', function () {
			delete line_chart_data['default']
			let chart = new Chart(JSON.stringify(line_chart_data))
			chart.do('show tooltip')
			chart.do('ungroup tooltip')

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': undefined,
					'width': undefined
				},
				'data': {
					'x': undefined,
					'xs': {},
					'columns': [['data1', ...line_chart_data.data1], ['data2', ...line_chart_data.data2]],
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
					'grouped': false
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

	/**
	 * Test to check the do "Chart size" function behaviour with valid data
	 * @test {Chart#do}
	 */
	describe('do', function () {
		it('should generate the expected JSON string', function () {
			delete line_chart_data['default']
			let chart = new Chart(JSON.stringify(line_chart_data))
			chart.do('set height as 500')
			chart.do('set width as 1000')

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': 500,
					'width': 1000
				},
				'data': {
					'x': undefined,
					'xs': {},
					'columns': [['data1', ...line_chart_data.data1], ['data2', ...line_chart_data.data2]],
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

	/**
	 * Test to check the do "Legend" function behaviour with valid data
	 * @test {Chart#do}
	 */
	describe('do', function () {
		it('should generate the expected JSON string', function () {
			delete line_chart_data['default']
			let chart = new Chart(JSON.stringify(line_chart_data))
			chart.do('hide legend')
			chart.do('move legend to right')

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': undefined,
					'width': undefined
				},
				'data': {
					'x': undefined,
					'xs': {},
					'columns': [['data1', ...line_chart_data.data1], ['data2', ...line_chart_data.data2]],
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
					'show': false,
					'position': 'right'
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

	/**
	 * Test to check the do "Interaction" function behaviour with valid data
	 * @test {Chart#do}
	 */
	describe('do', function () {
		it('should generate the expected JSON string', function () {
			delete line_chart_data['default']
			let chart = new Chart(JSON.stringify(line_chart_data))
			chart.do('show subchart')
			chart.do('enable zoom')

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': undefined,
					'width': undefined
				},
				'data': {
					'x': undefined,
					'xs': {},
					'columns': [['data1', ...line_chart_data.data1], ['data2', ...line_chart_data.data2]],
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
					'show': true
				},
				'zoom': {
					'enabled': true
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

	/**
	 * Test to check the do "Rotate axis" function behaviour with valid data
	 * @test {Chart#do}
	 */
	describe('do', function () {
		it('should generate the expected JSON string', function () {
			delete line_chart_data['default']
			let chart = new Chart(JSON.stringify(line_chart_data))
			chart.do('enable rotate')

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': undefined,
					'width': undefined
				},
				'data': {
					'x': undefined,
					'xs': {},
					'columns': [['data1', ...line_chart_data.data1], ['data2', ...line_chart_data.data2]],
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
					'rotated': true,
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

	/**
	 * Test to check the do "Axis labels" function behaviour with valid data
	 * @test {Chart#do}
	 */
	describe('do', function () {
		it('should generate the expected JSON string', function () {
			delete line_chart_data['default']
			let chart = new Chart(JSON.stringify(line_chart_data))
			chart.do('set x axis label as awesomeX')
			chart.do('set Y axis label as my-y')

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': undefined,
					'width': undefined
				},
				'data': {
					'x': undefined,
					'xs': {},
					'columns': [['data1', ...line_chart_data.data1], ['data2', ...line_chart_data.data2]],
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
						'label': 'awesomeX',
						'max': undefined,
						'min': undefined
					},
					'y': {
						'label': 'my-y',
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

	/**
	 * Test to check the do "Axis boundaries" function behaviour with valid data
	 * @test {Chart#do}
	 */
	describe('do', function () {
		it('should generate the expected JSON string', function () {
			delete line_chart_data['default']
			let chart = new Chart(JSON.stringify(line_chart_data))
			chart.do('set x axis min as -50')
			chart.do('set x axis max as 65')

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': undefined,
					'width': undefined
				},
				'data': {
					'x': undefined,
					'xs': {},
					'columns': [['data1', ...line_chart_data.data1], ['data2', ...line_chart_data.data2]],
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
						'max': 65,
						'min': -50
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

	/**
	 * Test to check the do "Data labels" function behaviour with valid data
	 * @test {Chart#do}
	 */
	describe('do', function () {
		it('should generate the expected JSON string', function () {
			delete line_chart_data['default']
			let chart = new Chart(JSON.stringify(line_chart_data))
			chart.do('set data1 data label as monkey')
			chart.do('set data2 data label as cat')

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': undefined,
					'width': undefined
				},
				'data': {
					'x': undefined,
					'xs': {},
					'columns': [['data1', ...line_chart_data.data1], ['data2', ...line_chart_data.data2]],
					'names': {
						'data1': 'monkey',
						'data2': 'cat'
					},
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

	/**
	 * Test to check the do "Line Chart hide points" function behaviour with valid data
	 * @test {Chart#do}
	 */
	describe('do', function () {
		it('should generate the expected JSON string', function () {
			delete line_chart_data['default']
			let chart = new Chart(JSON.stringify(line_chart_data))
			chart.do('hide points')

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': undefined,
					'width': undefined
				},
				'data': {
					'x': undefined,
					'xs': {},
					'columns': [['data1', ...line_chart_data.data1], ['data2', ...line_chart_data.data2]],
					'names': {},
					'types': {},
					'groups': [],
					'type': undefined,
					'labels': false
				},
				'point': {
					'show': false
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

	/**
	 * Test to check the do "Optional Grid Lines" function behaviour with valid data
	 * @test {Chart#do}
	 */
	describe('do', function () {
		it('should generate the expected JSON string', function () {
			delete line_chart_data['default']
			let chart = new Chart(JSON.stringify(line_chart_data))
			chart.do('set gridline y at 10 as custom-y')
			chart.do('set gridline x at 20 as another-x')

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': undefined,
					'width': undefined
				},
				'data': {
					'x': undefined,
					'xs': {},
					'columns': [['data1', ...line_chart_data.data1], ['data2', ...line_chart_data.data2]],
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
						'lines': [
							{
								'value': 20,
								'text': 'another-x'
							}
						]
					},
					'y': {
						'show': false,
						'lines': [
							{
								'value': 10,
								'text': 'custom-y'
							}
						]
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

	/**
	 * Test to check the generateJson function behaviour with valid data
	 * @test {Chart#generateJson}
	 */
	describe('generateJson', function () {
		it('should return default output json', function () {
			delete line_chart_data['default']
			let chart = new Chart(JSON.stringify(line_chart_data))

			assert.equal(JSON.stringify(chart.generateJson()), JSON.stringify({
				'size': {
					'height': undefined,
					'width': undefined
				},
				'data': {
					'x': undefined,
					'xs': {},
					'columns': [['data1', ...line_chart_data.data1], ['data2', ...line_chart_data.data2]],
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