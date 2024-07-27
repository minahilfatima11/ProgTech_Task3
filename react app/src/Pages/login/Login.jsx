import { Link }from 'react-router-dom'
import './login.css'
export default function Login() {
    return (
        <div className="login">
            <div className='card'>
            <div className= "left">
                <h2> -<br/> InstagramLite <br />-</h2>
                <p>
                    Welcome back to Instagram Lite! Log in now to continue your journey!
                </p>
                <span> Dont Have Any Account</span>
                <Link to='/signup' >
                       <button className='btn btn-primary'>Register</button>
                    </Link>
                </div>
            <form className="right">
            <input type="text" required placeholder='username' />
            <input type="password" required placeholder='password' />
                    <button type='submit' className='btn'>Login</button>
            </form>
        </div>
        </div>
    )
}