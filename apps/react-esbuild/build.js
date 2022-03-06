const { build } = require('esbuild');

const isDev = process.env.NODE_ENV === 'development';

build({
  define: { 'process.env.NODE_ENV': process.env.NODE_ENV },
  target: 'es2015',
  platform: 'browser',
  entryPoints: ['src/pages/indext.tsx'],
  outdir: 'dist',
  bundle: true,
  minify: !isDev,
  sourcemap: true,
}).catch((err) => console.log(`Error: ${JSON.stringify(err)}`));
