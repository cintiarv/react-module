import React from 'react'

export const AsideRightCard = ({title, children}) => {
    return (
    <article className='bg-[#14181c] rounded-lg'> {/* clase arbitraria */}
    <p className='text-lg font-bold py-4'>{title}</p>
    {children}
    </article>
    )
}
