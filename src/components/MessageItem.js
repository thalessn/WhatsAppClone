import React from 'react';
import './MessageItem.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({ data, user }) => {
    return (
        <div 
            className="messageLine"
            style={{
                justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
            }}
        >
            <div 
                className="messageItem"
                style={{
                    background: user.id === data.author ? '#DCF8C6' : '#FFF'
                }}
            >
                <div className="messageText">{data.body}</div>
                <div className="messageDate">17:50</div>
            </div>
        </div>
    )
}