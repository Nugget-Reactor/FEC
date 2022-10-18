module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  // transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
}