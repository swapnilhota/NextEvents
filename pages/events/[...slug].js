import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';

const FilteredEventsPage = () => {

    const router = useRouter();
    const filterData = router.query.slug;

    if (!filterData) {
        return (
            <p className="center">Loading...</p>
        )
    }

    const year = filterData[0];
    const month = filterData[1];

    const numYear = +year;
    const numMonth = +month;

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return (
            <p>Invalid Filters</p>
        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <p>No events found for chosen filter</p>
        )
    }

    return (
        <div>
            <EventList items={filteredEvents} />
        </div>
    )
}

export default FilteredEventsPage
