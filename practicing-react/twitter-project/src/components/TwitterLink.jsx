export const TwitterLink = (Icon, title) => {
    return(
    <button className='flex space-x-2'>
        <Icon className='fill-white' h-6 w-6 />
        <span>{title}</span>
    </button>
    )
}
