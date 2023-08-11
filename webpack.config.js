const Dotenv = require('dotenv-webpack');

module.exports={
    plugins: [ new Dotenv() ],
    resolve: {
       extensions:['.js','.jsx']
    }
 }