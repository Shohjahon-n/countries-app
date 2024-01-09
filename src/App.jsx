import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Search from "./components/Search/Search";
import loaderSvg from './images/loader.svg';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryList: [],
            searchText: '',
            filteredCountries: [],
            region: '',
            visible: 8,
            darkMode: false,
            loading: false
        };
    }
    componentDidMount() {
        this.setState({ loading: true });
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,region,population,nativeName,borders,subregion,tld,languages')
            .then(response => response.json())
            .then(data => this.setState({ countryList: data, filteredCountries: data, loading: false }));
    }

    handleSearch = (e) => {
        const searchText = e.target.value;
        this.setState({ searchText }, () => this.filterCountries());
    }

    handleRegionSelect = (e) => {
        const selectedRegion = e.target.value;
        this.setState({ region: selectedRegion, visible: 8 }, () => this.filterCountries());
    }

    filterCountries = () => {
        const { searchText, region, countryList } = this.state;

        const filteredCountries = countryList.filter(country => {
            const matchesSearchText = country.name.common.toLowerCase().includes(searchText.toLowerCase());
            const matchesRegion = region ? country.region.toLowerCase() === region.toLowerCase() : true;
            return matchesSearchText && matchesRegion;
        });

        this.setState({ filteredCountries });
    }

    showMore = () => {
        this.setState({ visible: this.state.visible + 8 });
    }

    toggleMode = () => {
        let body = document.querySelector('body');
        body.classList.toggle('dark');
        this.setState({ darkMode: !this.state.darkMode });
    }
    render() {
        const { filteredCountries, searchText } = this.state;
        return (
            <React.Fragment>
                <Header toggleMode={this.toggleMode} darkMode={this.state.darkMode} />
                <Search
                    searchText={searchText}
                    onSearchChange={this.handleSearch}
                    region={this.state.region}
                    onRegionChange={this.handleRegionSelect}
                    darkMode={this.state.darkMode}
                />
                {this.state.loading ? <div className="loader container">
                    <img src={loaderSvg} alt="loader" />
                </div> : null}
                <Main countryList={filteredCountries.slice(0, this.state.visible)}
                    darkMode={this.state.darkMode} />
                {!filteredCountries.length ?
                    this.state.loading ? null : (
                        <div className="no-country">Country not found</div>)
                    :
                    filteredCountries.length > this.state.visible ?
                        <button className="show-more" onClick={this.showMore}>Show 8</button>
                        : null
                }
            </React.Fragment>
        );
    }
}

export default App;
