import React, { useContext } from 'react';
import '../Style.css';

const Search = () => {
	
    return (
        <div className="container">
            <label className="search-label" htmlFor="search-input">
                <input
                    type="text"
                    // value=""
                    id="search-input"
                    placeholder="Search..."
                />
                <i className="fa fa-search search-icon"/>
            </label>
            
        </div>
        )
	
}
export default Search;