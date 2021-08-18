import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'Youssif Hegab'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }) {
    return (
        <>  
            <main>{children}</main>
        </>
    );
}