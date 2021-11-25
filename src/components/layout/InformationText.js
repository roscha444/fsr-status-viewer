import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHistory } from '@fortawesome/free-solid-svg-icons';

class InformationText extends Component {

    render() {
        return (
            <Fragment>
                <div class="columns is-mobile is-centered columns is-multiline">
                    <div className="column is-one-quarter content is-medium has-text-centered"><FontAwesomeIcon icon={faHistory} /> Letzte Änderung: kürzlich</div>
                    <div className="column is-one-quarter content is-medium has-text-centered"><FontAwesomeIcon icon={faMapMarkerAlt} /> Hans-Meerwein-Straße, Mehrzweckgebäudes 04D04</div>
                </div>
                <br />
            </Fragment>
        );
    }
}

export default InformationText;