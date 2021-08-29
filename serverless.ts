import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'github-actions-demo',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  functions: {
    hello: {
      handler: 'src/handler.helloHandler'
    }
  },
};

module.exports = serverlessConfiguration;
