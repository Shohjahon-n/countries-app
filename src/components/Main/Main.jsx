import React from "react";
import "./Main.scss";
import { CounterListItem } from "../CounterListItem/CounterListItem"

class Main extends React.Component {
    render() {
        const { countryList, darkMode } = this.props;

        return (
            <React.Fragment>
                <main className="main container">
                    {countryList.map((country, index) => {
                        const { flags, name, capital, region, population, subregion,
                            tld, currencies, languages, borders } = country;
                        let money = '',
                            nativename = '',
                            language = ''

                        for (const key in currencies) {
                            money = currencies[key]?.name
                        }

                        for (const key in name?.nativeName) {
                            nativename = name?.nativeName[key].common
                        }

                        for (const key in languages) {
                            language += ', ' + languages[key]
                        }

                        language = language.substring(1);
                        return <CounterListItem flags={flags.png} darkMode={darkMode}
                            name={name.common} capital={capital}
                            region={region} population={population}
                            topLevelDomain={tld}
                            currencies={money} languages={language}
                            subregion={subregion} nativeName={nativename}
                            borders={borders} key={index}
                        />
                    })}
                </main>
            </React.Fragment >
        );
    }
}

export default Main;