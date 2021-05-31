import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';

import MessageItem from './MessageItem';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ user }) => {

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [list, setList] = useState([
        {author: 123,  body: 'Teste Mensagem'},
        {author: 123, body: 'bla bla bla'},
        {author: 123, body: 'bla bla bla bla bla bla'},
        {author: 1234, body: 'Teste'}
    ]);
    
    const handleEmojiClick = (e, emojiObject) => {
        setText( text + emojiObject.emoji );
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }

    const handleMicClick = () => {

    }

    const handleSendClick = () => {

    }
    
    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerInfo">
                    <img className="chatWindow--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
                    <div className="chatWindow--name">Thales Nascimento</div>
                </div>

                <div className="chatWindow--headerButtons">
                    <div className="chatWindow--btn">
                        <SearchIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{color: '#919191'}} />
                    </div>                                        
                </div>
            </div>

            <div className="chatWindow--body">
                {list.map((item, key) => (
                    <MessageItem 
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>

            <div 
                className="chatWindow--emojiarea" 
                style={{ height: emojiOpen ? '200px' : '0px' }}
            >
                <EmojiPicker 
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker    
                />
            </div>

            <div className="chatWindow--footer">
                <div className="chatWindow--pre">
                    <div 
                       className="chatWindow--btn"
                       onClick={handleCloseEmoji}
                       style={{width: emojiOpen ? 40 : 0 }}
                    >
                        <CloseIcon style={{color: '#919191'}} />
                    </div>
                    <div 
                        className="chatWindow--btn"
                        onClick={handleOpenEmoji}
                    >
                        <InsertEmoticonIcon style={{color: emojiOpen ? '#009688' : '#919191'}} />
                    </div>
                </div>

                <div className="chatWindow--inputarea">
                    <input 
                        className="chatWindow--input" 
                        type="text" 
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={ e => setText(e.target.value) }
                    />
                </div>

                <div className="chatWindow--pos">
                    {text === '' &&
                        <div onClick={handleMicClick} className="chatWindow--btn">
                            <MicIcon style={{color: '#919191'}} />
                        </div>
                    }

                    {text !== '' &&
                        <div onClick={handleSendClick} className="chatWindow--btn">
                            <SendIcon style={{color: '#919191'}} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}