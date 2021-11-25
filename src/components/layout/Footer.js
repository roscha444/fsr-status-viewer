import React, { Component } from "react";

class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>Fachschaft FB 12 Uni Marburg</strong> -
                        <a target="_blank" href="https://datenschutz.fs-matheinfo.de" rel="noreferrer">Datenschutzerklärung</a> -
                        <a target="_blank" href="https://github.com/Fachschaft-FB12" rel="noreferrer">View on GitHub</a>
                    </p>
                    <p>
                        <a href="https://bulma.io">
                            <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128"
                                height="24" />
                        </a>
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;