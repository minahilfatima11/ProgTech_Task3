import './darkmode.css'

// Fontawesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function DarkMode() {
    const DarkHandele=()=> {
        document.querySelector('body').classList.toggle('darkmode');
    }
    return (
        <div className='dark-mode-icon'>
            <FontAwesomeIcon icon={faLightbulb} onClick={DarkHandele}/>
        </div>
    )
}