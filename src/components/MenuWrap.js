import React from 'react';
import './MenuWrap.css';
import { FaBars } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

const MenuWrap = (props) => {
   const menuWrap = props.listMenuWrap.map(item => {
       return (
            <a className='iconsAnchor' href={item.anchor} target='_blank'>
                {item.icon}
            </a>
       )
   });

    return (
        <div className='wrap'>
            <div className='icons'>
                <a href="#" class="tooltip">
                    <FaRegEnvelope />
                    <span className="tooltiptext">Click to copy my email to clipboard</span>
                </a>
                {menuWrap}
            </div>
            <div className='menuIcon'>
                <a href="#" className='menuBtn'>
                    <FaBars className='menuBtn__icon' />
                </a>
            </div>
        </div>
    )
}

export default MenuWrap;