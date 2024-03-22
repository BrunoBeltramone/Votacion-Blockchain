import React from "react";

const Card = ({ nombre, imagen, votar, votos }) => {
  const AdminWallet = "0x0A9D4ac10D0f6fD3Ff3DF39BA3ba208cB1A30460";

  return (
    <div className=" bg-neutral-400 my-5 p-1 mx-auto font-serif rounded-lg ">
      <img
        src={imagen}
        className="flex justify-center bg-white m-auto rounded-lg h-96 w-96 "
      />
      <h1 className="flex justify-center text-3xl p-3">{nombre}</h1>
      <button
        className="flex px-10 py-2 text-xl m-auto my-2 bg-white hover:bg-neutral-600 transition-colors duration-200 hover:text-white rounded-lg"
        nombre={nombre}
        onClick={() => votar(nombre)}
      >
        {" "}
        Votar
      </button>
      {/* Solo Admin */}
      {votos[nombre] != undefined ? (
        <h1 className="flex justify-center text-xl p-3 ">
          Votos: {votos[nombre]}
        </h1>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
