import React from "react";
import "../css/style.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import CitasLista from "./CitasLista"

const ListaFormulario = () => {
  return (
    <section className="container">
    <article className="mt-5 mx-auto p-3">
      <div className="shadow">
        <div className="border w-100 p-2">
          <p>Completa el formulario para agendar una cita</p>
        </div>
  
        <form action="">
          <div className="fondo border p-3">
            <div className="mb-3 w-75 mx-auto">
              <label htmlFor="mascota" className="form-label">
                <b>Nombre de la mascota:</b>
              </label>
              <Form.Control
                id="mascota"
                className="rounded w-100"
                placeholder="Nombre de la mascota"
                aria-label="Nombre de la mascota"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="mb-3 w-75 mx-auto">
              <label htmlFor="dueno" className="form-label">
                <b>Nombre del dueño:</b>
              </label>
              <Form.Control
                id="dueno"
                className="rounded w-100"
                placeholder="Nombre del dueño"
                aria-label="Nombre del dueño"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="mb-3 row ms-5"> 
              <div className="col-12 col-sm-4 col-lg-4 mb-3 mb-sm-0 ms-5">
                <label htmlFor="fecha" className="form-label">
                  <b>Fecha</b>
                </label>
                <Form.Control
                  id="fecha"
                  type="date"
                  className="rounded w-50"
                  placeholder="Fecha"
                  aria-label="Fecha"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="col-12 col-sm-4 col-lg-4">
                <label htmlFor="hora" className="form-label">
                  <b>Hora</b>
                </label>
                <Form.Control
                  type="time"
                  id="hora"
                  className="rounded w-50"
                  placeholder="Hora"
                  aria-label="Hora"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
  
            <div className="mb-3 w-75 mx-auto">
              <label htmlFor="sintomas" className="form-label">
                <b>Síntomas:</b>
              </label>
              <Form.Control
                id="sintomas"
                className="rounded w-100"
                placeholder="Describe los síntomas"
                
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="border p-3 text-center">
            <Button variant="primary" className="shadow" type="submit">
              Agregar nueva cita
            </Button>
          </div>
        </form>
      </div>
    </article>

    <article>
      <CitasLista></CitasLista>
    </article>
  </section>
  
  );
};

export default ListaFormulario;
