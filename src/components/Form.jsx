import { useState, useEffect } from "react";
import { Error } from "./Error";

function Form({ setPatients, patients, editPatient }) {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fechaAlta, setFechaAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(editPatient).length){
      setNombre(editPatient.nombre);
      setPropietario(editPatient.propietario);
      setEmail(editPatient.email);
      setFechaAlta(editPatient.fechaAlta);
      setSintomas(editPatient.sintomas);
    }
  }, [editPatient])

  const restartForm = () => {
    setNombre("");
    setPropietario("");
    setEmail("");
    setFechaAlta("");
    setSintomas("");
  };
  const generateId = () => {
      const random = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36);

      return random + fecha;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fechaAlta, sintomas].includes("")) {
      console.log("Hay un campo vacio");
      setError(true);
      return;
    }

    setError(false);
    
    let patient = {
      nombre,
      propietario,
      email,
      fechaAlta,
      sintomas,
    };

    if(editPatient.id){
      //Edit patient
      patient.id = editPatient.id;

      const updatedPatients = patients.map( patientState => (patientState.id === patient.id ? patient : patientState));
      
      setPatients(updatedPatients)
    }else{
      patient.id = generateId()
      setPatients([...patients, patient]);
    }

    restartForm();
  };

  return (
    <div className="md:w-1/2 lg:2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añadir patients y {""}{" "}
        <span className="text-indigo-600 font-bold">Administrarlos</span>
      </p>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
        onSubmit={handleSubmit}
      >
        {error && (<Error> 
           <p>Todos los campos son obligatorios</p>
          </Error>)
        }
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gra-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gra-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gra-700 uppercase font-bold"
          >
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="E-mail contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gra-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fechaAlta}
            onChange={(e) => setFechaAlta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gra-700 uppercase font-bold"
          >
            sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={editPatient?.id ? "Editar paciente" :"Agregar Paciente"}
        />
      </form>
    </div>
  );
}

export default Form;
