import React from 'react'
import Products from '@/containers/products'

const ProductsPage = () => {
    return <Products />
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
    const {
        serverSideTranslations,
    } = require('next-i18next/serverSideTranslations')

    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    }
}

export default ProductsPage
