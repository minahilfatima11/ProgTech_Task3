
import './rightBar.css'

//.......Components......
import Message from '../message/Message'
import FriendRequest from '../friendRequest/FriendRequest'


export default function RightBar() {
    return (
        <div className='rightBar'>
            <div className="rightbar-container">
                <Message />
                <FriendRequest/>
            </div>
        </div>
    )
}