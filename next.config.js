/** @type {import('next').NextConfig} */

const nextConfig = {
    optimizeFonts: false,
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
        ],
        unoptimized: true,
        domains: ['res.cloudinary.com'],
    },
    output: 'export', // Utilizado en Next.js 13 y posteriores para exportar un sitio estático
    trailingSlash: true,
    api: {
        bodyParser: {
            sizeLimit: '1mb', // Ajusta el tamaño máximo permitido para el cuerpo
        },
    },
    //useFileSystemPublicRoutes: false,
}

module.exports = nextConfig

const config = {
    // Other config
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.optimization.innerGraph = false;
        }

        config.module.rules.push({
            test: /\.(mp4|webm|ogg|swf|avi|mov|wmv|flv|m4v)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'static/media/', // Customize the output path
                        publicPath: '/_next/static/media/', // Customize the public path
                        name: '[name].[hash].[ext]',
                    },
                },
            ],
        });

        return config;
    },
}

module.exports = config;
