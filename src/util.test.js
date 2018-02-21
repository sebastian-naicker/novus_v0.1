import { printHello } from './util';

describe('A test', () => {
	test('should pass', () => {
		const name = 'John';
		const expectedResult = 'hello John';

		const actualResult = printHello(name);

		expect(actualResult).toBe(expectedResult);
	});
});
