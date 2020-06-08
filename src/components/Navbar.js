import React from 'react';

const Navbar = (props) => {
    const listItems = props.listNavItems.map(item => {
        return (
            <a className='flex-nav__a' href={item.anchor}>{item.name}</a>
        )
    })

    return (
        <div className='flex-nav'>
            <ul className='flex-nav__list'>
                {listItems}
            </ul>
        </div>
    )
}

export default Navbar;