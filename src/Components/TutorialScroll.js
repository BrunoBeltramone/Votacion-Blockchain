"use client";
import React, { useState } from "react";
import { StickyScroll } from "./ui/stickyScrollReveal";
import metamask1 from "../assets/images/metamask1.png";
import metamask2 from "../assets/images/Metamask2.png";
import metamask3 from "../assets/images/Metamask3.png";

export function TutorialScroll() {
  const [fullscreen, setFullscreen] = useState(false);

  function toggleFullscreen(id) {
    setFullscreen(!fullscreen);
    const elemento = document.getElementById(id);
    if (!document.fullscreenElement) {
      elemento.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  const content = [
    {
      title: "1. Instalar Metamask:",
      description:
        "Antes de comenzar, asegúrate de tener instalada la extensión de Metamask en tu navegador. Puedes encontrarla en metamask.io e instalarla siguiendo las instrucciones. Una vez que tengas Metamask instalado, crea una cuenta si aún no tienes una. Esto te proporcionará una billetera digital segura para interactuar con mi plataforma.",
      content: (
        <div
        id="contenedor-imagen1"
          onClick={() => toggleFullscreen("contenedor-imagen1")}
          className="width: '100vw', height: '100vh' mt-10  flex items-center justify-center text-white"
        >
          <img
            className="width: '100vw', height: '100vh' "
            src={metamask1}
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "2. Conexión a la red de prueba Mumbai Testnet",
      description: `1. Abre la extensión de Metamask en tu navegador.\n2. Haz clic en el ícono del avatar en la esquina superior derecha de la ventana de Metamask y selecciona 'Configuración'.3. En la pestaña 'Redes', Haz clic en el botón 'Agregar red' para abrir el formulario de configuración de la red. 5. A continuación, completa el formulario con la informacion proporcionada al final de la pagina:`,
      content: (
        <div
        id="contenedor-imagen2"
          onClick={() => toggleFullscreen("contenedor-imagen2")}
          className="width: '100vw', height: '100vh' mt-10 flex items-center justify-center text-white"
        >
          <img
            className="width: '100vw', height: '100vh' "
            src={metamask2}
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "3. Obtención de Matic para tu billetera:",
      description: `Necesitarás tener Matic en tu billetera de Metamask para poder
        participar en las votaciones. Visita https://mumbaifaucet.com/
        para obtener Matic gratuito en la red de prueba. Asegúrate de estar
        conectado a la red de prueba Mumbai Testnet en Metamask. Sigue las
        instrucciones en el sitio web para cargar Matic a tu billetera
        proporcionando la dirección de tu billetera Metamask cuando se te
        solicite`,
      content: (
        <div
        id="contenedor-imagen2"
          onClick={() => toggleFullscreen("contenedor-imagen2")}
          className="width: '100vw', height: '100vh' mt-10 flex items-center justify-center text-white"
        >
          <img
            className="width: '100vw', height: '100vh' "
            src={metamask3}
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
