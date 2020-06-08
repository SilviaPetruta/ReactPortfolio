import React from 'react';
import './Menu.css';

const Menu = (props) => {
    const listItems = props.listItems.map(item => {
        return (
        <li className='flex-nav__item' key={item.id}>
            <a className='flex-nav__a' href={item.anchor}>{item.name}</a>
        </li>
        )
    })

    return (
        <nav className='flex-nav'>
            <ul className='flex-nav__list'>
                {listItems}
            </ul>
        </nav>
    )
}

export default Menu;