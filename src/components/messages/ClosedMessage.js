import React, { Component } from "react";

class ClosedMessage extends Component {

    render() {
        return (
            <article className="message is-danger has-text-centered is-medium">
                <div className="message-body">
                    Der Fachschaftsraum ist gerade leider geschlossen!
                </div>
            </article>
        );
    }
}

export default ClosedMessage;