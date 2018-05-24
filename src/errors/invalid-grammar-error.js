import ExtendableError from 'es6-error'

/**
 * Thrown when the grammar is invalid.
 */
export default class InvalidGrammarError extends ExtendableError {

	/**
	 * Creates an instance of InvalidGrammarError.
	 * @param {string} message - Error message.
	 */
	constructor(message = 'Invalid grammar') {
		super(message)
	}
}