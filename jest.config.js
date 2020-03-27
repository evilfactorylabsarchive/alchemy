module.exports = {
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
}
