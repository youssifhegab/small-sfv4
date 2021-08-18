import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'Youssif Hegab'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
    return (
        <>
            <div className='hero-image'>
                <h1>in layout</h1>
            </div>
            
            <main>{children}</main>
        </>
    );
}