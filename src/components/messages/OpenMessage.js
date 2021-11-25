import React, { Component } from "react";

class OpenMessage extends Component {

    render() {
        return (
            <article className="message is-success has-text-centered is-medium">
                <div className="message-body">
                    Der Fachschaftsraum ist gerade geöffnet!
                </div>
            </article>
        );
    }
}

export default OpenMessage;