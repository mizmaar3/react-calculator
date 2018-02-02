import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';

let isProd = function() {
  return process.env.NODE_ENV === 'production'
};
console.log('rollup...');
export default {
   entry: 'src/main.js',
   dest:  'dist/bundle.js',
   format:  'iife',
   plugins:
   [
     babel({
       exclude: 'node_modules/**',
       presets: [ "es2015-rollup", "react" ],
       plugins: [ "external-helpers", "transform-decorators-legacy" ]
     }),
     nodeResolve({
       jsnext: true,
       module: true,
       jsnext: true,
       main: true,
       extensions: ['.js', '.jsx', '.json'],
       preferBuiltins: false
     }),
     commonjs({
       include: 'node_modules/**',
       namedExports:
       { './node_modules/react/react.js':
        [
         'cloneElement',
         'createElement',
         'PropTypes',
         'Children',
         'Component'
        ],
      }
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
    isProd() ? uglify({sourceMap: false}) : {}
  ]
}
