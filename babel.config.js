// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
// };

// module.exports = (api) => {
//   api.cache(true);

//   return {
//     presets: ['module:metro-react-native-babel-preset'],
//     plugins: ['babel-plugin-root-import'],
//   };
// };

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
  ],
};
