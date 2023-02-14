const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        additionalData: `$env:${process.env.NODE_ENV === 'production' ? "'/drone/'" : "'/'"};`
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    experimental: {
        esmExternals: true
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/drone' : undefined,
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
