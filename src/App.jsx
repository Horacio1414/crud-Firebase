import React from "react"
import {firebase} from "./firebase"

function App() {

  const [tareas,setTareas] = React.useState([])


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



  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          Listar las tareas
        </div>
        <div className="col-md-6">
          Formulario
        </div>
      </div>
      jskdjskdjsk
    </div>
  );
}

export default App;
