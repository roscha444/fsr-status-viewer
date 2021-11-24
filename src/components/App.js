import 'bulma/css/bulma.min.css';
import StatusContext from "../context/StatusContext/StatusContext";
import React, { useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHistory } from '@fortawesome/free-solid-svg-icons';
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {

  const statusContext = useContext(StatusContext);
  const {
    isOpen,
    isLoading,
    getStatus
  } = statusContext;

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <div>
      <section class="section">
        <div class="container">
          <h1 class="title is-3">
            Status Fachschaftsraum
          </h1>
          <p class="subtitle">
            Fachschaft Mathematik und Informatik, FB 12 Uni Marburg
          </p>
          <br />
          <div class="columns is-multiline has-text-centered">
            <div class="column"></div>
            <div class="column is-three-quarters">
              {isLoading ?
                <ClipLoader
                  size={50}
                  loading={isLoading}
                />
                :
                isOpen ?
                  (
                    <article class="message is-success has-text-centered is-medium">
                      <div class="message-body">
                        Der Fachschaftsraum ist gerade geöffnet!
                      </div>
                    </article>
                  ) :
                  (
                    <article class="message is-danger is-medium">
                      <div class="message-body">
                        <div class="">
                          Der Fachschaftsraum ist gerade leider geschlossen!
                        </div>
                      </div>
                    </article>
                  )
              }
            </div>
            <div class="column"></div>
          </div>
          <br />
          <div class="content is-medium">
            <div class="columns is-multiline has-text-centered">
              <div class="column"></div>
              <div class="column is-large"><FontAwesomeIcon icon={faHistory} /> Letzte Änderung: kürzlich</div>
              <div class="column is-large"><FontAwesomeIcon icon={faMapMarkerAlt} /> Hans-Meerwein-Straße, Mehrzweckgebäudes 04D04</div>
              <div class="column"></div>
            </div>
          </div>
        </div >
      </section >
      <footer class="footer">
        <div class="content has-text-centered">
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
    </div >
  )
}

export default App;