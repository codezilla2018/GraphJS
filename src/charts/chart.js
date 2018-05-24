export default class Chart {

	/**
	 * Creates an instance of the Chart class
	 * @param {string} data - JSON string containing the data columns.
	 */
	constructor(data) {
		this._data = data

		// Define output JSON
		this._outputJson = {
			'size': {
				'height': undefined,
				'width': undefined
			},
			'data': {
				'x': undefined,
				'xs': {},
				'columns': [],
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
		}

		// Add _data
		let dataJson = JSON.parse(this._data)
		for (let i in dataJson) {
			this._outputJson.data.columns.push([i, ...dataJson[i]])
		}
	}

	/**
	 * Alter the parameters of the charts using the provided grammar.
	 * @param {string} grammar - Simple grammar string describing the charts.
	 * @returns {boolean} - Returns true if the grammar is parsed.
	 */
	do(grammar) {
		if (grammar.match(new RegExp('(show|hide) grid [xXyY]'))) {
			let option = grammar.match(new RegExp('(show|hide)'))[0]
			let axis = grammar.match(new RegExp('[xXyY]'))[0]
			if (axis.toLowerCase() === 'x') {
				this._outputJson.grid.x.show = (option === 'show')
			} else {
				this._outputJson.grid.y.show = (option === 'show')
			}
			return true
		} else if (grammar.match(new RegExp('set gridline [xXyY] at [\\d]+ as [0-9a-zA-Z\\-]+'))) {
			let axis = grammar.match(new RegExp('gridline [xXyY] at'))[0].split(' ')[1]
			let position = grammar.match(new RegExp('at [\\d]+ as'))[0].split(' ')[1]
			let label = grammar.match(new RegExp('as [0-9a-zA-Z\\-]+'))[0].split(' ')[1]
			if (axis.toLowerCase() === 'x') {
				this._outputJson.grid.x.lines.push({
					'value': Number(position),
					'text': label
				})
			} else {
				this._outputJson.grid.y.lines.push({
					'value': Number(position),
					'text': label
				})
			}
			return true
		} else if (grammar.match(new RegExp('set [0-9a-zA-Z\\-]+ data label as [0-9a-zA-Z\\-]+'))) {
			let dataColumn = grammar.match(new RegExp('set [0-9a-zA-Z\\-]+ data'))[0].split(' ')[1]
			let label = grammar.match(new RegExp('as [0-9a-zA-Z\\-]+'))[0].split(' ')[1]
			this._outputJson.data.names[dataColumn] = label
			return true
		} else if (grammar.match(new RegExp('set [xXyY] axis label as [0-9a-zA-Z\\-]+'))) {
			let axis = grammar.match(new RegExp('[xXyY]'))[0]
			let label = grammar.match(new RegExp('as [0-9a-zA-Z\\-]+'))[0].split(' ')[1]
			if (axis.toLowerCase() === 'x') {
				this._outputJson.axis.x.label = label
			} else {
				this._outputJson.axis.y.label = label
			}
			return true
		} else if (grammar.match(new RegExp('set [xXyY] axis (max|min) as [-]?[\\d]+'))) {
			let axis = grammar.match(new RegExp('[xXyY]'))[0]
			let margin = grammar.match(new RegExp('axis (max|min) as'))[0].split(' ')[1]
			let value = grammar.match(new RegExp('as [-]?[\\d]+'))[0].split(' ')[1]
			if (axis.toLowerCase() === 'x') {
				if (margin.toLowerCase() === 'max') {
					this._outputJson.axis.x.max = Number(value)
				} else {
					this._outputJson.axis.x.min = Number(value)
				}
			} else {
				if (margin.toLowerCase() === 'max') {
					this._outputJson.axis.y.max = Number(value)
				} else {
					this._outputJson.axis.y.min = Number(value)
				}
			}
			return true
		} else if (grammar.match(new RegExp('(show|hide) tooltip'))) {
			let option = grammar.match(new RegExp('(show|hide)'))[0]
			this._outputJson.tooltip.show = (option === 'show')
			return true
		} else if (grammar.match(new RegExp('(group|ungroup) tooltip'))) {
			let option = grammar.match(new RegExp('(group|ungroup)'))[0]
			this._outputJson.tooltip.grouped = (option === 'group')
			return true
		} else if (grammar.match(new RegExp('(show|hide) points'))) {
			let option = grammar.match(new RegExp('(show|hide)'))[0]
			this._outputJson.point.show = (option === 'show')
			return true
		} else if (grammar.match(new RegExp('(show|hide) data labels'))) {
			let option = grammar.match(new RegExp('(show|hide)'))[0]
			this._outputJson.data.labels = (option === 'show')
			return true
		} else if (grammar.match(new RegExp('(show|hide) legend'))) {
			let option = grammar.match(new RegExp('(show|hide)'))[0]
			this._outputJson.legend.show = (option === 'show')
			return true
		} else if (grammar.match(new RegExp('(show|hide) subchart'))) {
			let option = grammar.match(new RegExp('(show|hide)'))[0]
			this._outputJson.subchart.show = (option === 'show')
			return true
		} else if (grammar.match(new RegExp('(enable|disable) zoom'))) {
			let option = grammar.match(new RegExp('(enable|disable)'))[0]
			this._outputJson.zoom.enabled = (option === 'enable')
			return true
		} else if (grammar.match(new RegExp('(enable|disable) rotate'))) {
			let option = grammar.match(new RegExp('(enable|disable)'))[0]
			this._outputJson.axis.rotated = (option === 'enable')
			return true
		} else if (grammar.match(new RegExp('move legend to (right|bottom)'))) {
			let option = grammar.match(new RegExp('(left|right|top|bottom)'))[0]
			this._outputJson.legend.position = option
			return true
		} else if (grammar.match(new RegExp('set (height|width) as [\\d]+'))) {
			let option = grammar.match(new RegExp('(height|width)'))[0]
			let value = grammar.match(new RegExp('as [\\d]+'))[0].split(' ')[1]
			if (option.toLowerCase() === 'height') {
				this._outputJson.size.height = Number(value)
			} else {
				this._outputJson.size.width = Number(value)
			}
			return true
		}
		else {
			return false
		}
	}

	/**
	 * Return the JSON output string of the constructed charts.
	 * @returns {string}
	 */
	generateJson() {
		return this._outputJson
	}
}