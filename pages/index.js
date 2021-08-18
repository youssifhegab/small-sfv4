import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
// import logo from '../../sfv4/public'
import { getStore, query } from '../libs/store'
import useSWR from 'swr'


export default function Home({query}) {
  const {data, error} = useSWR(query, getStore)
  if (error) return <h1>Something went wrong!</h1>
  if (!data) return <h1>Loading...</h1>
  console.log("all the data: "+ data)
  return (
    <Layout className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <h1>in index.js</h1>
      <h1>{data.categories[0].products[0].descriptionEn}</h1>
      
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      query,
    }
  }
}
