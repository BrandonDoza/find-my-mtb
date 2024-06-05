import { useState, useEffect } from 'react'
import BikesDisplay from '../BikesDisplay/BikesDisplay'
import './MyBikes.css'

export default function MyBikes({allBikes}) {
    const [myBikes, setMyBikes] = useState([])
    function getMyBikes() {
        const filteredByFavorite = allBikes.filter(bike => {
            return bike.favorite === true
    })
    console.log(filteredByFavorite, 'favfilt')
    setMyBikes(filteredByFavorite)
}
useEffect(() => {
    getMyBikes()
}, [myBikes.length])
    return (
        <div className='my-bikes'>
            {myBikes.length === 0 ? <h1>You Have No Bikes Yet, Go Add Some!</h1> : <BikesDisplay allBikes={myBikes}/>}
        </div>
    )
}