import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../lib/ga'

import '../styles/global.css'

export default function App({ Component, pageProps}) {
    
    const router = useRouter()

    useEffect(() => {
        const handleRouterChange = (url) => {
            ga.pageview(url)
        }

        router.events.on('routeChangeComplete', handleRouterChange)

        return () => {
            router.events.off('routeChangeComplete', handleRouterChange)
        }

    }, [router.events])

    
    return <Component {...pageProps} />
}