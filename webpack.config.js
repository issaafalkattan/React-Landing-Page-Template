import path from 'path';
import { fileURLToPath } from 'url';
import Dotenv from 'dotenv-webpack';
import Env from 'dotenv';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

Env.config({ path: '.env.local', override: true });

export default (env) => {

    return {
        mode: (env.production) ? 'production' : 'development',
        devtool: (env.production) ? false : 'inline-source-map',
        stats: 'normal',
        devServer: {
            compress: true,
            port: 9000,
            hot: true,
            client: {
                logging: 'error',
                overlay: {
                    errors: true,
                    warnings: false,
                },
            },
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                react: path.resolve('node_modules', 'react'),
                '@': path.resolve(__dirname, './src'),
            }
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: 'ts-loader',
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    exclude: /node_modules/,
                    use: [
                        env.production ? MiniCssExtractPlugin.loader : 'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    mode: 'local',
                                    localIdentName: '[local]',
                                    namedExport: true,
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    exclude: /node_modules/,
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.(png|jpe?g|gif|jp2|webp)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/img/[name][ext]'
                    }
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf)(\?v=\d+\.\d+\.\d+)?$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/fonts/[name][ext]'
                    }
                }
            ],
        },
        plugins: [
            new Dotenv({
                path: `./.env.${process.env.NODE_ENV}`,
                safe: true,
                systemvars: true,
                silent: true,
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[chunkhash].css',
            }),
            new HtmlWebpackPlugin({
                template: 'public/index.html',
                filename: 'index.html',
                minify: {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                },
                scriptLoading: 'module'
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, './public'),
                        to: path.resolve(__dirname, './build'),
                        globOptions: {
                            ignore: ['**/index.html']
                        }
                    }
                ]
            }),
        ],
        optimization: {
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                    terserOptions: {
                        compress: {
                            drop_console: env.production,
                        },
                    },
                }),
                new CssMinimizerPlugin(),
            ],
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/](?=.*\.js$)/,
                        name: 'vendor',
                        chunks: 'all',
                        enforce: true,
                    },
                },
            },
        },
        output: {
            path: path.resolve(__dirname, './build'),
            filename: '[name].[chunkhash].js',
            publicPath: '',
        },
    };
};