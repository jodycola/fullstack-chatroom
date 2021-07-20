import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import Users from '../Users/Users';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [theme, setTheme] = useState("");
    const [openMembersList, setOpenMembersList] = useState(false);
    const ENDPOINT = 'http://localhost:5000/';

    const handleSelect = (value) => {
        setTheme(value)
    }

    const handleShowMembers = () => {
        setOpenMembersList(!openMembersList)
    }
    
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, ( ) => {

        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message]);
        })

        socket.on("roomData", ({ users }) => {
            setUsers(users);
    });
    }, [messages, users]);

    const sendMessage = (e) => {
        e.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <div className="outerContainer">
            <div className="container">
            <InfoBar theme={theme} handleSelect={handleSelect} room={room} handleShowMembers={handleShowMembers} />
            <Messages messages={messages} name={name} />
            <Input theme={theme} message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            {openMembersList ? 
            <Users users={users}/>
            :
            null
            }
        </div>
    )
}

export default Chat;