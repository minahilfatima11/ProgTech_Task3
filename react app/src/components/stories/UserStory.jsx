import './stories.css'

//...fakeapis
import CurrentUserData from '../../FakeApis/CurrentUserData'

//....fontawesomeicon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

export default function UserStory() {
    return (
       
        <div className='story userStory'>
               <div className="user">
                               
                <img src={CurrentUserData.map(user => (user.ProfileImage))} alt="" />
                            </div>
            <img src={CurrentUserData.map(user => (user.ProfileImage))} alt="" />
            <label htmlFor="storyFiles">
                <FontAwesomeIcon icon={faAdd} />
                <input type="file" id='storyFiles' />
                
            </label>
            <h5> Add Story</h5>
                            
        </div>
       
    )
}