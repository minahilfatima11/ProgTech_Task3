
import './message.css';
import { Link } from 'react-router-dom';
import { faSearch, faEdit } from '@fortawesome/free-solid-svg-icons'; // Importing faEdit icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MessageData from '../../FakeApis/MessageData'; // Adjusted import path assuming MessageData is in ../../FakeApis directory

export default function Message() {
    return (
        <div className='Messages'>
            <div className="message-top">
                <h4>Messages</h4>
                <FontAwesomeIcon icon={faEdit} />
            </div>
            <div className="message-search">
                <FontAwesomeIcon icon={faSearch} />
                <input type="search" placeholder='Search Message' />
            </div>
            <div className="border-div"></div>

            {MessageData.map(mess => (
                <Link to={`/chatbox/${mess.id}`} key={mess.id}>
                    <div className="message">
                        <div className="user">
                            <img src={mess.img} alt="" />
                            <div className="green-active"></div>
                        </div>
                        <div className="message-body">
                            <h5>{mess.name}</h5>
                            <p>{mess.mText}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
