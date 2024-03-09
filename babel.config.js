module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@defaultTypes": "./src/types/defaultTypes",
          "@constants": "./src/common/constants",
          "@commonStyles": "./src/common/styles",
          "@commonComponents": "./src/common/components",
          "@mainTheme": "./src/common/theme",
          "@utils": "./src/common/utils",
          "@main-icons": "./src/common/icons",
          "@main-images": "./src/common/images",
          "^@store/(.+)": "./src/store/\\1",
          "^@screens/(.+)": "./src/screens/\\1",
        },
      },
    ],
  ],
};
