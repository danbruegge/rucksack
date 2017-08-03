import path from 'path';
import webpack from 'webpack';

export default (env) => {
    const publicPath = resolvePath('extension/');
    const exclude = /(node_modules|extension|__tests__)/;

    return {
        resolve: { extensions: ['.js', '.jsx'] },
        context: resolvePath('src'),
        entry: {
            background: './background.js',
            dashboard: './dashboard.js',
        },
        output: {
            filename: './dist/[name].js',
            path: publicPath,
            publicPath: '/',
        },
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.(js|jsx)$/,
                    exclude,
                    loader: 'eslint-loader',
                    options: {
                        fix: true,
                    },
                },
                {
                    exclude,
                    test: /\.(js|jsx)$/,
                    use: 'babel-loader',
                },
            ],
        },
        plugins: [
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(
                        env.development ? 'development' : 'production',
                    ),
                },
            }),
        ],
        devtool: 'sourcemap',
    };

    function resolvePath(toResolve) {
        return path.resolve(__dirname, toResolve);
    }
};
