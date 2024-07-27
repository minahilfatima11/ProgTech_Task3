
import './feeds.css'
import { Link } from 'react-router-dom'
//....components.....


import Comments from '../comments/Comments'

//....States.....
import { useState } from 'react'

//....FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListDots, faHeart, faComment, faShare} from '@fortawesome/free-solid-svg-icons'

export default function Feed({fed}) {
    
    //State Discuss.....
    let [openCommet, setOpenComment] = useState(false);
    const CommentHandeler = () => {
        setOpenComment(!openCommet)
    }
    return (
        <div className='feed' key={fed.id}>
            <div className="top-content">
                <Link to='/profile/id'>
                    <div className="user">
                        <img src={fed.feedProfile} alt="" />
                        <div>
                             <h5>{fed.name}</h5>
                        <small>1 Minute ago</small>
                       </div>
                 </div>
                </Link>
                <span><FontAwesomeIcon icon={faListDots}/></span>
         </div>
            <div className="mid-content">
                <p>{fed.desc}</p>
                <img src={fed.feedImage} alt="" />
            </div>
            <div className="bottom-content">
                <div className="action-item">
                    <span><FontAwesomeIcon icon={faHeart}/> 10 Likes </span>
                </div>
                  <div className="action-item" onClick={CommentHandeler}>
                    <span><FontAwesomeIcon icon={faComment}/> 4 Comments </span>
                </div>
                  <div className="action-item">
                    <span><FontAwesomeIcon icon={faShare}/> 1 Share </span>
                </div>
            </div>
            {openCommet && <Comments/>}
        </div>
    )
}