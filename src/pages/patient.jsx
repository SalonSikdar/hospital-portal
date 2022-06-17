import React, { Component, useEffect, useState } from "react";
import _ from "lodash";
import "./patient.css";

import "bootswatch/dist/lux/bootstrap.css";

import patientImage from "../images/patientImage.jpg";

function Patient(props) {
  // console.log(props);
  const latestPatients = [
    {
      id: "12err",
      fName: "Amy ",
      lName: "Zelion",
      age: "28",
      DOB: "01-01-1993",
      image: "",
      address: "123, ABC street",
      updates: [{}],
      mobile: "9912345364",
      bloodGroup: "A+",
      department: "OB/Gyn",
    },
    {
      id: "23DFG",
      fName: "Bob",
      lName: "Yeshner",
      age: "48",
      DOB: "01-01-71",
      image: "",
      address: "234, seasaom street",
      updates: [{}],
      mobile: "776548392",
      bloodGroup: "AB+",
      department: "Urology",
    },
    {
      id: "56TRS",
      fName: "Cindy",
      lName: "Xalia",
      age: "9",
      DOB: "01-01-2011",
      image: "",
      address: "567, Macbeth street",
      updates: [{}],
      mobile: "987648953",
      bloodGroup: "O-",
      department: "General Surgery",
    },
    {
      id: "78UYT",
      fName: "Daliah",
      lName: "Weather",
      age: "56",
      DOB: "2-11-91",
      image: "",
      address: "678. magic street",
      updates: [{}],
      mobile: "8769044567",
      bloodGroup: "B-",
      department: "Hospice",
    },
  ];
  let [patient, setPatient] = useState({});
  useEffect(() => {
    //use dynamic id here
    setPatient(_.find(latestPatients, { id: "23DFG" }));
  }, []);
  return (
    <>
      <br />
      <div className="container">
        <div className="card mb-3">
          <div className="card-header">
            <h3>{patient.fName + " " + patient.lName}</h3>
            <h5>{"Paient ID  :" + patient.id}</h5>
          </div>
          <div className="card-body">
            <h5 className="card-title">Patient Image</h5>
            <img className="patient-image" src={patientImage}></img>
          </div>
          <div className=""></div>
          <div className="card-body">
            <p className="card-text">The patient was admitted on 01-01-2022</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{"Age : " + patient.age}</li>
            <li className="list-group-item">
              {"Blood Group : " + patient.bloodGroup}
            </li>
            <li className="list-group-item">{"Mobile : " + patient.mobile}</li>
            <li className="list-group-item">
              {"Address : " + patient.address}
            </li>
            <li className="list-group-item">
              {"Date Of Birth : " + patient.DOB}
            </li>
          </ul>
          <div className="card-footer text-muted">
            {"Department: " + patient.department}
          </div>
        </div>
      </div>
    </>
  );
}

export default Patient;
