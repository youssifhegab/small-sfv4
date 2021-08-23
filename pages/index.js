import Head from 'next/head'
import { Header } from '../components/Header'
import Layout from '../components/layout'
import { Ring } from 'react-awesome-spinners'
import { getStoreDetails } from '../libs/store'
import useCategories from '../libs/hooks/useCategories'
import useStore from '../libs/hooks/useStore'


const Home = ({serverData}) => {
  const {data: cachedData, isLoading: isLoadingCache} = useStore({initialData: serverData})
  console.log(cachedData, isLoadingCache)

  const {data, error, isLoading} = useCategories()
  console.log(data, isLoading)

  
  if (error) return <h1>Something went wrong!</h1>
  if (!data) return <Ring />

  return (
    <Layout>
      <Head>
        <title>store front</title>
      </Head>
      <Header> 
        <img 
          src={cachedData.store.faviconUrl} 
          alt={cachedData.store.descriptionEn}
          width='144'/>
        <h1>{cachedData.store.pageTitleEn}</h1>
      </Header>
      <Header style={{marginLeft: '20px'}}>
        <ol>
          {data.categories.map(category => (
            <li key={category.uuid}>
              {category.titleEn}
              <ul>
                <br />
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
      </Header>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const serverData = await getStoreDetails();
  return {
    props: {
      serverData,
    }
  }
}


export default Home;
