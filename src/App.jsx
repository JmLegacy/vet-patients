import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PatientsList from "./components/PatientsList";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});
  const deletePatient = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };

  useEffect(() => {
    const handleLocalStorage = () => {
      const patientsToPersist =
        JSON.parse(localStorage.getItem("patients")) ?? [];
        if(patientsToPersist.length) (setPatients(patientsToPersist));
    };
    handleLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          setPatients={setPatients}
          patients={patients}
          editPatient={patient}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
