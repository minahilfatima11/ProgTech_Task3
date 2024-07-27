import { Link } from 'react-router-dom'
import './signup.css'

export default function Signup() {
    return (
       <div className="signup">
            <div className='card'>
            <div className= "left">
                <h2> -<br/> InstagramLite Signup<br />-</h2>
                <p>
                   Welcome to Instagram Lite! Share your moments, connect with friends.Sign up now and start your journey.
                </p>
                    <span>I Have An Account</span>
                    <Link to='/login' >
                       <button className='btn btn-primary'>Login</button>
                    </Link>
                

            </div>
            <form className="right">
                    <input type="text" required placeholder='username' />
                    <input type="email" required placeholder='eamil' />
                    <input type="password" required placeholder='password' />
                    <button type='submit' className='btn'>Register</button>
            </form>
        </div>
        </div>
    )
}