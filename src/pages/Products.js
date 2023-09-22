import React, { useEffect, useState } from "react";
//import './Products.css';
import axios from 'axios'
//import Item from "../components/Item"

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);


  
  const comprarProduto = async (product) => {
    try {
      // Enviar uma solicitação POST para sua API com o ID do produto
      await axios.post('sua-api/comprar', { productId: product.id });

      // Atualize os produtos ou o carrinho conforme necessário
      // Você pode chamar fetchData novamente para buscar os produtos atualizados

      // Ou você pode marcar o produto como comprado no estado local
      const produtosAtualizados = products.map((p) =>
        p.id === product.id ? { ...p, comprado: true } : p
      );
      setProducts(produtosAtualizados);
    } catch (error) {
      console.error('Erro ao comprar o produto:', error);
    }
  };


  return (
    <div id="products-list" className="products-list">
      {products.map((product) => (
        <article key={product.id} className="product">
          <img src={product.image} alt="Imagem do produto" />
          <h3 className="price-product">R$ {product.price}</h3>
          <p className="name-product">{product.title}</p>
          <button
            className={`buy-product ${product.comprado ? 'comprado' : ''}`}
            onClick={() => comprarProduto(product)}
            disabled={product.comprado}>
            {product.comprado ? 'Comprado' : 'Comprar'}
          </button>
        </article>
      ))}

        <footer>
            <div className = "text-intro">
                <p>Confira também:</p>
                <p>Anuncie seus produtos</p>
                <p>Informações sobre a loja</p>
                <p>Entre em contato</p>
            </div>
        </footer>
    </div>
  );
}