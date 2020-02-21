import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import fontawesome from '@fortawesome/fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope);

const SiteHeader = () => {
    return (
        <div className="SiteHeader">
            <h1 className="SiteHeader-text">Michael Decroce-Movson</h1>
            <div className="SiteHeader-buttonContainer">
                <a href="mailto:mdecrocemovson@gmail.com">
                <button className="SiteHeader-button">
                    Contact me at mdecrocemovson@gmail.com <FontAwesomeIcon icon="envelope" />
                </button>
                </a>
            </div>
        </div>
    )
}

export default SiteHeader;