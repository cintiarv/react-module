import React from 'react'

export const CardArticle = (props) => {
  const { title, subtitle } = props
  return (
    <section className='p-3 hover:bg-gray-100 cursor-pointer'>
      <p className='opacity-70 hover:text-blue-800 hover:opacity-100'>{title}</p>
      <p className='opacity-40'>{subtitle}</p>
    </section>
  )
}
