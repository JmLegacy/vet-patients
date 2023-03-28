const Patient = ({ data: patient, setPatient, deletePatient }) => {

  return (
    patient && (
      <div className="bg-white shadow-md px-5 py-10 rounded-xl mb-5">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case">{patient.nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {""}
          <span className="font-normal normal-case">{patient.propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case">{patient.email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: {""}
          <span className="font-normal normal-case">{patient.fechaAlta}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: {""}
          <span className="font-normal normal-case">{patient.sintomas}</span>
        </p>
        <div className="flex justify-between mt-5">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg"
            onClick={() => setPatient(patient)}
          >
            Editar
          </button>
          <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
            onClick={() => deletePatient(patient.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    )
  );
};

export default Patient;
