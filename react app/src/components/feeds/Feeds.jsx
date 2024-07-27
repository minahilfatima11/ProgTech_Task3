import './feeds.css'

//components.....
import Feed from './Feed'


//fakeapis........

import HomeFeedData from '../../FakeApis/HomeFeedData'
export default function Feeds() {
    return (
        <div className='feeds'>
            {
                HomeFeedData.map(fed => (
                    <Feed fed={fed} key={fed.key}/>
                    
                ))
}
            
        </div>
    )
}