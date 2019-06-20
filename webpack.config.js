
const url = `${__dirname}/build/public/`;


module.exports = (env = {}) => {
    return {
        entry: ['./src/js/app.js', './src/scss/app.scss'],
        output: {
            path: `${__dirname}/build/public/js`,
            filename: 'mainscript.js',
            publicPath: 'public/'
        },
        plugins: [],
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'file-loader', // creates style nodes from JS string
                            options: {
                                name: '[name].css',
                                outputPath: '../css/'
                            }
                        },{
                            loader: 'extract-loader'
                        },{
                            loader: 'css-loader' // translates CSS into CommonJS
                        },{
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader' // compile Sass to CSS
                        }
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                          }
                    }
                }
            ]
        } // module
    }// return    
};

