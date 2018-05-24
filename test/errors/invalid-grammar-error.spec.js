import InvalidGrammarError from '../../src/errors/invalid-grammar-error'

/**
 * Tests for InvalidGrammarError class
 * @test {InvalidGrammarError}
 */
describe('InvalidGrammarError', function () {

	/**
	 * Test to check the constructor behaviour with valid data
	 * @test {InvalidGrammarError#constructor}
	 */
	describe('constructor', function () {
		it('should do nothing', function () {
			new InvalidGrammarError('')
		})
	})

})