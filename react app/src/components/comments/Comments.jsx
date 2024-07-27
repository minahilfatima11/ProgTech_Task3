import './comments.css';
import { Link } from 'react-router-dom';

// FakeApis
import CommetData from '../../FakeApis/CommetData';
import CurrentUserData from '../../FakeApis/CurrentUserData';

export default function Comments() {
    return (
        <div className='comments'>
            <div className="writebox">
                <form action="#">
                    <div className="user">
                        <img src={CurrentUserData[0]?.ProfileImage} alt="Profile" />
                        <input type="text" placeholder='Write A Comment' />
                        <button type='submit' className='btn btn-primary'>Send</button>
                    </div>
                </form>
            </div>
            {
                CommetData.map(comment => (
                    <Link to='/profile/id' key={comment.id}>
                        <div className="user">
                            <img src={comment.commentProfile} alt="Profile" />
                            <div>
                                 <h5>{comment.name}</h5>
                                 <p>{comment.CommeText}</p>
                            </div>
                            <small>1h</small>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
}
