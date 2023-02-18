import React, { useState, useEffect } from 'react'
import { db } from '../firebase/firebase.js'
import { collection, getDocs, addDoc, } from "firebase/firestore";


const initialForm = {
  nombre: '',
  apellido: '',
  email: '',
  telefono: '',
  comentarios: ''
}

const Crud = () => {
  const [form, setForm] = useState(initialForm)

  const getClientes = async () => {
    const querySnapshot = await getDocs(collection(db, "clientes"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }
  const createClientes = async () => {
    const coleccion = collection(db, 'clientes')
    await addDoc(coleccion, form)
    await getClientes()
  }

  useEffect(() => {
    getClientes()
  }, [])

  return (
    <>
      <div div className="container mt-2" > <h2>Crud</h2>
        <hr />
        <div className="row">
          <div className="col-4">
            <h3>Formulario</h3>
            <form>
              <input
                id="nombre"
                type="text"
                placeholder="Nombre"
                autoComplete="off"
                className="form-control"
                value={form.nombre}
                onChange={(e) => {
                  setForm({ ...form, nombre: e.target.value });
                }}
              />
              <input
                id="apellido"
                type="text"
                placeholder="Apellido"
                autoComplete="off"
                className="form-control"
                value={form.apellido}
                onChange={(e) => {
                  setForm({ ...form, apellido: e.target.value });
                }}
              />
              <input
                id="email"
                type="email"
                placeholder="Email"
                autoComplete="off"
                className="form-control"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
              />
              <input
                id="telefono"
                type="number"
                placeholder="Teléfono"
                autoComplete="off"
                className="form-control"
                value={form.telefono}
                onChange={(e) => {
                  setForm({ ...form, telefono: e.target.value });
                }}
              />
              <input
                id="comentarios"
                type="text"
                placeholder="Comentario"
                autoComplete="off"
                className="form-control"
                value={form.comentarios}
                onChange={(e) => {
                  setForm({ ...form, comentarios: e.target.value });
                }}
              />
              <button
                className="btn btn-primary btn-block mt-2"
                onClick={async (e) => {
                  e.preventDefault();
                  await createClientes();
                  setForm(initialForm);
                }}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Crud