import type { AppProps } from 'next/app'

import '../styles/globals.scss'
import '../styles/home.scss'

//fetching data from api
import {useEffect} from "react";
import {useRouter} from "next/router";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div>
          <NextNProgress height={3} color="rgba(217, 83, 32, 0.8)" options={{ showSpinner: false }}/>
          <Component {...pageProps} />
      </div>
  )
}
