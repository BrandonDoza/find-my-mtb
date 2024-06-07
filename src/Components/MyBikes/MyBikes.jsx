import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BikesDisplay from '../BikesDisplay/BikesDisplay'
import './MyBikes.css'
import PropTypes from "prop-types"

export default function MyBikes({myBikes, error}) {
   

if (error) {
    return <div className="all-bikes-error">
    <div>{`There was a problem loading the bikes, please try again later ${error}`}</div>
    <Link to="/">
    <button className='home-button'>Send Me Home</button>
</Link>
    </div>
} else {
    return (
        <div className='my-bikes'>
            {myBikes.length === 0 ? <h1>You Have No Bikes Yet, Go Add Some!</h1> : <BikesDisplay allBikes={myBikes}/>}
        </div>
    )
}
}

MyBikes.propTypes = { 
    allBikes: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)).isRequired
}