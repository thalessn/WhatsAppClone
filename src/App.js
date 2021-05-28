import React, {useState, useEffect} from 'react'
import './App.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatIntro from './components/ChatIntro';
import ChatListItem from './components/ChatListItem';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [chatList, setChatlist] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);

    return (
        <div className="app-window">
            <div className="sidebar">
                <header>
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" className="header--avatar" alt="logo"/>
                    <div className="header--buttons">
                        <div className="header--btn">
                            <DonutLargeIcon style={{color: '#919191'}} />
                        </div>
                        <div className="header--btn">
                            <ChatIcon style={{color: '#919191'}} />
                        </div>
                        <div className="header--btn">
                            <MoreVertIcon style={{color: '#919191'}} />
                        </div>
                    </div>
                </header>

                <div className="search">
                    <div className="search--input">
                        <SearchIcon fontSize="small" style={{color: '#919191'}} />
                        <input type="search" placeholder="Procurar ou começar uma nova conversa" />
                    </div>
                </div>

                <div className="chatlist">
                    {chatList.map((item, key) => (
                        <ChatListItem
                            key={key}
                        />
                    ))}
                </div>
            </div>

            <div className="contentarea">
                <ChatIntro />
            </div>
        </div>
    )
}