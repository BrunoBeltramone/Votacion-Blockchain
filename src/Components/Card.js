import React from "react";

const Card = ({ nombre, imagen, votar, votos }) => {

  const AdminWallet = "0x0A9D4ac10D0f6fD3Ff3DF39BA3ba208cB1A30460"

  return (
    <div className="border border-orange-600 my-5 p-1 mx-auto font-serif rounded-lg">
      <img src={imagen} className="flex justify-center m-auto rounded-lg max-h-72" />
      <h1 className="flex justify-center text-2xl p-3">{nombre}</h1>
      <button className="flex justify-center px-4 py-1 text-center m-auto my-2 bg-orange-500 hover:bg-orange-600 rounded-lg" nombre={nombre} onClick={() => votar(nombre)}> Vote </button>
      {/* Solo Admin */}
      {votos[nombre] != undefined ? <h1 className="flex justify-center text-md p-3">Votos: {votos[nombre]}</h1> : ""} 
      
    </div>
  );
};

export default Card;
