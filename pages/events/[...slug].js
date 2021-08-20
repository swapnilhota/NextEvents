import React from 'react'
import { useRouter } from 'next/dist/client/router'

const FilteredEventsPage = () => {

    const router = useRouter();
    const filterData = router.query.slug;
    const year = filterData[0];
    const month = filterData[1];

    return (
        <div>
            <h1>Filtered Events</h1>
        </div>
    )
}

export default FilteredEventsPage
