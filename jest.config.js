module.exports = {
  // verbose: true,
  setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
  // moduleFileExtensions: ["js", "jsx"],
  // moduleDirectories: ["node_modules", "client/dist/src"],
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/client/src/spec/styleMock.js',
  },
  // transform: {
  //   "^.+\\.(js|jsx)$": "babel-jest",
  // },
  testEnvironment: 'jsdom'
};