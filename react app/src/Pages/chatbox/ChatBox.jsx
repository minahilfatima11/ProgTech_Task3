import './chatbox.css'

//components.....
import Stories from '../../components/stories/Stories'

// fake apis/....
import CurrentUserData from '../../FakeApis/CurrentUserData'


// font awesome......
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faFileAlt } from '@fortawesome/free-solid-svg-icons'

export default function ChatBox() {
    return (
        <>
            <Stories />
            <div className="chat-box">
                <div className="chat-box-top">
                    <img src={CurrentUserData.map(user => (user.ProfileImage))} alt="" />
                <div className="user-name">
                    <h3>{CurrentUserData.map(user => (user.name))}</h3>
                    <h5>{CurrentUserData.map(user => (user.username))}</h5>
                </div>

                </div>
                <div className="chat-box-bottom">
                    <form action="#">
                        <input type="text" placeholder='Write Something' />
                        <button type='submit' className='btn btn-primary'>
                            <FontAwesomeIcon icon={faArrowAltCircleRight}/>
                        </button>
                        <label  className='btn btn-primary' htmlFor='CFile'>
                            <FontAwesomeIcon icon={faFileAlt} />
                            <input type="flile" id='CFile'/>
                        </label>
                    </form>
                </div>
            </div>
        </>
    )
}