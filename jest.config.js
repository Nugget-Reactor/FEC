module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/client/src/spec/styleMock.js',
  },
  testEnvironment: 'jsdom',
  verbose: true,
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["node_modules", "client/dist/src"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  }
};