import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalLayout } from '../layouts/GlobalLayout'
import { RecoilRoot } from 'recoil'
import { useEffect, useState } from 'react'
import { LoadingScreen } from '../components/LoadingScreen'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])
  return (
    <RecoilRoot>
      {loading ? (
        <LoadingScreen />
      ) : (
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      )}
    </RecoilRoot>
  )
}

export default MyApp
