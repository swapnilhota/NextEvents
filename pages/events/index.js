import React from 'react';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

const AllEventsPage = () => {

    const events = getAllEvents();

    return (
        <div>
            <EventsSearch />
            <EventList items={events} />
        </div>
    )
}

export default AllEventsPage
