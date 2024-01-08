import React from "react";
import './Header.scss';
import moonImg from '../../images/moon.svg';
import whiteMoon from '../../images/white-moon.svg';
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { toggleMode, darkMode } = this.props;
        return (
            <header className="header">
                <div className="header-content container">
                    <h1 className="header__title">Where in the world?</h1>
                    <div className="header__theme" onClick={toggleMode}>
                        {darkMode ? (
                            <div>
                                <img src={moonImg} alt="moon img" />
                                <span>Dark Mode</span>
                            </div>
                        ) : (
                            <div>
                                <img src={whiteMoon} alt="moon img" />
                                <span>Light Mode</span>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        );
    }
}
export default Header