import React from 'react';
import './InfoBar.css';
import Theme from '../Theme/Theme';
import { AiOutlineClose, AiOutlineArrowRight } from 'react-icons/ai';
import { HiOutlineStatusOnline } from 'react-icons/hi';

const InfoBar = ({ room, handleSelect, theme, handleShowMembers }) => {


    return (
    <div className="infoBar" style={{background: theme}}>
        <div className="leftInnerContainer">
            <HiOutlineStatusOnline className="online-icon" />
            <br/>
            <h3 className="room-title"> {room} </h3>

        </div>

        <div className="rightInnerContainer">
            <Theme handleSelect={handleSelect} theme={theme} />
            <a href="/"> <AiOutlineClose className="close-icon" /> </a>
            <AiOutlineArrowRight className="arrow-icon" onClick={handleShowMembers} />
        </div>

    </div>
    )
}

export default InfoBar;