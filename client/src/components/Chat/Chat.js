import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'http://localhost:5000/';
    
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        console.log(socket)

        socket.emit('join', { name, room }, ( ) => {

        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
        })
    }, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(e)

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log({message, messages})

    return (
        <div className="outerContainer">
            <div className="container">
                <input 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
                    />
            </div>
        </div>
    )
}

export default Chat;