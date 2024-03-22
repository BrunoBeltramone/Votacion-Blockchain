import { Candidatos } from "./Candidatos";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { VOTACION_ABI } from "../ABI";
import { Link } from "react-router-dom";
import { NewCard } from "./NewCard";

function Home() {
  const [connectedContract, setConnectedContract] = useState({});
  const [signer, setSigner] = useState("");
  const [signerAddress, setSignerAddress] = useState("");
  const [votos, setVotos] = useState({});
  const [addressForm, setAddressForm] = useState("");
  const AdminWallet = "0xFc4b802475F911b06Ec791f361A43637bDb190b6";

  const toBytes32 = (text) => ethers.utils.formatBytes32String(text);
  // Sacar Comillas al provider, descomentar UseEffect, descomentar OnlyAdmin
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    contractInteraction();
    connect();
  }, []);

  //Coneccion a la cuenta de metamask
  const connectAccount = async () => {
    await provider.send("eth_requestAccounts", []);
    return;
  };

  // Sirve para poder firmar una transaccion
  const getSigner = async (provider) => {
    provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    signer.getAddress().then((address) => {
      setSignerAddress(address);
    });

    return signer;
  };

  //Hace la conexion con el SC - necesita del getSigner
  const connect = () => {
    getSigner(provider).then((signer) => {
      setSigner(signer);
    });
  };

  //Permite interactuar con el Contrato
  const contractInteraction = () => {
    const contractAddress = "0xa99023b9a3578ceE6e3B008Ea1EDe2c2b1185Ffc";
    setConnectedContract(
      new ethers.Contract(contractAddress, VOTACION_ABI, provider)
    );
    console.log(connectedContract);
  };

  // Me conecto directamente a la funcion Votar
  const Votar = async (nombre) => {
    const txn = await connectedContract
      .connect(signer)
      .votar(toBytes32(nombre), { gasLimit: 300000 });
    console.log(txn);
  };

  // Me conecto directamente a la funcion VerVotoCandidato
  const VerVotoCandidato = async (candidato) => {
    const txn = await connectedContract
      .connect(signer)
      .VerVotos(toBytes32(candidato), { gasLimit: 500000 });
    // console.log(parseInt(txn._hex))
    return parseInt(txn._hex);
  };

  // Hago un llamado a varias funciones para ver el voto de todos
  const VerVotos = async () => {
    var votoJuan = await VerVotoCandidato("Juan");
    var votoLucas = await VerVotoCandidato("Lucas");
    var votoClaudia = await VerVotoCandidato("Claudia");

    setVotos({
      Juan: votoJuan,
      Lucas: votoLucas,
      Claudia: votoClaudia,
    });
    console.log(votos)
  };

  // Modificador para que la funcion solo la use el Administrador
  const OnlyAdmin = () => {
    if (signerAddress === AdminWallet) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="flex flex-col justify-center m-auto xl:h-full w-full  font-serif">
      <div className="flex flex-col xl:flex-row space-y-5 xl:space-y-0 mt-10">
        {Candidatos &&
          Candidatos.map((c) => (
            <NewCard
              votos={votos}
              votar={Votar}
              nombre={c.nombre}
              imagen={c.imagen}
              biografia={c.biografia}
              key={c.nombre}
            />
          ))}
      </div>
      {OnlyAdmin() ? (
        <div>
          <button
            className="flex px-10 py-2 text-xl m-auto my-4 bg-zinc-00 border-2 border-teal-500 hover:bg-teal-600 transition-colors duration-200 text-white rounded-lg"
            onClick={() => VerVotos()}
          >
            {" "}
            Load votes{" "}
          </button>{" "}
        </div>
      ) : (
        <Link
          to="/"
          className="flex px-10 py-2 text-xl m-auto my-7 bg-zinc-00 border-2 border-teal-500 hover:bg-teal-600 transition-colors duration-200 text-white rounded-lg"
        >
          Volver a la Configuracion Inicial ⬅
        </Link>
      )}
    </div>
  );
}

export default Home;
