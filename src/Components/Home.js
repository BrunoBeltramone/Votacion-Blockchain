import { Candidatos } from "./Candidatos";
import Card from "./Card";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { VOTACION_ABI } from "../ABI";
import { Link } from "react-router-dom";

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

  const connectAccount = async () => {
    await provider.send("eth_requestAccounts", []);
    return;
  };

  const getSigner = async (provider) => {
    provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    signer.getAddress().then((address) => {
      setSignerAddress(address);
    });

    return signer;
  };

  const connect = () => {
    getSigner(provider).then((signer) => {
      setSigner(signer);
    });
  };

  const contractInteraction = () => {
    const contractAddress = "0xa99023b9a3578ceE6e3B008Ea1EDe2c2b1185Ffc";
    setConnectedContract(
      new ethers.Contract(contractAddress, VOTACION_ABI, provider)
    );
    console.log(connectedContract);
  };

  const Votar = async (nombre) => {
    const txn = await connectedContract
      .connect(signer)
      .votar(toBytes32(nombre), { gasLimit: 300000 });
    console.log(txn);
  };

  const AutorizarWallet = async (address) => {
    connect();
    const txn = await connectedContract
      .connect(signer)
      .AutorizarVotante(address, { gasLimit: 300000 });
    console.log(txn);
    setAddressForm("");
  };

  const handler = (e) => {
    setAddressForm(e.target.value);
    console.log(addressForm);
  };

  const VerVotoCandidato = async (candidato) => {
    const txn = await connectedContract
      .connect(signer)
      .VerVotos(toBytes32(candidato), { gasLimit: 300000 });
    // console.log(parseInt(txn._hex))
    return parseInt(txn._hex);
  };

  const VerVotos = async () => {
    var votoJuan = await VerVotoCandidato("Juan");
    var votoLucas = await VerVotoCandidato("Lucas");
    var votoClaudia = await VerVotoCandidato("Claudia");

    setVotos({
      Juan: votoJuan,
      Lucas: votoLucas,
      Claudia: votoClaudia,
    });
  };

  const OnlyAdmin = () => {
    if (signerAddress === AdminWallet) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="flex flex-col justify-center m-auto xl:h-full w-full  font-serif">
      <h1 className="lg:fixed lg:top-101 w-full lg::left-0 font-bold text-5xl text-center">
        Candidates
      </h1>
      <div className="flex flex-col xl:flex-row mt-10">
        {Candidatos &&
          Candidatos.map((c) => (
            <Card
              votos={votos}
              votar={Votar}
              nombre={c.nombre}
              imagen={c.imagen}
              key={c.nombre}
            />
          ))}
      </div>
      {OnlyAdmin() ? (
        <div>
          <button
            className="flex px-10 py-2 text-xl m-auto my-4 bg-neutral-400 border-2 border-neutral-500 hover:bg-neutral-500 transition-colors duration-200 hover:text-white rounded-lg"
            onClick={() => VerVotos()}
          >
            {" "}
            Load votes{" "}
          </button>{" "}
        </div>
      ) : (
        <Link to="/" className="bg-neutral-400 border-2 border-neutral-500 hover:bg-neutral-500 transition-colors duration-200 mx-auto px-8 py-2 mt-8 rounded-2xl text-lg" >
          Volver a la Configuracion Inicial ⬅
        </Link>
      )}
    </div>
  );
}

export default Home;
