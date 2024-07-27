 import './stories.css'

import UserStory from "./UserStory"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import StoriesData from '../../FakeApis/StoriesData'; 

export default function Stories() {
    return (
        <div className='stories'>
            <UserStory />
            <Swiper style={{ width: '80%' }} slidesPerView={4} spaceBetween={10}>
                {StoriesData.map(story => (
                    <SwiperSlide key={story.id}>
                        <div className="story">
                            <div className="user">
                                <img src={story.storyProfile} alt="User profile" />
                            </div>
                            <img src={story.story} alt="Story" />
                            <h5>{story.name}</h5>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );

}
