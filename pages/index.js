import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
// import logo from '../../sfv4/public'
import { getStore, query } from '../libs/store'
import useSWR from 'swr'
import { useState } from 'react'

// const querySWR = `query ($subdomain: String!) {
//   categories(subdomain: $subdomain){
//     products{
//       descriptionEn
//       maxPrepTime
//       displayPrice
//       titleEn
//     }
//     photoUrl
//     restaurantId
//     titleEn
//     uuid
//   }
// }`




export default function Home({query}) {
  // const [searchQuery, setSearchQuery] = useState('')

  // gettingBooks= (event)=>{
  //   const search_query = event.target.value
  //   setSearchQuery(()=>({query}))

  //   if(search_query){
  //     BooksAPI.search(query.trim(), 20).then((res)=>{
  //       res.length > 0?setSearchQuery(()=>({newBooks: res})):
  //       this.setSearchQuery(()=>({newBooks:[]}))
  //     })
  //   }else{
  //     this.setSearchQuery(()=>({newBooks:[]}))
  //   }

  // }


  // const result = getStore()
  // console.log("store data: "+ JSON.stringify(getStore().store.id))


  const {data, error} = useSWR(query, getStore)
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
        <h1 style={{display: 'inline', textAlign: 'center'}}>{data.store.pageTitleEn}</h1>
      </Header>
      <div style={{marginLeft: '20px'}}>
        {data.categories.map((category)=>(
          <div>
            <h2>{category.titleEn}</h2>
            <p>{category.products.map((product)=>(
              <div>
                <p>{product.titleEn}</p>
                <p>{product.descriptionEn}</p>
              </div>
            ))}</p>
          </div>
          
        ))}
      </div>

      
      
    </Layout>
  )
}

// const searchFood(event){
//   const query = event.target.value;
//   if(query){

//   }
// }

export async function getStaticProps() {
  return {
    props: {
      query,
    }
  }
}
