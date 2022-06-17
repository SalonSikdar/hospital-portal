import React, { Component, useEffect } from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Router, useNavigate } from "react-router-dom";

function PatientTable() {
  let [patients, setPatients] = useState([]);

  let navigate = useNavigate();
  const redirectToPatient = (patientId) => {
    let path = `/patient/${patientId}`;
    navigate(path);
  };

  useEffect(() => {
    //read this from API
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
    setPatients(latestPatients);
  }, []);

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Patient ID</th>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Age</th>
          <th scope="col">Department</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient, index) => {
          return (
            <tr
              className={index % 2 == 0 ? "table-active" : ""}
              onClick={()=>redirectToPatient(patient.id)}
            >
              <th scope="row">{patient.id}</th>
              <td>{patient.fName}</td>
              <td>{patient.lName}</td>
              <td>{patient.age}</td>
              <td>{patient.department}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PatientTable;
