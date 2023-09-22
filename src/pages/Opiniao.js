import React, { useState } from "react";
import './Cadastro.css'


export default function Opiniao() {
  const [nome, setNome] = useState('');
  const [opiniao, setOpiniao] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dados = { nome, opiniao };
    
    try {
      const response = await fetch("http://127.0.0.1:8000/opiniao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      if (response.ok) {
        
        console.log("Dados salvos com sucesso!");
      } else {
       
        console.error("Erro ao salvar os dados.");
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  };

  return (
    <div>
      <h2>Entre em contato</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="opiniao">Opinião/Reclamação:</label>
          <textarea
            id="opiniao"
            value={opiniao}
            onChange={(e) => setOpiniao(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
