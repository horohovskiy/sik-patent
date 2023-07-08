import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.scss'
import '../styles/home.scss'
import '../styles/crafters.scss'
import '../styles/crafts.scss'
import '../styles/contact.scss'
import '../styles/stories.scss'

//fetching data from api
import {useEffect} from "react";
import {useRouter} from "next/router";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div>
          <Head>
              <link rel="icon" type="image/x-icon" href="/images/favicon-icon.svg"/>

          </Head>
          <NextNProgress height={3} color="rgba(217, 83, 32, 0.8)" options={{ showSpinner: false }}/>
          <Component {...pageProps} />
      </div>
  )
}
