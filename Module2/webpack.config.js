const webpack = require("webpack");
module.exports = {
    "devServer": {
        "port": 5001,
        "contentBase": "./dist",
        "hot": true
    },
    "entry": "./src/index.jsx",
    "module": {
        "rules": [
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": ["babel-loader"]
            },
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": ["eslint-loader"]
            },
            {
                "test": /\.scss$/,
                "loader": 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    "resolve": {
        "extensions": [
            "*",
            ".js",
            ".jsx"
        ]
    },
    "output": {
        "path": `${__dirname}/dist`,
        "publicPath": "/",
        "filename": "bundle.js"
    },
    "plugins": [
        new webpack.HotModuleReplacementPlugin()
    ]
};
