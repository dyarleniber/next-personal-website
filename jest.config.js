module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setupTests.js"],
  testMatch: ["**/__tests__/**/*.test.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    "\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
};
