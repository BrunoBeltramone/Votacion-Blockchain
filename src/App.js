import "./App.css";
import { Candidatos } from "./Components/Candidatos";
import Card from "./Components/Card";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { VOTACION_ABI } from "./ABI";

function App() {
  const [connectedContract, setConnectedContract] = useState({});
  const [signer, setSigner] = useState("");
  const [signerAddress, setSignerAddress] = useState("");
  const [votos, setVotos] = useState({});
  const [addressForm, setAddressForm] = useState("");
  const AdminWallet = "0x0A9D4ac10D0f6fD3Ff3DF39BA3ba208cB1A30460";

  const toBytes32 = (text) => ethers.utils.formatBytes32String(text);
  // Sacar Comillas al provider, descomentar UseEffect, descomentar OnlyAdmin
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    contractInteraction();
    connect();
   }, [])

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
    const contractAddress = "0x33E2b895CbD98a44266bd039973079328870A721";
    setConnectedContract(
      new ethers.Contract(contractAddress, VOTACION_ABI, provider)
    );
  };

  const Votar = async (nombre) => {
    const txn = await connectedContract
      .connect(signer)
      .Votar(toBytes32(nombre), { gasLimit: 300000 });
    console.log(txn);
  };

  const AutorizarWallet = async (address) => {
    // console.log(address)
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
    if(signerAddress === AdminWallet){
      return true
    } else {
      return false
    }
  };

  return (
    <div className="mx-auto my-auto h-full w-full">
      {/* {
        OnlyAdmin() ?
        <h1 className=" m-auto justify-center pt-5 text-2xl text-center"> Rol: Administrador </h1> :
        <h1 className=" m-auto justify-center pt-5 text-2xl text-center"> Rol: Usuario </h1> 
      } */}
      <h1 className=" m-auto justify-center pt-1 text-4xl text-center">
        {" "}
        Candidates{" "}
      </h1>
      <div className="flex flex-col md:flex-row">
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
          <div className="flex flex-row p-x-10 justify-around">
            <button
              onClick={() => AutorizarWallet(addressForm)}
              className="px-4 py-1 bg-orange-500 hover:bg-orange-600 rounded-lg"
            >
              Authorize voter
            </button>
            <input
              placeholder="Address"
              className=" border border-orange-500 rounded-lg placeholder:text-center text-center w-7/12"
              type="text"
              value={addressForm}
              onChange={(e) => handler(e)}
            />
          </div>
          <button
            className="flex justify-center px-4 py-1 mx-auto mt-5 text-center m-auto bg-orange-500 hover:bg-orange-600 rounded-lg"
            onClick={() => VerVotos()}
          >
            {" "}
            Load votes{" "}
          </button>{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
