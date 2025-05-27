import React from 'react';

export default function LayupView({ resultado }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Resultado</h2>
      <p>Total de resina: {resultado.total_resina.toFixed(2)} g</p>
      <ul className="mt-2">
        {resultado.layup.map((camada, index) => (
          <li key={index}>
            {camada.tipo} | Peso: {camada.peso} | Esp: {camada.espessura} | Resina: {camada.resina.toFixed(2)} g
          </li>
        ))}
      </ul>
    </div>
  );
}
