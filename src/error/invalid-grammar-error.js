import ExtendableError from 'es6-error'

export default class InvalidGrammarError extends ExtendableError {

	constructor(message = 'Invalid grammar') {
		super(message)
	}
}