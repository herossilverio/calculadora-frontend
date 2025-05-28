import React, { useState } from 'react';

export default function CamadaForm({ onAdicionar }) {
  const [tipo, setTipo] = useState('reforco');
  const [peso, setPeso] = useState('');
  const [espessura, setEspessura] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdicionar({ tipo, peso, espessura });
    setPeso('');
    setEspessura('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="border p-2">
        <option value="reforco">Reforço</option>
        <option value="nucleo">Núcleo</option>
      </select>
      <input type="number" placeholder="Peso" value={peso} onChange={(e) => setPeso(e.target.value)} className="border p-2" />
      <input type="number" placeholder="Espessura" value={espessura} onChange={(e) => setEspessura(e.target.value)} className="border p-2" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Adicionar Camada</button>
    </form>
  );
}
