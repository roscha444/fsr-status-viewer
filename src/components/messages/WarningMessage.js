import React, { Component } from "react";

class WarningMessage extends Component {

    render() {
        return (
            <article className="message is-warning has-text-centered is-medium">
                <div className="message-body">
                    Der Status kann gerade nicht abgerufen werden!
                </div>
            </article>
        );
    }
}

export default WarningMessage;