import React from 'react';
import "./FilterBar.css";

function FilterBar() {
    return (<div className="FilterBar">
        <ul>
            <li className="main">All</li>
            <li>Cricket</li>
            <li>Comedy</li>
            <li>Smart Programming</li>
            <li>Thrillers</li>
            <li>Trailer</li>
            <li>Netflix</li>

            <li>Football</li>
            <li>Recently Uploaded</li>
            <li>Live</li>

        </ul>
    </div>)
}

export default FilterBar
