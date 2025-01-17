import { Html, Head, Main, NextScript } from 'next/document'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Document() {

    return (
        <Html>
            <Head>
                <title>Oscar Rojas | Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
                {/* Open Graph Meta Tags */}

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Oscar Rojas | Portfolio" />
                <meta property="og:description" content="Web developer focused on high-level and interactive frontend development." />
                <meta property="og:image" content="https://res.cloudinary.com/de9uql5fm/image/upload/v1737132934/og_meta_img_wsakyv.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://www.eldesenauta.com" />
                <meta property="og:site_name" content="eldesernauta" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Oscar Rojas | Portfolio" />
                <meta name="twitter:description" content="Web developer focused on high-level and interactive frontend development." />
                <meta name="twitter:image" content="https://res.cloudinary.com/de9uql5fm/image/upload/v1737132934/og_meta_img_wsakyv.png" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            <GoogleAnalytics gaId="G-Z9404XF3PJ" />
        </Html>
    )
}