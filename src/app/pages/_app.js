import Head from 'next/head'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }) {
  return (
    <><Head>

      {/* <Script src="/js/jquery.js" />
      <Script src="/js/vendors.min.js" />
      <Script src="/js/main.js" /> */}

    </Head><Component {...pageProps} /></>
  )
}