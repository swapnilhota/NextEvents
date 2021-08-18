import React from 'react'

const EventList = (props) => {

    const { items } = props;

    return (
        <ul>
            {items.map(event => (
                <li></li>
            ))}
        </ul>
    )
}

export default EventList
