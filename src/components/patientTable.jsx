import React, { Component, useEffect } from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Router, useNavigate } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import _ from "lodash";

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

function PatientTable() {
  let [patients, setPatients] = useState(latestPatients);
  let [editRowIndex, setEditRowIndex] = useState(null);
  let [editRow, setEditRow] = useState({});
  let [isAdd, setIsAdd] = useState(false);

  let navigate = useNavigate();
  const redirectToPatient = (patientId) => {
    let path = `/patient/${patientId}`;
    navigate(path);
  };

  const handleEditRow = (index) => {
    setEditRowIndex(index);
    setEditRow(patients[index]);
  };

  const setRowData = (value, key) => {
    editRow[key] = value;
    setEditRow(editRow);
  };

  const addRow = () => {
    setIsAdd(true);
    patients.push({
      id: "",
      fName: "",
      lName: "",
      age: "",
      DOB: "",
      image: "",
      address: "",
      updates: [{}],
      mobile: "",
      bloodGroup: "",
      department: "",
    });
    setPatients(patients);
    setEditRowIndex(patients.length - 1);
  };

  const updateRow = (index) => {
    if (isAdd) editRow.id = Math.random().toString(36).slice(7);
    patients[index] = editRow;
    setPatients(patients);
    setEditRowIndex(null);
    setIsAdd(false);
  };

  const deletePatient = (index) => {
    // console.log("delete recieved");
    // console.log("patients before" + JSON.stringify(patients));
    let newPatients = patients.filter((p, i) => {
      if (i != index) return p;
    });
    // console.log("patients after" + JSON.stringify(newPatients));
    setPatients(newPatients);
  };

  useEffect(() => {
    //read patients  from API
    setPatients(latestPatients);
  }, []);

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Patient ID</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Age</th>
            <th scope="col">Department</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => {
            if (editRowIndex != index) {
              return (
                <tr
                  key={patient.id}
                  className={index % 2 == 0 ? "table-active" : ""}
                >
                  <th onClick={() => redirectToPatient(patient.id)} scope="row">
                    {patient.id}
                  </th>
                  <td onClick={() => redirectToPatient(patient.id)}>
                    {patient.fName}
                  </td>
                  <td onClick={() => redirectToPatient(patient.id)}>
                    {patient.lName}
                  </td>
                  <td onClick={() => redirectToPatient(patient.id)}>
                    {patient.age}
                  </td>
                  <td onClick={() => redirectToPatient(patient.id)}>
                    {patient.department}
                  </td>
                  <td>
                    <FaTrashAlt onClick={() => deletePatient(index)} />
                    <br />
                    <FaEdit onClick={() => handleEditRow(index)} />
                  </td>
                </tr>
              );
            } else {
              return (
                <tr>
                  <td>{patient.id}</td>
                  <td>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder={patient.fName}
                        id="fName"
                        onChange={(e) => setRowData(e.target.value, "fName")}
                      />
                    </div>
                  </td>

                  <td>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder={patient.lName}
                        id="lName"
                        onChange={(e) => setRowData(e.target.value, "lName")}
                      />
                    </div>
                  </td>
                  <td>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder={patient.age}
                        id="age"
                        onChange={(e) => setRowData(e.target.value, "age")}
                      />
                    </div>
                  </td>
                  <td>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder={patient.department}
                        id="department"
                        onChange={(e) =>
                          setRowData(e.target.value, "department")
                        }
                      />
                    </div>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      onClick={() => {
                        updateRow(index);
                      }}
                    >
                      Save
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <button
        type="button"
        class="btn btn-primary btn-sm"
        onClick={() => {
          addRow();
        }}
      >
        Add Row
      </button>
    </>
  );
}

export default PatientTable;
