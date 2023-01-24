const listaTareas = document.querySelector("#listaTareas")
const agregarTarea = document.querySelector("#agregarTarea")
const btnAgregar = document.querySelector("#btnTarea")
const cuentaTareas = document.querySelector("#cuentaTareas")
const cuentaTareasCompletadas = document.querySelector("#cuentaTareasCompletadas")

const tareas = [
    {id: new Date().getTime() + 1, Descripción: "Hacer mercado", completo: false},
    {id: new Date().getTime() + 2, Descripción: "Estudiar para examen", completo: false},
    {id: new Date().getTime() + 3, Descripción: "Hacer rutina de ejercicios", completo: false}
];

btnAgregar.addEventListener("click", () => {
    if(validarCamposVacios() == false){
        return
      }
const nuevatarea = agregarTarea.value
tareas.push({id: new Date().getTime(), Descripción: nuevatarea, completo: false})
agregarTarea.value = "" /* Vaciamos el input */

let html = ""
for (let tarea of tareas) {
html += `<li><input type="checkbox">   ${tarea.id} - ${tarea.Descripción}  <button onclick = "borrarTarea(${tarea.id})">  x  </button>  </li> `;
}
listaTareas.innerHTML = html;

cuentaTareas.innerHTML = `
      <span> Total: <b>${tareas.length}</span>
      `;
})


function borrarTarea(id){
    const index = tareas.findIndex((tarea) => tarea.id == id)
    tareas.splice(index, 1)
    let html = ""
    for (let tarea of tareas) {
    html += `<li><input type="checkbox">   ${tarea.id} - ${tarea.Descripción}  <button onclick = "borrarTarea(${tarea.id})">  x  </button>  </li> `;
    }
    listaTareas.innerHTML = html;
    
    cuentaTareas.innerHTML = `
          <span> Total: <b>${tareas.length}</span>
          `;

}


function validarCamposVacios(){
    if(agregarTarea.value == ""){
      alert("Ingrese una tarea")
      return false;  
    }
    return true;
    
  };