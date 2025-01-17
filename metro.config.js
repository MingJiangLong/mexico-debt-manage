const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const obfuscate = require("obfuscator-io-metro-plugin");

const jsoMetroPlugin = obfuscate(
    {
        // for these option look javascript-obfuscator library options from  above url
        compact: false,
        sourceMap: false, // source Map generated after obfuscation is not useful right now so use default value i.e. false
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 1,
    },
    {
        runInDev: false /* optional */,
        logObfuscatedFiles: true /* optional generated files will be located at ./.jso */,
    }
)

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
    ...jsoMetroPlugin
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
// module.exports = {
//     transformer: {
//       getTransformOptions: async () => ({
//         transform: {
//           experimentalImportSupport: false,
//           inlineRequires: false,
//         },
//       }),
//     },
//     ...jsoMetroPlugin,
//   };
