import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { SWRConfig } from 'swr'
import useSWR from 'swr'
import { request } from 'graphql-request'
import { useStore } from '../libs/store'






export default function Layout({ children, data }) {

    // if (error) return <h1>Something went wrong!</h1>
    // if (!data) return <h1>Loading</h1>
    console.log("data: "+ data)
    console.log(JSON.stringify(data, undefined, 2))
    return (
        <>  
            {/* <h1>{data.store.id}</h1> */}
            <main>
                    {children}
            </main>
        </>
    );
}

export async function getServerSideProps() {
    const subdomain = "demo-sfv4"
    const variables = {subdomain}
    const query = `query ($subdomain: String!) {
        store (subdomain: $subdomain) {
          id
          branchesCount
          logoUrl
          descriptionEn
          faviconUrl
          pageTitleEn
          photoUrl
        }
      }`
      
    const data = fetch('"https://graphql-sfv4.zyda.com/graphql"', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables,
        })
      })
        .then(r => r.json())
        // .then(data => console.log('data returned:', data));
    return {
      props: {
          data,
      }, // will be passed to the page component as props
    }
  }
  