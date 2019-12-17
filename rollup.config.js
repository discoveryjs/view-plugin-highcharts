const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const { terser } = require('rollup-plugin-terser');

module.exports = {
    input: 'src/index.js',
    output: {
        file: 'index.js',
        format: 'cjs'
    },
    plugins: [
        resolve({ browser: true }),
        commonjs(),
        terser()
    ]
};
