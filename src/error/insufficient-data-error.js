import ExtendableError from 'es6-error'

/**
 * Thrown when the data contained in the grammar is not sufficient for a operation
 */
export default class InsufficientDataError extends ExtendableError {

	/**
	 * Creates an instance of InsufficientDataError.
	 * @param {string} message - Error message.
	 */
	constructor(message = 'Provided _data is insufficient') {
		super(message)
	}
}