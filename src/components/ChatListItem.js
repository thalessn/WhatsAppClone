import React from 'react';
import './ChatListItem.css';
import { timestampToFormattedDate } from './../util/functions';

const defaultImage = 'https://pbs.twimg.com/profile_images/1259926100261601280/OgmLtUZJ_400x400.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({onClick, active, data}) => {
    return (
        <div 
            className={`chatListItem ${ active ? 'active': ''}`}
            onClick={onClick}
        >
            <img 
                className="chatListItem--avatar"
                src={data.contact.profilePicThumbObj.eurl === undefined ? defaultImage : data.contact.profilePicThumbObj.eurl} 
                alt="logo" 
            />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.name}</div>
                    <div className="chatListItem--date">{timestampToFormattedDate(data.t)}</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Em construção</p>
                    </div>
                </div>
            </div>
        </div>
    )
}