import React from 'react';

function MessageCard(props) {
    return(
        
        <button className='card-btn'>
                    <div className="card">
                        <img src="https://pps.whatsapp.net/v/t61.24694-24/211826250_363367295466165_3797773433115823567_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AVweF2PwIoGMAULWiXI5mA9gR_FwMghRWECT6J5-yinIcQ&amp;oe=62D34166" alt="" draggable="false" class="profile-pic" />
                        <div className="card-content">
                            <div className="upper-content">
                                <p className='contact-name'>{props.name}</p>
                                <p className='date'>{props.date}</p>
                            </div>
                            <div className="lower-content">
                                <p className='message-content'><span className='message-status'></span>{props.message}</p>
                            </div>
                        </div>
                    </div>

                </button>
    )
}

export default MessageCard;