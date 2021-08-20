import React, { Fragment } from 'react'
import { useRouter } from 'next/dist/client/router'
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

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
            <Fragment>
                <ErrorAlert><p>Invalid Filters</p></ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>

        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <ErrorAlert><p>No events found for chosen filter</p></ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        )
    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <div>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </div>
    )
}

export default FilteredEventsPage
