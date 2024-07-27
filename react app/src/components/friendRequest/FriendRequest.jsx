// Import statements corrected
import React from 'react';
import './friendRequest.css'; // Assuming this is the correct path
import { Link } from 'react-router-dom';
import FriendreqData from '../../FakeApis/FriendreqData'; // Corrected path assuming it's in the parent directory

export default function FriendRequest() {
    return (
        <div className='Friend-Requests'>
            <h4>Friend Requests</h4>

            {
                FriendreqData.map(friend => (
                    <div className="request" key={friend.id}> {/* Added key prop here */}
                        <Link to={`/profile/${friend.id}`}> {/* Corrected Link path */}
                            <div className="info">
                                <div className="user">
                                    
                                    <img src={friend.img} alt="" />
                                     <h5>{friend.name}</h5> {/* Corrected how to access name */}
                                </div>
                                <div className='info-name'>
                                   
                                    <p>{friend.info}</p> {/* Corrected how to access info */}
                                </div>
                            </div>
                        </Link>   
                        <div className="action">
                            <button className='btn btn-primary'>Accept</button>
                            <button className='btn btn-red'>Delete</button>
                        </div>
                    </div>
                ))   
            }
        </div>
    );
}

