import { Html, Head, Main, NextScript } from 'next/document'
import localFont from 'next/font/local'

const France = localFont({
    src: '../../src/fonts/France/France.ttf',
    display: 'swap',
})

export default function Document() {

    return (
        <Html lang="en" className={France.className}>
            <Head>
                <title>Oscar Rojas | Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}