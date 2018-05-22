import InvalidOperationError from '../error/invalid-operation-error'

export default class Chart {

	constructor() {
	}

	// eslint-disable-next-line no-unused-vars
	do(grammar) {
		throw new InvalidOperationError()
	}

	generateJson() {
		throw new InvalidOperationError()
	}
}