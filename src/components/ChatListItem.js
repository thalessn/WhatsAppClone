import React from 'react';
import './ChatListItem.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="logo" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Thales Nascimento</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Olá, Tudo Bemkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}