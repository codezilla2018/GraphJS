import ExtendableError from 'es6-error'

export default class InsufficientDataError extends ExtendableError {

	constructor(message = 'Provided _data is insufficient') {
		super(message)
	}
}