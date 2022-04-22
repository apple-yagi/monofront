import nodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill';
import nodeModulesPolyfills from '@esbuild-plugins/node-modules-polyfill';
import { build, BuildFailure } from 'esbuild';
import path from 'path';
import dotenv from 'dotenv';

const isWatch = process.argv[2] === '--watch';

const nodeEnv = process.env.NODE_ENV ?? 'development';
const result = dotenv.config({
  path: path.join(__dirname, `config/env/.env.${nodeEnv}`),
});

const define: any = {};
// eslint-disable-next-line guard-for-in
for (const k in result.parsed) {
  define[`process.env.${k}`] = JSON.stringify(result.parsed[k]);
}

build({
  target: 'es2019',
  platform: 'browser',
  entryPoints: {
    app: path.join(__dirname, 'src/App.tsx'),
  },
  outdir: 'dist',
  outExtension: { '.js': '.bundle.js', '.css': '.bundle.css' },
  bundle: true,
  minify: true,
  sourcemap: true,
  tsconfig: path.resolve(__dirname, 'tsconfig.json'),
  // React17, Emotion
  jsxFactory: 'jsx',
  inject: ['./react-shim.ts'],
  // Enviroment variables
  define,
  plugins: [
    nodeModulesPolyfills(),
    nodeGlobalsPolyfillPlugin({
      process: true,
      buffer: true,
      define,
    }),
  ],
  watch: isWatch
    ? {
        onRebuild(error, result) {
          console.log('----------------------------');
          if (error) {
            console.error(new Date().toLocaleString(), ' watch build failed ');
            if (error.warnings) warningLog(error.warnings);
            if (error.errors) errorLog(error.errors);
          } else if (result) {
            console.log(new Date().toLocaleString(), ' watch build succeeded ');
            if (result.warnings) warningLog(result.warnings);
          }
        },
      }
    : false,
}).catch((err) => console.log(`Error: ${JSON.stringify(err)}`));

const warningLog = (warning: BuildFailure['warnings']) => {
  warning.forEach((warn) => {
    if (warn === null || warn.location === null) return;

    console.error('warning: ', warn.text);
    console.error('detail: ', warn.detail);
    console.error(
      'path: ',
      `${warn.location.file}:${warn.location.line}:${warn.location.column}`,
    );
    console.error(' -> ', warn.location.lineText);
  });
};

const errorLog = (errors: BuildFailure['errors']) => {
  errors.forEach((err) => {
    if (err === null || err.location === null) return;

    console.error('error: ', err.text);
    console.error(
      'path: ',
      `${err.location.file}:${err.location.line}:${err.location.column}`,
    );
    console.error(' -> ', err.location.lineText);
  });
};
