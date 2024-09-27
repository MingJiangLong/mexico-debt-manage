module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '*': ['./src'],
          '@components': ['./src/components'],
          '@store': ['./src/store'],
          '@xunmo-components': ['./src/xunmo-rn-helper/components'],
          '@xunmo-hooks': ['./src/xunmo-rn-helper/hooks'],
        },
      },
    ],
  ],
};
