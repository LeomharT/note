const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        //添加全局sass变量,也可以是文件路径
        additionalData: `$env:${process.env.NODE_ENV === 'production' ? "'/drone/'" : "'/'"};`
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    experimental: {
        esmExternals: true
    },
    //资源文件前缀,静态资源保存在public文件夹下->next.js静态资源统一存在public文件夹下并用/根路径访问
    assetPrefix: process.env.NODE_ENV === 'production' ? '/drone' : undefined,
    //getConfig()可以获得的全局变量
    publicRuntimeConfig: {
        basePath: process.env.NODE_ENV === 'production' ? '/drone' : '',
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.worker\.js$/,
            loader: 'worker-loader',
            // options: { inline: true }, // also works
            options: {
                name: 'static/[hash].worker.js',
                publicPath: '/_next/',
            },
        });
        return config;
    }
};

module.exports = nextConfig;
