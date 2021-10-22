import React from "react"
import {firebase} from "./firebase"

function App() {

  const [tareas,setTareas] = React.useState([])
  const [tarea,setTarea] = React.useState("")


  React.useEffect(() => {
    const obtenerDatos = async ()=>{
      try{
        const db = firebase.firestore()
        const data = await db.collection("tareas").get()

        const arrayData = data.docs.map((doc)=>{
          return {id:doc.id, ...doc.data()}
        })

        
        setTareas(arrayData)

        /* console.log(data.docs) */
      }
      catch(error){
        console.log(error)
      }
    }

    obtenerDatos()
  }, [])

  const agregar = async (e)=>{
    e.preventDefault()
    if(!tarea.trim()){
      console.log("vacio")
      return
     
    }

    try{

      const db = firebase.firestore()
      const nuevaTarea = {
        name:tarea,
        fecha:Date.now()
      }

      const data = await db.collection("tareas").add(nuevaTarea)
      setTarea("")

    }catch(error){
      console.log(error)
    }


  }



  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
         <ul className="list-group">

           {tareas.map((item)=>{
             return (
               <li className="list-group-item" key={item.id}>
                 {item.name}

               </li>
             )
           })}
         </ul>
        </div>
        <div className="col-md-6">
          <h3>Formulario</h3>
          <form onSubmit={agregar}>
            <input 
            type="text" 
            placeholder="ingresar tarea"
            className="form-control mb-2"
            onChange = {(e)=>{
              return setTarea(e.target.value)
            }}
            value = {tarea}
            
            />
            <button className="btn btn-dark btn block"
            type ="submit"
            >Apretame</button>
          </form>
        </div>
      </div>
    
    </div>
  );
}

export default App;
