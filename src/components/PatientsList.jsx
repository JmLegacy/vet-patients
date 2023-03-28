import Patient from "./Patient";

const PatientsList = ({ patients, setPatient, deletePatient }) => {

  if (!patients.length)
    return (
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-5 mb-5">
        <h2 className="font-black text-3xl text-center">No hay patients</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Acá apareceran tus {""}{" "}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>
      </div>
    );

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-5">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {""}{" "}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      {Boolean(patients.length) &&
        patients.map(
          (patient) => patient && <Patient deletePatient={deletePatient} key={patient.id} data={patient} setPatient={setPatient} />
        )}
    </div>
  );
};

export default PatientsList;
