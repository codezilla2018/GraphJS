import InvalidOperationError from '../error/invalid-operation-error'

export default class Chart {

	constructor(data) {
		this._data = data

		// Define output JSON
		this._outputJson = {
			'data': {
				'x': undefined,
				'xs': {},
				'columns': [],
				'types': {},
				'groups': [],
				'type': undefined
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

	// eslint-disable-next-line no-unused-vars
	do(grammar) {
		throw new InvalidOperationError()
	}

	generateJson() {
		return this._outputJson
	}
}