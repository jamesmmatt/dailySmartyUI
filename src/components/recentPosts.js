import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts__wrapper"></div>
                <ul className="recent-posts__posts">
                    <li>recent post 0</li>
                    <li>recent post 1</li>
                    <li>recent post 2</li>
                </ul>
            </div>
        )
    }
}

export default SearchBar;