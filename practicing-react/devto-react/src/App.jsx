import React from 'react'
import { Card } from './components/Card'
import { CardArticle } from './components/CardArticle'

const response = [
  { title: 'fReddit -300+ Subreddits to join', subtitle: 'products' },
  { title: 'Learn with ruby applications', subtitle: 'education' },
]

function App () {
  return (
    /* iniciando por el layout (estructura de  columnas)  -> grid-cols-1 md:grid-cols-3 (no. de columnas) */
    <section className='grid grid-cols-3'>
      <aside>Links</aside>
      <main>Posts</main>
      <aside className='flex flex-col space-y-4'>
        <Card title='Listings'>
          {response.map((listing) => {
            <CardArticle
              key={listing.title}
              title={listing.title}
              subtitle={listing.subtitle}
            /> // parámetro a escoger en este caso fue listing
          })}
        </Card>
        <Card title='#help'>
        {response.map((listing) => {
            <CardArticle
              key={listing.title}
              title={listing.title}
              subtitle={listing.subtitle}
            /> 
          })}
        </Card>
        <Card title='#discuss'>
        {response.map((listing) => {
            <CardArticle
              key={listing.title}
              title={listing.title}
              subtitle={listing.subtitle}
            /> 
          })}
        </Card>
      </aside>
    </section>
  )
}

export default App
