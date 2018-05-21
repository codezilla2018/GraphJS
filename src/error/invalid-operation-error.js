import ExtendableError from 'es6-error'

export default class InvalidOperationError extends ExtendableError {

	constructor(message = 'Invalid operation') {
		super(message)
	}
}