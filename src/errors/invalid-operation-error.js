import ExtendableError from 'es6-error'

/**
 * Thrown when the operation called for was not implemented / relevant for the context.
 */
export default class InvalidOperationError extends ExtendableError {

	/**
	 * Creates an instance of InvalidOperationError.
	 * @param {string} message - Error message.
	 */
	constructor(message = 'Invalid operation') {
		super(message)
	}
}