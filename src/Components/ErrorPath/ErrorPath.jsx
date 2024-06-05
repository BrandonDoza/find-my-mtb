import './ErrorPath.css'
import { Link } from 'react-router-dom'

export default function ErrorPath() {
    return (
        <div className='error-path'>
        <h1>Error, Page Not Found</h1>
        <h2>The Page or Bike You Are Looking For Does Not Exist</h2>
        <p>Please Enter A Valid URL</p>
        <Link to="/">
            <button className='home-button'>Send Me Home</button>
        </Link>
        </div>
    )
}