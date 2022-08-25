import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalLayout } from '../layouts/GlobalLayout'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </RecoilRoot>
  )
}

export default MyApp
