import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Citas = ({ cita }) => {
  return (
    <div className="col-12 col-md-6 col-sm-6 mt-2">
      <Card className="h-100 shadow-lg rounded-3">
        <Card.Header className="bg-primary text-white rounded-top">
          <ul className="list-unstyled">
            <li className="fs-4">Mascota: {cita.NombreMascota} </li> {/* Aquí accedes a los datos de la cita */}
            <li className="fs-5 lead">Dueño: {cita.NombreDueno} </li> {/* Aquí accedes a los datos del dueño */}
          </ul>
        </Card.Header>
        <Card.Body>
          <div className="row mb-3">
            <div className="col-12 col-md-6 col-sm-6 mt-2">
              <p className="ms-5 fs-5 fw-bold">Fecha</p>
            </div>
            <div className="col-12 col-md-6 col-sm-6 mt-2">
              <p className="border p-2 rounded-3 text-center">{cita.Fecha}</p> {/* Aquí accedes a la fecha */}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 col-md-6 col-sm-6 mt-2">
              <p className="ms-5 fs-5 fw-bold">Hora</p>
            </div>
            <div className="col-12 col-md-6 col-sm-6 mt-2">
              <p className="border p-2 rounded-3 text-center">{cita.Hora}</p> {/* Aquí accedes a la hora */}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 col-md-6 col-sm-6 mt-2">
              <p className="ms-5 fs-5 fw-bold">Síntomas</p>
            </div>
            <div className="col-12 col-md-6 col-sm-6 mt-2">
              <p className="border p-2 rounded-3 text-center">{cita.Sintomas}</p> {/* Aquí accedes a los síntomas */}
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="text-center bg-light rounded-bottom">
          <Button variant="danger" className="rounded-pill px-4 py-2">
            Borrar
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Citas;

