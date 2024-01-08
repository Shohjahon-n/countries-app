import { Component } from "react";
import closeSvg from "../../images/close.svg";
import closeDarkSvg from "../../images/close-dark.svg";

class CounterListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    toggleModal = () => {
        this.setState(el => ({
            showModal: !el.showModal
        }));
    };

    render() {
        const { showModal } = this.state;
        const { flags, name, capital, region, population, topLevelDomain, currencies,
            languages, subregion, nativeName, borders, darkMode } = this.props;
        return (
            <div>
                {showModal &&
                    <div className="modal" >
                        <div className="modal-content" >
                            <button className="close-btn" onClick={this.toggleModal}>
                                {darkMode ? <img src={closeSvg} alt="close" /> :
                                    <img src={closeDarkSvg} alt="close" />
                                }
                            </button>
                            <div className="flag-img">
                                <img src={flags} alt="flag image" />
                            </div>
                            <div className="main-infos">
                                <div className="infos">
                                    <div className="first-info">
                                        <h3>{name}</h3>
                                        {nativeName ? <p>Native Name: <span>{nativeName}</span></p> : null}
                                        {population ? <p>Population: <span>{population.toLocaleString('en-US')}</span></p> : null}
                                        {region ? <p>Region: <span>{region}</span></p> : null}
                                        {subregion ? <p>Sub Region: <span>{subregion}</span></p> : null}
                                        {capital.length ? <p>Capital: <span>{capital}</span></p> : null}
                                    </div>
                                    <div className="secondary-info">
                                        {topLevelDomain ? <p>Top Level Domain: <span>{topLevelDomain}</span></p> : null}
                                        {currencies ? <p>Currencies: <span>{currencies}</span></p> : null}
                                        {languages ? <p>Languages: <span>{languages}</span></p> : null}
                                    </div>
                                </div>
                                <div className="main-borders">
                                    {borders.length ?
                                        <div>Border Countries: <div className="border-countries">
                                            {borders.map((el, idx) => <div className="borders" key={idx}
                                            >{el}</div>)}</div></div>
                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className="card" onClick={this.toggleModal}>
                    <img src={flags} alt="" />
                    <h4>{name}</h4>
                    {population ? <p>Population: <span>{population.toLocaleString('en-US')}</span></p> : null}
                    {capital.length ? <p>Capital: <span>{capital}</span></p> : null}
                    {region ? <p>Region: <span>{region}</span></p> : null}
                </div >
            </div >

        );
    }
}

export { CounterListItem }