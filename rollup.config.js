import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-ts';
import pkg from './package.json';
import sourceMaps from 'rollup-plugin-sourcemaps'

export default [
	// browser-friendly UMD build
	{
		input: 'src/parser.ts',
		output: {
			name: 'overlySimpleXmlParser',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			commonjs({
				sourceMap: true
			}),
			typescript({})
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify 
	// `file` and `format` for each target)
	{
		input: 'src/parser.ts',
		plugins: [
			typescript({}),
			sourceMaps()
		],
		output: [
			{ 
				file: pkg.main, 
				format: 'cjs', 
				sourcemap: true
			},
			{ 
				file: pkg.module, 
				format: 'es', 
				sourcemap: true 
			}
		]
	}
];