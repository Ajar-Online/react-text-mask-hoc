const env = process.env.NODE_ENV;

const presets = ['@babel/react', '@babel/env'];
const plugins = ["@babel/plugin-proposal-class-properties"];

if (env === 'test') {
    presets.unshift([
        {
            targets: {node: 'current'},
        }
    ]);
}

if (env === 'production') {
    presets.unshift([
        {
            targets: {node: 6, browsers: ['> 1%']},
            modules: false
        }
    ]);
}

module.exports = {presets, plugins};
