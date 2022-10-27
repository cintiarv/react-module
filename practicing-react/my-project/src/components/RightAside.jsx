import React from 'react'
import {Card} from '../components/Card'
import {CardArticle} from '../components/CardArticle'

const RightAside = () => {
<aside className="flex flex-col space-y-4">
        <Card title="Listings">
          {response.map((listing=> (
            <CardArticle 
        title={listing.title}
        subtitle={listing.subtitle}
        >
        </CardArticle>
          )))}
        
        </Card>
        <Card title="#help">
        <CardArticle 
        title="Reddit"
        subtitle="products"
        >
        </CardArticle>
        </Card>
        <Card title="#discuss">
        <CardArticle 
        title="Reddit"
        subtitle="education"
        >
        </CardArticle>
        </Card>
      
      </aside>
}