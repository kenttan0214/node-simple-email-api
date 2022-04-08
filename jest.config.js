module.exports = {
  testTimeout: 20000, // https://github.com/facebook/jest/issues/11607#issuecomment-899955497
  verbose: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  preset: 'ts-jest',
  testRegex: 'test\\.ts$',
  // setupFiles: ['./setupJest.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/model/**/*',
    '**/src/handler/**/*',
    '**/src/helper/**/*',
    // exclude snapshots
    '!**/*.snap',
    // exclude .webpack folder
    '!**.webpack/**/*',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
