module.exports = {
  // Other Jest configurations...
  testResultsProcessor: 'jest-junit', // Specify the processor
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'test-results', outputName: 'results.xml' }]
  ],
};
