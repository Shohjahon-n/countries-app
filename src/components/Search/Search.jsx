import React from 'react';
import searchImg from "../../images/search-scope.svg";
import whiteSearchImg from "../../images/searchImg-white.svg";
import './Search.scss';
class Search extends React.Component {
    render() {
        const { searchText, onSearchChange, region, onRegionChange, darkMode } = this.props;
        return (
            <div className="search container">
                <div className="search-inp">
                    {darkMode ?
                        <img src={searchImg} alt="search" /> :
                        <img src={whiteSearchImg} alt="search" />
                    }
                    <form onSubmit={e => e.preventDefault()}>
                        <input
                            onChange={onSearchChange}
                            type="search"
                            placeholder="Search for a country..."
                            value={searchText}
                        />
                    </form>
                </div>
                <div className="filter">
                    <select
                        onChange={onRegionChange}
                        value={region}>
                        <option value="">Filter by Region</option>
                        <option value="africa">Africa</option>
                        <option value="americas">Americas</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Search;