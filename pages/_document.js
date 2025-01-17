import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

    return (
        <Html>
            <Head>
                <title>Oscar Rojas | Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
                {/* Open Graph Meta Tags */}

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Oscar Rojas | Portfolio" />
                <meta property="og:description" content="Desarrollador web con énfasis en desarrollo frontend de alto nivel e interactividad." />
                <meta property="og:image" content="https://res.cloudinary.com/de9uql5fm/image/upload/v1737130671/og_meta_pehipk.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://www.eldesenauta.com" />
                <meta property="og:site_name" content="eldesernauta" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Oscar Rojas | Portfolio" />
                <meta name="twitter:description" content="Desarrollador web con énfasis en desarrollo frontend de alto nivel e interactividad." />
                <meta name="twitter:image" content="https://res.cloudinary.com/de9uql5fm/image/upload/v1737130671/og_meta_pehipk.png" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}