import React, { useState } from "react";
import './Cadastro.css'

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      nome,
      email,
      idade,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
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
      <h2>Cadastro</h2>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="idade">Idade:</label>
          <input
            type="text"
            id="idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
