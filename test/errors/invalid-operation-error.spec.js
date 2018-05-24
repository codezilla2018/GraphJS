import InvalidOperationError from '../../src/errors/invalid-operation-error'

/**
 * Tests for InvalidOperationError class
 * @test {InvalidOperationError}
 */
describe('InvalidOperationError', function () {

	/**
	 * Test to check the constructor behaviour with valid data
	 * @test {InvalidOperationError#constructor}
	 */
	describe('constructor', function () {
		it('should do nothing', function () {
			new InvalidOperationError('')
		})
	})

})