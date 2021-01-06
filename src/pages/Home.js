import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/listOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePage = ({ id }) => (
  <>
    <Layout title='tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de muchos animales lindos'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  </>
)
const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})

export default Home
