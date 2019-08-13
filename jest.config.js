module.exports = {
	transform: {
		'^.+\\.(j|t)sx?$': 'ts-jest',
	},
	testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(j|t)sx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
