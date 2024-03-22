import React from "react";
import { Link } from "react-router-dom";
import { TutorialScroll } from "./TutorialScroll";

const Landing = () => {
  return (
    <div className="flex flex-col w-[85%] lg:w-[45%] font-serif text-start text-lg mx-auto space-y-8 my-16 text-white">
      <h1 className="text-4xl font-extralight">Configuracion inicial</h1>
      <p>
        ¡Es importante completar la configuración inicial para garantizar el
        funcionamiento adecuado de la página! Asegúrate de seguir todos los
        pasos detallados anteriormente, como instalar Metamask, agregar la red
        de prueba Mumbai Testnet y cargar Matic en tu billetera. Sin esta
        configuración, es posible que no puedas participar en las votaciones y
        aprovechar todas las funcionalidades de mi plataforma. Si tienes alguna
        pregunta o necesitas ayuda durante el proceso de configuración, no dudes
        en comunicarte conmigo. Estoy aquí para ayudarte a tener la mejor
        experiencia en mi aplicación.
      </p>
      <TutorialScroll />
      <Link to="/Home" className="bg-teal-700 mx-auto px-8 py-2 rounded-2xl">
        Ir a Votar
      </Link>
      <div>
        <h2 className="text-xl underline -mb-4">
          2. Conexión a la red de prueba Mumbai Testnet:
        </h2>
        {<br />}
        <p>
          <p>
            <span className="underline text-xl">Nombre de la red:</span> Mumbai
            Testnet
          </p>
          <p>
            <span className="underline text-xl">Nueva URL RPC:</span>{" "}
            https://rpc-mumbai.maticvigil.com/
          </p>
          <p>
            <span className="underline text-xl">ID de cadena:</span> 80001
          </p>
          <p>
            <span className="underline text-xl">Símbolo de moneda:</span> MATIC
          </p>
          <p>
            <span className="underline text-xl">
              Explorador de bloques de red:
            </span>{" "}
            https://mumbai.polygonscan.com/
          </p>
          {<br />}
          Asegúrate de seleccionar la red de prueba Mumbai Testnet en Metamask
          haciendo clic en la parte superior de la ventana y seleccionando
          "Mumbai Testnet" en la lista desplegable de redes.{<br />}
          {<br />}
        </p>
      </div>
      {/* <Link to="/Home" className="bg-teal-700 mx-auto px-8 py-2 rounded-2xl">
        Ir a Votar
      </Link> */}
    </div>
  );
};

export default Landing;
