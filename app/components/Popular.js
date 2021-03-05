import React, { Component, Fragment } from 'react';

function LanguagesNav({ selected, onUpdateLanguage }) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <ul className="flex-center">
            {languages.map((language) => (
                <li key={language}>
                    <button
                        className="btn-clear nav-link"
                        onClick={() => onUpdateLanguage(language)}
                        style={
                            language === selected
                                ? { color: 'rgb(187, 46, 31)' }
                                : null
                        }
                    >
                        {language}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default class Popular extends Component {
    state = {
        selectedLanguage: 'All',
    };

    updateLanguage = (selectedLanguage) => {
        this.setState({
            selectedLanguage,
        });
    };

    render() {
        const { selectedLanguage } = this.state;
        return (
            <Fragment>
                <LanguagesNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateLanguage}
                />
            </Fragment>
        );
    }
}
