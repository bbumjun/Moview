const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const port = 3000

module.exports = {
    mode : "development",
    entry : './src/index.tsx',
    output: {
        filename: 'bundle.[hash].js',
    },
    // Webpack의 출력물에서 디버깅을 하기위해 소스 맵을 허용합니다.
    devtool: "source-map",
    resolve: {
        alias: {
          components: path.resolve(__dirname, 'src/components'),
        },
        modules: ['node_modules'],
        extensions: ['.tsx', '.ts','.js'],
      },
    module : {
        rules : [
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                use : [
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader : 'css-loader'
                    }
                ]
            },
            // 모든 '.js' 출력 파일은 'source-map-loader'에서 다시 처리한 소스 맵이 있습니다.
            {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ],
    devServer: {
        port:port,
        open:true,
    }
}