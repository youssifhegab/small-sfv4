import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import { useStore } from '../libs/store'
import { gql, request } from 'graphql-request'

const subdomain = "demo-sfv4"
const variables = {subdomain}
const query = gql`query ($subdomain: String!) {
    store (subdomain: $subdomain) {
      id
      branchesCount
      logoUrl
      descriptionEn
      faviconUrl
      pageTitleEn
      photoUrl
    }
    categories(subdomain: $subdomain){
        products{
          descriptionEn
          maxPrepTime
          displayPrice
          titleEn
        }
        photoUrl
        restaurantId
        titleEn
        uuid
      }
  }`




export default function Home() {

  const {data, error} = useStore(query, variables)
  if (error) return <h1>Something went wrong!</h1>
  if (!data) return <h1>Loading...</h1>
  return (
    <Layout className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Header> 
        <Image 
          src='/images/logo.png' 
          alt={data.store.pageTitleEn} 
          height={100}
          width={100}/>
        <h1>{data.store.pageTitleEn}</h1>
      </Header>
      <div style={{marginLeft: '20px'}}>
        <ol>
          {data.categories.map(category => (
            <li key={category.uuid}>
              {category.titleEn}
              <ul>
                {category.products.map(product => (
                  <li key={product.uuid}>
                    {product.titleEn}
                    <p>{product.descriptionEn}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  )
}

