import path from 'path';

const mode = process.env.MODE || 'dev';
if (!['dev', 'prod'].includes(mode)) {
  throw new Error(`MODE must be "dev" or "prod", was "${mode}"`);
}

export default {
  nodeResolve: { exportConditions: mode === 'dev' ? ['development'] : [] },
  preserveSymlinks: true,
  resolve: {
    alias: {
      '@features': 'src/features',
      '@models': 'src/models',
      // '@features': path.resolve(__dirname, 'src/features'),
      // '@models': path.resolve(__dirname, 'src/models'),
    },
  },
};
