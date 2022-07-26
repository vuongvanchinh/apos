import React, { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { appWithTranslation } from 'next-i18next'
import '@/styles/global-style.css'
import '@/styles/base.scss'
import '@/styles/utils.scss'
import '@/styles/typography.scss'
import { Provider } from 'react-redux'
import { store } from '@/state'
import { AppProps } from 'next/app'
import Layout from '@/layout'
type NextPageWithLayout = NextPage & {
    // eslint-disable-next-line no-unused-vars
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)
    return (
        <Provider store={store}>
            {getLayout(<Component {...pageProps} />)}
        </Provider>
    )
}

export default appWithTranslation(App)
