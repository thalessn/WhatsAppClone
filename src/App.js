import React, {useState, useEffect} from 'react'
import './App.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatIntro from './components/ChatIntro';
import ChatListItem from './components/ChatListItem';
import ChatWindow from './components/ChatWindow';
import api from './services/api';



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [activeChat, setActiveChat] = useState({});

    const [user, setUser] = useState({});
    
    const [chatList, setChatlist] = useState([]);

    useEffect(() => {
        async function loadChats() {
            try{
                const config = {
                    headers: { Authorization: `Bearer teste` }
                };
                const response = await api.get('/teste/all-chats', config);
                setChatlist(response.data.response);
            }catch(error){
                setChatlist([
                {chatId: 1, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
                {chatId: 2, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
                {chatId: 3, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
                {chatId: 4, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},]);
            }
        }

        loadChats();
    }, []);

    useEffect(() => {
        async function loadUserInformation() {
            try{
                const config = {
                    headers: { Authorization: `Bearer teste` }
                };
                const responseHost = await api.get('/teste/host-device', config);
                const responseAvatar = await api.get(`/teste/profile-pic/${responseHost.data.response.wid.user}`, config);
                const avatar = responseAvatar.data.response.eurl === undefined ? 'https://www.w3schools.com/howto/img_avatar2.png' : responseAvatar.data.response.eurl;
                const user = {
                    id: responseHost.data.response.id,
                    avatar,
                    name: responseHost.data.response.pushname
                }
                setUser(user);
            }catch(error){
                setUser({
                    id: 1,
                    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
                    name: 'Thales Nascimento'
                });
            }
        }
        loadUserInformation();
    }, []);

    function handleActiveChat (activeChat, chat) {
        if(activeChat.id.user){
            if(activeChat.id.user === chat.id.user){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    return (
        <div className="app-window">
            <div className="sidebar">
                <header>
                    <img src={user.avatar} className="header--avatar" alt="logo"/>
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
                            data={item}
                            active={activeChat.chatId === chatList[key].chatId }
                            onClick={()=>setActiveChat(chatList[key])}
                        />
                    ))}
                </div>
            </div>

            <div className="contentarea">
                { activeChat.chatId !== undefined && 
                    <ChatWindow 
                        user={user}
                    />
                }
                {activeChat.chatId == undefined && 
                    <ChatIntro />
                } 
            </div>
        </div>
    )
}