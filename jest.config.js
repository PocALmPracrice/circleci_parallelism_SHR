module.exports = {
  // Other configurations...
  testResultsProcessor: 'jest-junit', // if you are using jest-junit for JUnit reports
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'test-results', outputName: 'results.xml' }]
  ],
};
