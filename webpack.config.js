/**
 * Created by luyuann on 9/26/2016.
 */
module.exports = {
    entry:['./src/App.js'],
    output:{
        path:'./',
        filename:'bundle.js'
    },
    module:{
        loaders:[{
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel',
            query: {
                presets: ['es2015','react']
            }
        }]
    },
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true
    }
}