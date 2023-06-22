module.exports = function (api) {

    const presets = [
        '@babel/preset-env',
        '@babel/preset-typescript',
        '@babel/preset-react', // Transpile React components to JavaScript
    ];

    const plugins = [

        ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
        ['module-resolver', {
            'root': ['./src'],
        }],
    ];

    const ignore = [];

    if (api.env('development')) {

        plugins.push('react-hot-loader/babel'); // Enables React code to work with HMR.
        api.cache(true);

    } else if (api.env('production')) {

        ignore.push(
            '**/__tests__', // ignore the whole test directory
            '**/*.test.js', // ignore test files only
            '**/__mocks__',
        );
        api.cache(false);

    } else {
        api.cache(true);
    }

    return {
        presets,
        plugins,
        ignore,
    };
};