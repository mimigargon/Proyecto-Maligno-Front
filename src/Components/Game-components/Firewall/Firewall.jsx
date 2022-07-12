import React from 'react'
import "./Firewall.scss"
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

function Firewall() {

  let navigation = useNavigate();
  const showAlert = () => {
    Swal.fire({
      title: "¡Conseguido! has encontrado parte de la contraseña",
      color: "#ffffff",
      confirmButtonColor: '#3085d6',
      background:
        'url("https://c.tenor.com/-SV9TjUGabMAAAAC/hacker-python.gif") no-repeat',
    }).then((result) => {
      if (result.isConfirmed) {
        //Aquí quiero redireccionar a Main cuando se haga click en OK y guardar la contraseña en Main (dispatch a redux y un navigate)
        navigation('/main');
        console.log("confirmado");
      }
    });
  };

  return (
  <div className='fw-container'>
  <div className="instructions">
    <h1>¿Alguna vez has tenido que conseguir evadir un firewall?</h1>
    <p>En esta prueba vas a tener que demostrar tu capacidad de burlar sistemas de seguridad como un firewall.</p>
    <p>para completar la prueba tendrás que poner el cursor en el pie de página donde pone <b>INICIO.</b></p>
    <p>Una vez ahí solo tendrás que moverte por el muro tratando de que tu cursor no choque con el muro, en caso de que choque, se reiniciará la prueba. Buena suerte.</p>
  </div>
     <div className="fw-game"> 
     
    <div className="wall-left"></div>
    <div className="wall-right"></div>
    <div className="gameover"><h1>You lose</h1></div>
    <div className="win"><button onClick={showAlert}>volver a main</button></div> 
  </div>
    <p className="fw-start">INICIO</p>
  </div>
  )
}

export default Firewall