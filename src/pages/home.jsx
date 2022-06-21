import React, { Component } from "react";
import "bootswatch/dist/lux/bootstrap.css";

import PatientTable from "../components/patientTable";

function Home() {
  return (
    <div>
      <br />
      <h1>Patient Database</h1>
      <PatientTable />
    </div>
  );
}

export default Home;
