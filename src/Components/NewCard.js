"use client";
import React from "react";
import { BackgroundGradient } from "./ui/card";

export function NewCard({ nombre, imagen, biografia, votar, votos }) {
  return (
    <div className=" p-1 mx-auto ">
      <BackgroundGradient className="rounded-[22px]  max-w-md p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
        <img
          src={imagen}
          alt={nombre}
          className="h-72 w-60 mx-auto  rounded-lg"
        />
        <p className="text-base text-center sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {nombre}
        </p>

        <p className="text-md h-56 text-neutral-600 dark:text-neutral-400">
          {biografia}
        </p>
        <div className="flex flex-col justify-center pt-2">
          <button
            onClick={() => votar(nombre)}
            className="rounded-full w-36 mx-auto p-6  py-2 text-white flex justify-center items-center bg-black mt-4 text-md font-bold dark:bg-zinc-800 hover:bg-teal-700 "
          >
            <span>Votar </span>
          </button>
            {/* Solo Admin */}
            {votos[nombre] != undefined ? (
              <h1 className="flex justify-center text-xl p-3 text-white">
                Votos: {votos[nombre]}
              </h1>
            ) : (
              ""
            )}
        </div>
      </BackgroundGradient>
    </div>
  );
}
