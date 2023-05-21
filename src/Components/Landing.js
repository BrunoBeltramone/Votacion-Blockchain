import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col w-[85%] lg:w-[45%] font-serif text-start text-lg mx-auto space-y-8 my-16 ">
      <h1 className="text-4xl font-extralight">Configuracion inicial</h1>
      <p>
        ¡Es importante completar la configuración inicial para garantizar el
        funcionamiento adecuado de la página! Asegúrate de seguir todos los
        pasos detallados anteriormente, como instalar Metamask, agregar la red
        de prueba Mumbai Testnet y cargar Matic en tu billetera. Sin esta
        configuración, es posible que no puedas participar en las votaciones y
        aprovechar todas las funcionalidades de mi plataforma. Si tienes
        alguna pregunta o necesitas ayuda durante el proceso de configuración,
        no dudes en comunicarte conmigo. Estoy aquí para
        ayudarte a tener la mejor experiencia en mi aplicación.
      </p>
      <Link to="/Home" className="bg-blue-500 mx-auto px-8 py-2 rounded-2xl">
        Ir a Votar
      </Link>
      <div>
        <div>
          <h2 className="text-xl underline -mb-4">1. Instalar Metamask:</h2>
          {<br />}
          <p>
            Antes de comenzar, asegúrate de tener instalada la extensión de
            Metamask en tu navegador. Puedes encontrarla en metamask.io e
            instalarla siguiendo las instrucciones. Una vez que tengas Metamask
            instalado, crea una cuenta si aún no tienes una. Esto te
            proporcionará una billetera digital segura para interactuar con
            mi plataforma.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl underline -mb-4">
          2. Conexión a la red de prueba Mumbai Testnet:
        </h2>
        {<br />}
        <p>
          1. Abre la extensión de Metamask en tu navegador.{<br />}
          2. Haz clic en el ícono del avatar en la esquina superior derecha de
          la ventana de Metamask y selecciona "Configuración".{<br />}
          3. En la pestaña "Redes", Haz clic en el botón "Agregar red" para
          abrir el formulario de configuración de la red.{<br />}
          5. A continuación, completa los siguientes detalles en el formulario:
          {<br />}
          {<br />}
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
          ¡Listo! Ahora estás conectado a la red de prueba Mumbai Testnet en
          Metamask y podrás participar en las votaciones electrónicas
          blockchain sin problemas.{<br />}
        </p>
      </div>

      <div>
        <h2 className="text-xl underline -mb-4">
          3. Obtención de Matic para tu billetera:
        </h2>
        {<br />}
        <p>
          Necesitarás tener Matic en tu billetera de Metamask para poder
          participar en las votaciones. Visita{" "}
          <a
            href="https://mumbaifaucet.com/"
            target="_blank"
            className="text-blue-500"
          >
            https://mumbaifaucet.com/
          </a>{" "}
          para obtener Matic gratuito en la red de prueba. Asegúrate de estar
          conectado a la red de prueba Mumbai Testnet en Metamask. Sigue las
          instrucciones en el sitio web para cargar Matic a tu billetera
          proporcionando la dirección de tu billetera Metamask cuando se te
          solicite
        </p>
      </div>
      <Link to="/Home" className="bg-blue-500 mx-auto px-8 py-2 rounded-2xl">
        Ir a Votar
      </Link>
    </div>
  );
};

export default Landing;
