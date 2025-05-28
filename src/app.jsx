import React, { useState } from 'react';
import CamadaForm from './components/CamadaForm';
import LayupView from './components/LayupView';

export default function App() {
  const [camadas, setCamadas] = useState([]);
  const [resultado, setResultado] = useState(null);

  const adicionarCamada = (camada) => {
    setCamadas([...camadas, camada]);
  };

  const calcular = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/calcular`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ camadas })
    });
    const data = await response.json();
    setResultado(data);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Calculadora Trap Limpo</h1>
      <CamadaForm onAdicionar={adicionarCamada} />
      <button onClick={calcular} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Calcular</button>
      {resultado && <LayupView resultado={resultado} />}
    </div>
  );
}
