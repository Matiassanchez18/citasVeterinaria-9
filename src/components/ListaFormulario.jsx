import React, { useEffect, useState } from "react";
import "../css/style.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import CitasLista from "./CitasLista";
import { useForm } from "react-hook-form";

const ListaFormulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const citasLocalStorage = JSON.parse(localStorage.getItem("CitasKey")) || [];

  const [arrayCitas, setarrayCitas] = useState(citasLocalStorage);
  const [contadorID, setContadorId] = useState(0);

  const enviadoForm = (data) => {
    const nuevoID = contadorID;
    setarrayCitas([
      ...arrayCitas,
      {
        id: nuevoID,
        NombreMascota: data.nombre.trim(),
        NombreDueno: data.nombreDueno.trim(),
        Fecha: data.fecha.trim(),
        Hora: data.hora.trim(),
        Sintomas: data.sintomas.trim(),
      },
    ]);
    reset();
    setContadorId(contadorID + 1);
  };

  useEffect(() => {
    console.log("desde useEffect"),
      localStorage.setItem("CitasKey", JSON.stringify(arrayCitas));
  }, [arrayCitas]);

  const borrarCita = (citaEliminar) =>{
    const citaEncontrar = arrayCitas.filter((citas)=> citas !== citaEliminar)
    setarrayCitas(citaEncontrar);
  }

  return (
    <section className="container">
      <article className="mt-5 mx-auto p-3">
        <div className="shadow">
          <div className="border w-100 p-2">
            <p>Completa el formulario para agendar una cita</p>
          </div>

          <form action="" onSubmit={handleSubmit(enviadoForm)}>
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
                  {...register("nombre", {
                    required: "Este campo es obligatorio",
                    minLength: {
                      value: 3,
                      message: "El minimo de caracteres es de 3",
                    },
                    maxLength: {
                      value: 15,
                      message: "El maximo de caracteres permitido es de 15",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.nombre?.message}
                </Form.Text>
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
                  {...register("nombreDueno", {
                    required: "Este campo es obligatorio",
                    minLength: {
                      value: 3,
                      message: "El minimo de caracteres es de 3",
                    },
                    maxLength: {
                      value: 15,
                      message: "El maximo de caracteres permitido es de 15",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.nombreDueno?.message}
                </Form.Text>
              </div>

              <div className="ms-5
              ">

              
              <div className="mb-3 row ms-5 ">
                <div className="col-12 col-sm-6 col-lg-6 mb-3 mb-sm-0 ">
                  <label htmlFor="fecha" className="form-label">
                    <b>Fecha</b>
                  </label>
                  <Form.Control
                    id="fecha"
                    type="date"
                    className="rounded w-75"
                    placeholder="Fecha"
                    aria-label="Fecha"
                    aria-describedby="basic-addon1"
                    {...register("fecha", {
                      required: "Este campo es obligatorio",
                      validate: (value) => {
                        const hoy = new Date();
                        const diaSeleccionado = new Date(value);
                        if (diaSeleccionado < hoy) {
                          return "La fecha no puede ser pasada";
                        }
                        return true;
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.fecha?.message}
                  </Form.Text>
                </div>
                <div className="col-12 col-sm-6 col-lg-6">
                  <label htmlFor="hora" className="form-label">
                    <b>Hora</b>
                  </label>
                  <Form.Control
                    type="time"
                    id="hora"
                    className="rounded w-75"
                    placeholder="Hora"
                    aria-label="Hora"
                    aria-describedby="basic-addon1"
                    {...register("hora", {
                      required: "Este campo es obligatorio",
                      validate: (value) => {
                        const tiempo = value;
                        const tamañoMinimo = "12:00";
                        const tamañoMaximo = "21:00";

                        if (tiempo > tamañoMaximo || tiempo < tamañoMinimo) {
                          return "La hora debe estar entre las 12:00 PM y las 9:00 PM";
                        } else {
                          return true;
                        }
                      },
                    })}
                    min="12:00"
                    max="21:00"
                  />
                  <Form.Text className="text-danger">
                    {errors.hora?.message}
                  </Form.Text>
                </div>
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
                  {...register("sintomas", {
                    required: "Este campo es obligatorio",
                    minLength: {
                      value: 10,
                      message: "El minimo de caracteres es de 10",
                    },
                    maxLength: {
                      value: 150,
                      message: "El maximo de caracteres permitido es de 150",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.sintomas?.message}
                </Form.Text>
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
        <CitasLista arrayCitas={arrayCitas} borrarCita = {borrarCita} ></CitasLista>
      </article>
    </section>
  );
};

export default ListaFormulario;
