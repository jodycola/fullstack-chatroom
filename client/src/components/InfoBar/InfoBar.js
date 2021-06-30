import React from 'react';
import './InfoBar.css';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineStatusOnline } from 'react-icons/hi';

const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <HiOutlineStatusOnline className="online-icon" />
            <br/>
            <h3 className="room-title"> {room} </h3>

        </div>

        <div className="rightInnerContainer">
            <a href="/"> <AiOutlineClose className="close-icon" /> </a>

        </div>

    </div>
)

export default InfoBar;