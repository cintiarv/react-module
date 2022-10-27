import React from 'react'
import './Card.css'



export const Card = ({bgImg, profImg, name, age, location, followersAmount, likesAmount, photosAmount}) => {
    return(
        <article className='card'>
            <div className='innerImg'>{bgImg}</div>
            <img className='profile__pic' src={profImg} alt="Profile image" />
            <section className='infoUser'>
                <div className='infoUser__title'>
                <h1 className='name'>{name}</h1>
                <p className='age'>{age}</p>
                </div>
                <p>{location}</p>
            </section>
            <hr/>
            <article className='data'>
            <section>
             <p className='amount'>{followersAmount}K</p>
             <p className='amountTitle'>Followers</p>
            </section>
            <section>
             <p className='amount'>{likesAmount}K</p>
             <p className='amountTitle'>Likes</p>
            </section>
            <section>
             <p className='amount'>{photosAmount}K</p>
             <p className='amountTitle'>Photos</p>
            </section>
            </article>
        </article> 
    )
}

const userInfo = {
    profImg:'src/assets/image-victor.jpg',
    name:'Victor Crest',
    age : '26',
    location:'London',
    followersAmount:'80',
    likesAmount:'803',
    photosAmount:'1.4'
}
export const CardUpdated = () => {
    return(
        <section className='bg-image'>
        <article>
                <Card 
                profImg= {userInfo.profImg}
                name= {userInfo.name}
                age = {userInfo.age}
                location= {userInfo.location}
                followersAmount= {userInfo.followersAmount}
                likesAmount={userInfo.likesAmount}
                photosAmount={userInfo.photosAmount}
                />     
        </article>
        </section>
    )
}

