import React from 'react'

export const ProfileToFollow = ({ profileAvatarURL, name, username }) => { // destructuring
    return(
    <article className='flex text-sm w-full p-4'>
      <img className='h-12 w-12 rounded-full' src={profileAvatarURL} alt='' />
      <section className='text-left ml-4'>
        <p className='font-bold'>{name}</p>
        <p className='opacity-60'>{username}</p> {/* simulando gris */}
      </section>
      <button className='bg-white text-black font-semibold rounded-full px-4 py-1.5 ml-auto'>Follow</button>
    </article>
    )
  }
  