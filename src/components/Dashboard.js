import 'bulma/css/bulma.min.css';
import React, { Fragment } from "react";
import Footer from './layout/Footer';
import InformationText from './layout/InformationText';
import Header from './layout/Header';
import StatusMessage from './layout/StatusMessage';

const Dashboard = () => {

  return (
    <Fragment>
      <Header />
      <StatusMessage />
      <InformationText />
      <Footer />
    </Fragment >
  )
}

export default Dashboard;