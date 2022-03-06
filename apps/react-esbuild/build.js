const { build } = require('esbuild');

const jsxPluginReact17 = {
  name: 'jsx-react-17',
  setup(build) {
    const fs = require('fs');
    const babel = require('@babel/core');
    const plugin = require('@babel/plugin-transform-react-jsx').default(
      {},
      { runtime: 'automatic' },
    );

    build.onLoad({ filter: /\.[jt]sx$/ }, async (args) => {
      const jsx = await fs.promises.readFile(args.path, 'utf8');
      const result = babel.transformSync(jsx, { plugins: [plugin] });
      return { contents: result.code };
    });
  },
};

build({
  target: 'es2019',
  platform: 'browser',
  entryPoints: ['src/pages/indext.tsx'],
  outfile: 'dist/react-esbuild.bundle.js',
  bundle: true,
  minify: true,
  sourcemap: true,
  plugins: [jsxPluginReact17],
}).catch((err) => console.log(`Error: ${JSON.stringify(err)}`));
