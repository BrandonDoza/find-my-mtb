import './ErrorPath.css'
import { Link } from 'react-router-dom'

export default function ErrorPath() {
    return (
        <div className='error-path'>
        <h1>Error, Page Not Found</h1>
        <h2>Please Enter a Valid URL Adress</h2>
        <Link to="/">
            <button className='home-button'>Send Me Home</button>
        </Link>
        </div>
    )
}