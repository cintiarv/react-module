import React from 'react'
import { AsideRightCard, ProfileToFollow, News } from '../components'
import {ReactComponent as Icono} from '../assets/react.svg'
import {ReactComponent as Moto} from '../assets/moto.svg'



const TwitterLink = (Icon, title) => {
    return(
    <button className='flex space-x-2'>
        <Icon className='fill-white' h-6 w-6 />
        <span>{title}</span>
    </button>
    )
}


export const AppLayout = () => {
    return (
    <section className='grid grid-cols-[1fr_1.5fr_1fr]'>{/* fr(fracción) ->en cuantas partes lo va a dividir, queremos la columna de enmedio mas grande */}
      <aside>
        <ul>
            <li>
            <TwitterLink Icon= {Icono} title='Home'/>
            </li>
            <li>
            <TwitterLink Icon= {Moto} title='Moto'/>

            </li>
        </ul>
      </aside>
      <main>vfd</main>
      <aside className='w-[350px] flex flex-col space-y-5'>
        <AsideRightCard title="Who to follow"> {/* esta etq se abre y cierra porque contendrán children(profiletofollow) */}
      <News category="Trending" title="aifa" tweets="2.5k" imageURL="https://pbs.twimg.com/profile_images/1085693738775506944/9JKQ9Et2_400x400.jpg" />
      <ProfileToFollow
        profileAvatarURL='https://pbs.twimg.com/profile_images/1085693738775506944/9JKQ9Et2_400x400.jpg'
        name='Rodrigo Medina'
        username='@roeeyn'
      />
      <ProfileToFollow
        profileAvatarURL='https://pbs.twimg.com/profile_images/1085693738775506944/9JKQ9Et2_400x400.jpg'
        name='Rodrigo Medina'
        username='@roeeyn'
      />
      <ProfileToFollow
        profileAvatarURL='https://pbs.twimg.com/profile_images/1085693738775506944/9JKQ9Et2_400x400.jpg'
        name='Rodrigo Medina'
        username='@roeeyn'
      />
      </AsideRightCard>
      </aside>
    </section>
    )
  }